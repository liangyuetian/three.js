// 球体
import {renderer, scene, camera, material} from '../scene.js'

// 球体（SphereGeometry）的构造函数是：

// THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength)
// 其中，radius是半径；segmentsWidth表示经度上的切片数；segmentsHeight表示纬度上的切片数；phiStart表示经度开始的弧度；phiLength表示经度跨过的弧度；thetaStart表示纬度开始的弧度；thetaLength表示纬度跨过的弧度。

const sphere = new THREE.Mesh(
    // 半径为3，经度划分成8份，纬度划分成6份的球体
    new THREE.SphereGeometry(3, 8, 6),
    material
)

scene.add(sphere)

renderer.render(scene, camera)
