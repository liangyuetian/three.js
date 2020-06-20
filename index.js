// const renderer = THREE.WebGLRenderer({
//     canvas: document.getElementById('mainCanvas')
// })

const renderer = new THREE.WebGLRenderer()

renderer.setSize(400, 300)

document.body.appendChild(renderer.domElement)
renderer.setClearColor(0x000000);

const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
// camera.position.set(0, 0, 5);
// scene.add(camera);
//
// const cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
//     new THREE.MeshBasicMaterial({
//         color: 0xff0000
//     })
// );
// scene.add(cube);
//
// 正交投影摄像机
// THREE.OrthographicCamera(left, right, top, bottom, near, far)
const camera = new THREE.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10);
camera.position.set(4, -3, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));
// 不过一定要注意，lookAt函数接受的是一个THREE.Vector3的实例，
// 因此千万别写成camera.lookAt(0, 0, 0)，否则非但不能得到理想的效果，而且不会报错，使你很难找到问题所在。
scene.add(camera);

// 原点处创建一个边长为1的正方体，为了和透视效果做对比，这里我们使用wireframe而不是实心的材质，以便看到正方体后方的边
const cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    })
);
scene.add(cube);

// scene.add(camera);
renderer.render(scene, camera);
