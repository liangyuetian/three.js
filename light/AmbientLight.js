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

    var light = new THREE.AmbientLight(0xcccccc); // 环境光
    scene.add(light);

    var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ambient: 0x00ff00}));
    greenCube.position.x = 3;
    scene.add(greenCube);

    var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ambient: 0xffffff}));
    whiteCube.position.x = -3;
    scene.add(whiteCube);

    renderer.render(scene, camera);
}
init()
