var scene = null;
var camera = null;
var renderer = null;

var cube = null;
var alpha = 0;

function init() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

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
    // 对于聚光灯，需要设置shadowCameraNear、shadowCameraFar、shadowCameraFov三个值，
    // 类比我们在第二章学到的透视投影照相机，只有介于shadowCameraNear与shadowCameraFar之间的物体将产生阴影，shadowCameraFov表示张角。

    // 对于平行光，需要设置shadowCameraNear、shadowCameraFar、shadowCameraLeft、shadowCameraRight、shadowCameraTop以及shadowCameraBottom六个值，
    // 相当于正交投影照相机的六个面。同样，只有在这六个面围成的长方体内的物体才会产生阴影效果。
    light.shadowCameraNear = 2;
    light.shadowCameraFar = 10;
    light.shadowCameraFov = 30;
    light.shadowCameraVisible = true; // 为了看到阴影照相机的位置

    // 这里实现阴影效果的方法是Shadow Mapping，即阴影是作为渲染前计算好的贴图贴上去的，因而会受到贴图像素大小的限制。
    // 所以可以通过设置shadowMapWidth与shadowMapHeight值控制贴图的大小，来改变阴影的精确度。
    light.shadowMapWidth = 1024;
    light.shadowMapHeight = 1024;
    light.shadowDarkness = 0.3; // 修改阴影的深浅

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
