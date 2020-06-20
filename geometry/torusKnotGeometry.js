// 圆环结
// 如果说圆环面是甜甜圈，那么圆环结（TorusKnotGeometry）就是打了结的甜甜圈，其构造参数为：
//
// THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale)
// 前四个参数在圆环面中已经有所介绍，p和q是控制其样式的参数，一般可以缺省，如果需要详细了解，请学习圆环结的相关知识；heightScale是在z轴方向上的缩放。
import {renderer, scene, camera, material} from '../scene.js'

const sphere = new THREE.Mesh(
    // 创建一个粗糙的圆环面
    new THREE.TorusKnotGeometry(2, 0.5, 32, 8),
    material
)

scene.add(sphere)

renderer.render(scene, camera)
