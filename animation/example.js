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
    camera.position.set(5, 5, 20);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    mesh = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
        new THREE.MeshLambertMaterial({
            color: 0xffff00
        }));
    scene.add(mesh);

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(20, 10, 5);
    scene.add(light);

    id = setInterval(draw, 20);
}

function draw() {
    stat.begin();
    mesh.rotation.y = (mesh.rotation.y + 0.01) % (Math.PI * 2);
    renderer.render(scene, camera);
    stat.end();
}

function stop() {
    if (id !== null) {
        clearInterval(id);
        id = null;
    }
}
init()
