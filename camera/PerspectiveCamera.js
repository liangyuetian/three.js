// 透视投影照相机（Perspective Camera）的构造函数是：

// THREE.PerspectiveCamera(fov, aspect, near, far)

// 透视图中，灰色的部分是视景体，是可能被渲染的物体所在的区域。fov是视景体竖直方向上的张角（是角度制而非弧度制），如侧视图所示。

// aspect等于width / height，是照相机水平方向和竖直方向长度的比值，通常设为Canvas的横纵比例。

// near和far分别是照相机到视景体最近、最远的距离，均为正值，且far应大于near。

const renderer = new THREE.WebGLRenderer()
renderer.setSize(400, 300)

document.body.appendChild(renderer.domElement)
renderer.setClearColor(0x000000);

// 创建容器
const scene = new THREE.Scene()

// 设置投影摄像机
const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
camera.position.set(0, 0, 5);
scene.add(camera);

// 设置一个在原点处的边长为1的正方体
const cube = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1), // 立方体
    new THREE.MeshBasicMaterial({ // 基本材料
        color: 0xff00,
        wireframe: true // 线框
    })
)
scene.add(cube);

renderer.render(scene, camera)
