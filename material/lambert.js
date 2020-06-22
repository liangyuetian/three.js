// Lambert材质（MeshLambertMaterial）是符合Lambert光照模型的材质。
// Lambert光照模型的主要特点是只考虑漫反射而不考虑镜面反射的效果，因而对于金属、镜子等需要镜面反射效果的物体就不适应，对于其他大部分物体的漫反射效果都是适用的。

// 其光照模型公式为：
//
// Idiffuse = Kd * Id * cos(theta)
// 其中，Idiffuse是漫反射光强，Kd是物体表面的漫反射属性，Id是光强，theta是光的入射角弧度。
//
// 当然，对于使用Three.js的Lambert材质，不需要了解以上公式就可以直接使用。创建一个黄色的Lambert材质的方法为：

new THREE.MeshLambertMaterial({
    color: 0xffff00
})

// color是用来表现材质对散射光的反射能力，也是最常用来设置材质颜色的属性。除此之外，还可以用ambient和emissive控制材质的颜色。
//
// ambient表示对环境光的反射能力，只有当设置了AmbientLight后，该值才是有效的，材质对环境光的反射能力与环境光强相乘后得到材质实际表现的颜色。
//
// emissive是材质的自发光颜色，可以用来表现光源的颜色。单独使用红色的自发光：
//
// new THREE.MeshLambertMaterial({
//     emissive: 0xff0000
// })

// 如果同时使用红色的自发光与黄色的散射光：
//
// new THREE.MeshLambertMaterial({
//     color: 0xffff00,
//     emissive: 0xff0000
// })
