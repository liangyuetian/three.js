// 从官网上的定义：
//
// A point light that can cast shadow in one direction.
//
//     可以看出，聚光灯是一种特殊的点光源，它能够朝着一个方向投射光线。聚光灯投射出的是类似圆锥形的光线，这与我们现实中看到的聚光灯是一致的。
//
// 其构造函数为：
//
// THREE.SpotLight(hex, intensity, distance, angle, exponent)
// 相比点光源，多了angle和exponent两个参数。angle是聚光灯的张角，缺省值是Math.PI / 3，最大值是Math.PI / 2；exponent是光强在偏离target的衰减指数（target需要在之后定义，缺省值为(0, 0, 0)），缺省值是10。
//
// 在调用构造函数之后，除了设置光源本身的位置，一般还需要设置target：
//
// light.position.set(x1, y1, z1);
// light.target.position.set(x2, y2, z2);
// 除了设置light.target.position的方法外，如果想让聚光灯跟着某一物体移动（就像真的聚光灯！），可以target指定为该物体：
//
// var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
//     new THREE.MeshLambertMaterial({color: 0x00ff00}));
//
// var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
// light.target = cube;
// 不妨试着让该物体运动起来看下效果吧！
//

var scene = null;
var camera = null;
var renderer = null;

var cube = null;
var alpha = 0;

function init() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setSize(400, 300);

    // var container = document.getElementById('mainCanvas');
    // container.appendChild(renderer.domElement);
    renderer.shadowMapEnabled = true;

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(5, 15, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8, 16, 16),
        new THREE.MeshLambertMaterial({color: 0xcccccc}));
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);

    cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshLambertMaterial({color: 0x00ff00}));
    cube.position.x = 2;
    cube.castShadow = true;
    scene.add(cube);

    var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
    light.position.set(2, 5, 3);
    light.target = cube;
    light.castShadow = true;
    scene.add(light);

    // ambient light
    var ambient = new THREE.AmbientLight(0x666666);
    scene.add(ambient);

    requestAnimationFrame(draw);
}

function draw() {
    alpha += 0.01;
    if (alpha > Math.PI * 2) {
        alpha -= Math.PI * 2;
    }

    cube.position.set(2 * Math.cos(alpha), 0, 2 * Math.sin(alpha));

    renderer.render(scene, camera);

    requestAnimationFrame(draw);
}
init()
