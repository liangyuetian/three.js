// 法向材质

// 法向材质可以将材质的颜色设置为其法向量的方向，有时候对于调试很有帮助。
//
// 法向材质的设定很简单，甚至不用设置任何参数：
//
// new THREE.MeshNormalMaterial()

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
});
renderer.setClearColor(0x000000);
const scene = new THREE.Scene();

// camera
const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
camera.position.set(25, 25, 25);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

// light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 15, 5);
scene.add(light);

const material = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), material);
scene.add(cube);

renderer.render(scene, camera);
