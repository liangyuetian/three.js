// 圆环面
// 圆环面（TorusGeometry）就是甜甜圈的形状，其构造函数是：
//
// THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
// 其中，radius是圆环半径；tube是管道半径；radialSegments与tubularSegments分别是两个分段数，详见上图；arc是圆环面的弧度，缺省值为Math.PI * 2。
import {renderer, scene, camera, material} from '../scene.js'

const sphere = new THREE.Mesh(
    // 创建一个粗糙的圆环面
    // new THREE.TorusGeometry(3, 1, 4, 8),
    // 创建一个较为精细的圆环面
    // new THREE.TorusGeometry(3, 1, 12, 18),
    // 创建部分圆环面
    new THREE.TorusGeometry(3, 1, 12, 18, Math.PI / 3 * 2),
    material
)

scene.add(sphere)

renderer.render(scene, camera)
