// 我们都知道，太阳光常常被看作平行光，这是因为相对地球上物体的尺度而言，太阳离我们的距离足够远。对于任意平行的平面，平行光照射的亮度都是相同的，而与平面所在位置无关。
//
// 平行光的构造函数是：
//
// THREE.DirectionalLight(hex, intensity)
// 其中，hex是光源十六进制的颜色值；intensity是亮度，缺省值为1，表示100%亮度。
//
// 此外，对于平行光而言，设置光源位置尤为重要。

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

    // 设置环境光
    var light = new THREE.DirectionalLight();
    light.position.set(2, 5, 3);
    scene.add(light);
    // 注意，这里设置光源位置并不意味着所有光从(2, 5, 3)点射出（如果是的话，就成了点光源），而是意味着，平行光将以矢量(-2, -5, -3)的方向照射到所有平面。
    // 因此，平面亮度与平面的位置无关，而只与平面的法向量相关。只要平面是平行的，那么得到的光照也一定是相同的。

    var rightCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({color: 0x00ff00}));
    rightCube.position.x = 3;
    rightCube.position.y = -2;
    scene.add(rightCube);

    var leftCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({color: 0x00ff00}));
    leftCube.position.x = -3;
    scene.add(leftCube);

    renderer.render(scene, camera);
}
init()
