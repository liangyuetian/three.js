
// 点光源是不计光源大小，可以看作一个点发出的光源。点光源照到不同物体表面的亮度是线性递减的，因此，离点光源距离越远的物体会显得越暗。
//
// 点光源的构造函数是：
//
// THREE.PointLight(hex, intensity, distance)
// 其中，hex是光源十六进制的颜色值；intensity是亮度，缺省值为1，表示100%亮度；distance是光源最远照射到的距离，缺省值为0。
var scene = null;
var camera = null;
var renderer = null;

function init() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);
    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(5, 15, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    // 设置点光源
    var light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(0, 1.5, 2);
    scene.add(light);

    var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({color: 0x00ff00}));
    greenCube.position.x = 3;
    scene.add(greenCube);

    var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({color: 0xffffff}));
    whiteCube.position.x = -3;
    scene.add(whiteCube);

    renderer.render(scene, camera);
}
init()
