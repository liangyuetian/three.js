var scene = null;
var camera = null;
var renderer = null;

var mesh = null;
var id = null;

function init() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);
    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(15, 25, 25);
    camera.lookAt(new THREE.Vector3(0, 2, 0));
    scene.add(camera);

    var loader = new THREE.ColladaLoader();
    loader.load('lib/port.dae', function (collada) {
        if (collada.scene.children.length > 0) {
            scene.add(collada.scene.children[0]);
        }
    });

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(20, 10, 5);
    scene.add(light);

    id = setInterval(draw, 20);
}

function draw() {
    renderer.render(scene, camera);
}
init()
