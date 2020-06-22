// 使用基本材质（BasicMaterial）的物体，渲染后物体的颜色始终为该材质的颜色，而不会由于光照产生明暗、阴影效果。如果没有指定材质的颜色，则颜色是随机的。其构造函数是：
//
// THREE.MeshBasicMaterial(opt)


// 其中，opt可以缺省，或者为包含各属性的值。如新建一个不透明度为0.75的黄色材质：

new THREE.MeshBasicMaterial({
    color: 0xffff00,
    opacity: 0.75
});

// 接下来，我们介绍几个较为常用的属性。
//
// visible：是否可见，默认为true
// side：渲染面片正面或是反面，默认为正面THREE.FrontSide，可设置为反面THREE.BackSide，或双面THREE.DoubleSide
// wireframe：是否渲染线而非面，默认为false
// color：十六进制RGB颜色，如红色表示为0xff0000
// map：使用纹理贴图，详见4.5节
// 对于基本材质，即使改变场景中的光源，使用该材质的物体也始终为颜色处处相同的效果。
// 当然，这不是很具有真实感，因此，接下来我们将介绍更为真实的光照模型：Lambert光照模型以及Phong光照模型。
