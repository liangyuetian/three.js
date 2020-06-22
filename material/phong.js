// Phong材质（MeshPhongMaterial）是符合Phong光照模型的材质。
// 和Lambert不同的是，Phong模型考虑了镜面反射的效果，因此对于金属、镜面的表现尤为适合。
//
// 漫反射部分和Lambert光照模型是相同的，镜面反射部分的模型为：
//
//  Ispecular = Ks * Is * (cos(alpha)) ^ n
// 其中，Ispecular是镜面反射的光强，Ks是材质表面镜面反射系数，Is是光源强度，alpha是反射光与视线的夹角，n是高光指数，越大则高光光斑越小。
//
// 由于漫反射部分与Lambert模型是一致的，因此，如果不指定镜面反射系数，而只设定漫反射，其效果与Lambert是相同的：


new THREE.MeshPhongMaterial({
    color: 0xffff00
});

// 同样地，可以指定emissive和ambient值，这里不再说明。下面就specular值指定镜面反射系数作说明。首先，我们只使用镜面反射，将高光设为红色，应用于一个球体：
//
// var material = new THREE.MeshPhongMaterial({
//     specular: 0xff0000
// });
// var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 8), material);
