// 立方体
// 但它其实是长方体，也就是长宽高可以设置为不同的值。其构造函数是：

// THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)

// 这里，width是x方向上的长度；height是y方向上的长度；depth是z方向上的长度；
// 后三个参数分别是在三个方向上的分段数，如widthSegments为3的话，代表x方向上水平分为三份。
// 一般情况下不需要分段的话，可以不设置后三个参数，后三个参数的缺省值为1。其他几何形状中的分段也是类似的，下面不做说明。

const renderer = new THREE.WebGLRenderer()
renderer.setSize(300, 300)

document.body.appendChild(renderer.domElement)
renderer.setClearColor(0x000000)

const scene = new THREE.Scene()


// 正交投影摄像机
// THREE.OrthographicCamera(left, right, top, bottom, near, far)
const camera = new THREE.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10);
camera.position.set(2, 1, 2);
camera.lookAt(new THREE.Vector3(-1, 0, 1));
// 不过一定要注意，lookAt函数接受的是一个THREE.Vector3的实例，
// 因此千万别写成camera.lookAt(0, 0, 0)，否则非但不能得到理想的效果，而且不会报错，使你很难找到问题所在。
scene.add(camera);

// 设置立方体
const cubeGeometry = new THREE.CubeGeometry(1, 2, 3)
const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: true
})
const cube = new THREE.Mesh(cubeGeometry, material)

scene.add(cube)

renderer.render(scene, camera)
