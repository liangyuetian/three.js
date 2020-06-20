// 圆形
import {renderer, scene, camera, material} from '../scene.js'

// 圆形（CircleGeometry）可以创建圆形或者扇形，其构造函数是：
//
// THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
// 这四个参数都是球体中介绍过的，这里不再赘述，直接来看个例子。new THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4)可以创建一个在x轴和y轴所在平面的三分之二圆的扇形：
// radius 半径
// segments 圆盘上的切片数
// thetaStart 纬度开始的弧度
// thetaLength 纬度跨过的弧度
const sphere = new THREE.Mesh(
    // 半径为3，经度划分成8份，纬度划分成6份的球体
    new THREE.CircleGeometry(3, 18, Math.PI / 90, Math.PI / 3 * 4),
    material
)

scene.add(sphere)

renderer.render(scene, camera)
