// 网格
// 在上两节中，我们学习了如何创建几何形状与材质，而网格的创建非常简单，
// 只要把几何形状与材质传入其构造函数。最常用的物体是网格（Mesh），它代表包含点、线、面的几何体，其构造函数是：
//
// Mesh(geometry, material)

const material = new THREE.MeshLambertMaterial({
    color: 0xffff00
});
const geometry = new THREE.CubeGeometry(1, 2, 3);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 修改网格属性

mesh.material = new THREE.MeshLambertMaterial({
    color: 0xff0000
})
//
// 位置、缩放、旋转
// 位置、缩放、旋转是物体三个常用属性。由于THREE.Mesh基础自THREE.Object3D，
// 因此包含scale、rotation、position三个属性。
// 它们都是THREE.Vector3实例，因此修改其值的方法是相同的，这里以位置为例。

// THREE.Vector3有x、y、z三个属性，如果只设置其中一个属性，则可以用以下方法：
mesh.position.z = 1

// 如果需要同时设置多个属性，可以使用以下两种方法：
mesh.position.set(1.5, -0.5, 0);

// 缩放对应的属性是scale，旋转对应的属性是rotation，具体方法与上例相同，分别表示沿x、y、z三轴缩放或旋转。
// mesh.position = new THREE.Vector3(1.5, -0.5, 0);
