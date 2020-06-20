// 圆柱体
import {renderer, scene, camera, material} from '../scene.js'

// 圆柱体（CylinderGeometry）的构造函数是：
//
// THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
// 其中，radiusTop与radiusBottom分别是顶面和底面的半径，
// 由此可知，当这两个参数设置为不同的值时，实际上创建的是一个圆台；
// height是圆柱体的高度；
// radiusSegments与heightSegments可类比球体中的分段；
// openEnded是一个布尔值，表示是否没有顶面和底面，缺省值为false，表示有顶面和底面。


const sphere = new THREE.Mesh(
// 一个顶面与底面半径都为2，高度为4的圆柱体
    // new THREE.CylinderGeometry(2, 2, 4, 18, 3),
    // 底面半径设为3创建一个圆台
    new THREE.CylinderGeometry(2, 3, 4, 18, 3),
    // 将创建一个没有顶面与底面的圆台
    // new THREE.CylinderGeometry(2, 3, 4, 18, 3, true),
    material
)

scene.add(sphere)

renderer.render(scene, camera)
