const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300)

document.body.appendChild(renderer.domElement)
renderer.setClearColor(0x000000);

// 创建容器
const scene = new THREE.Scene()

// 设置投影摄像机
const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
camera.position.set(25, 25, 25);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

// draw axes to help you understand the coordinate
function drawAxes(scene) {
    // x-axis
    const xGeo = new THREE.Geometry();
    xGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    xGeo.vertices.push(new THREE.Vector3(3, 0, 0));
    const xMat = new THREE.LineBasicMaterial({
        color: 0xff0000
    });
    const xAxis = new THREE.Line(xGeo, xMat);
    scene.add(xAxis);

    // y-axis
    const yGeo = new THREE.Geometry();
    yGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    yGeo.vertices.push(new THREE.Vector3(0, 3, 0));
    const yMat = new THREE.LineBasicMaterial({
        color: 0x00ff00
    });
    const yAxis = new THREE.Line(yGeo, yMat);
    scene.add(yAxis);

    // z-axis
    const zGeo = new THREE.Geometry();
    zGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    zGeo.vertices.push(new THREE.Vector3(0, 0, 3));
    const zMat = new THREE.LineBasicMaterial({
        color: 0x00ccff
    });
    const zAxis = new THREE.Line(zGeo, zMat);
    scene.add(zAxis);
}

drawAxes(scene);

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
