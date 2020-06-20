// 多面体之正四面体、正八面体、正二十面体
import {renderer, scene, camera, material} from '../scene.js'

// 正四面体（TetrahedronGeometry）、正八面体（OctahedronGeometry）、正二十面体（IcosahedronGeometry）的构造函数较为类似，分别为：
//
// THREE.TetrahedronGeometry(radius, detail)
// THREE.OctahedronGeometry(radius, detail)
// THREE.IcosahedronGeometry(radius, detail)
// 其中，radius是半径；detail是细节层次（Level of Detail）的层数，对于大面片数模型，可以控制在视角靠近物体时，显示面片数多的精细模型，而在离物体较远时，显示面片数较少的粗略模型。这里我们不对detail多作展开，一般可以对这个值缺省。
//

const sphere = new THREE.Mesh(
    // 创建一个半径为3的正四面体
    // new THREE.TetrahedronGeometry(3),
    //创建一个半径为3的正八面体
    // new THREE.OctahedronGeometry(3),
    // 创建一个半径为3的正二十面体
    new THREE.IcosahedronGeometry(3),

    material

)

scene.add(sphere)

renderer.render(scene, camera)
