const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300)

document.body.appendChild(renderer.domElement)
renderer.setClearColor(0x000000);

// 创建容器
const scene = new THREE.Scene()

// 设置投影摄像机
const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
camera.position.set(0, 0, 5);
scene.add(camera);

const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: true
})

// renderer.render(scene, camera)

export {
    renderer,
    scene,
    camera,
    material
}
