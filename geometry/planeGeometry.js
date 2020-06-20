// 平面，就是长方形
import {renderer, scene, camera, material} from '../scene.js'

// 这里的平面（PlaneGeometry）其实是一个长方形，而不是数学意义上无限大小的平面。其构造函数为：
//
// THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
// 其中，width是x方向上的长度；height是y方向上的长度；后两个参数同样表示分段。
//
// new THREE.PlaneGeometry(2, 4);创建的平面在x轴和y轴所在平面内
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 4),
    material
)

scene.add(plane)

renderer.render(scene, camera)
