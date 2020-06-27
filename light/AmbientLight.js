
// 环境光是指场景整体的光照效果，是由于场景内若干光源的多次反射形成的亮度一致的效果，通常用来为整个场景指定一个基础亮度。因此，环境光没有明确的光源位置，在各处形成的亮度也是一致的。
//
// 在设置环境光时，只需要指定光的颜色：
//
// THREE.AmbientLight(hex)
// 其中，hex是十六进制的RGB颜色信息，如红色表示为0xff0000。
//
// 创建环境光并将其添加到场景中的完整做法是：
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

    // 添加光源
    var light = new THREE.AmbientLight(0xcccccc); // 环境光
    scene.add(light);

    // 绿色的长方体
    var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ambient: 0x00ff00}));
    greenCube.position.x = 3;
    scene.add(greenCube);

    // 白色的长方体
    var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ambient: 0xffffff}));
    whiteCube.position.x = -3;
    scene.add(whiteCube);

    renderer.render(scene, camera);
}
init()
