function create_geometry_4(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            18502.967, -333.469, -845.383,
            18502.967, -209.344, -845.383,
            18458.039, -209.344, -845.383,
            18458.039, -209.344, -845.383,
            18458.039, -333.469, -845.383,
            18502.967, -333.469, -845.383,
            18458.039, -333.469, -845.383,
            18458.039, -209.344, -845.383,
            18324.000, -209.344, -845.383,
            18324.000, -209.344, -845.383,
            18324.000, -333.469, -845.383,
            18458.039, -333.469, -845.383,
            18324.000, -333.469, -845.383,
            18324.000, -209.344, -845.383,
            18285.264, -209.344, -845.383,
            18285.264, -209.344, -845.383,
            18285.264, -333.469, -845.383,
            18324.000, -333.469, -845.383,
            18502.967, -209.344, -845.383,
            18502.967, 186.344, -845.383,
            18458.039, 186.344, -845.383,
            18458.039, 186.344, -845.383,
            18458.039, -209.344, -845.383,
            18502.967, -209.344, -845.383,
            18458.039, -209.344, -845.383,
            18458.039, 186.344, -845.383,
            18324.000, 186.344, -845.383,
            18324.000, 186.344, -845.383,
            18324.000, -209.344, -845.383,
            18458.039, -209.344, -845.383,
            18324.000, -209.344, -845.383,
            18324.000, 186.344, -845.383,
            18285.264, 186.344, -845.383,
            18285.264, 186.344, -845.383,
            18285.264, -209.344, -845.383,
            18324.000, -209.344, -845.383,
            18502.967, 186.344, -845.383,
            18502.967, 316.531, -845.383,
            18458.039, 316.531, -845.383,
            18458.039, 316.531, -845.383,
            18458.039, 186.344, -845.383,
            18502.967, 186.344, -845.383,
            18458.039, 186.344, -845.383,
            18458.039, 316.531, -845.383,
            18324.000, 316.531, -845.383,
            18324.000, 316.531, -845.383,
            18324.000, 186.344, -845.383,
            18458.039, 186.344, -845.383,
            18324.000, 186.344, -845.383,
            18324.000, 316.531, -845.383,
            18285.264, 316.531, -845.383,
            18285.264, 316.531, -845.383,
            18285.264, 186.344, -845.383,
            18324.000, 186.344, -845.383,
            18502.967, -333.469, -925.383,
            18458.039, -333.469, -925.383,
            18458.039, -209.344, -925.383,
            18458.039, -209.344, -925.383,
            18502.967, -209.344, -925.383,
            18502.967, -333.469, -925.383,
            18458.039, -333.469, -925.383,
            18324.000, -333.469, -925.383,
            18324.000, -209.344, -925.383,
            18324.000, -209.344, -925.383,
            18458.039, -209.344, -925.383,
            18458.039, -333.469, -925.383,
            18324.000, -333.469, -925.383,
            18285.264, -333.469, -925.383,
            18285.264, -209.344, -925.383,
            18285.264, -209.344, -925.383,
            18324.000, -209.344, -925.383,
            18324.000, -333.469, -925.383,
            18502.967, -209.344, -925.383,
            18458.039, -209.344, -925.383,
            18458.039, 186.344, -925.383,
            18458.039, 186.344, -925.383,
            18502.967, 186.344, -925.383,
            18502.967, -209.344, -925.383,
            18458.039, -209.344, -1545.383,
            18324.000, -209.344, -1545.383,
            18324.000, 186.344, -1545.383,
            18324.000, 186.344, -1545.383,
            18458.039, 186.344, -1545.383,
            18458.039, -209.344, -1545.383,
            18324.000, -209.344, -925.383,
            18285.264, -209.344, -925.383,
            18285.264, 186.344, -925.383,
            18285.264, 186.344, -925.383,
            18324.000, 186.344, -925.383,
            18324.000, -209.344, -925.383,
            18502.967, 186.344, -925.383,
            18458.039, 186.344, -925.383,
            18458.039, 316.531, -925.383,
            18458.039, 316.531, -925.383,
            18502.967, 316.531, -925.383,
            18502.967, 186.344, -925.383,
            18458.039, 186.344, -925.383,
            18324.000, 186.344, -925.383,
            18324.000, 316.531, -925.383,
            18324.000, 316.531, -925.383,
            18458.039, 316.531, -925.383,
            18458.039, 186.344, -925.383,
            18324.000, 186.344, -925.383,
            18285.264, 186.344, -925.383,
            18285.264, 316.531, -925.383,
            18285.264, 316.531, -925.383,
            18324.000, 316.531, -925.383,
            18324.000, 186.344, -925.383,
            18502.967, -333.469, -845.383,
            18458.039, -333.469, -845.383,
            18458.039, -333.469, -925.383,
            18458.039, -333.469, -925.383,
            18502.967, -333.469, -925.383,
            18502.967, -333.469, -845.383,
            18458.039, -333.469, -845.383,
            18324.000, -333.469, -845.383,
            18324.000, -333.469, -925.383,
            18324.000, -333.469, -925.383,
            18458.039, -333.469, -925.383,
            18458.039, -333.469, -845.383,
            18324.000, -333.469, -845.383,
            18285.264, -333.469, -845.383,
            18285.264, -333.469, -925.383,
            18285.264, -333.469, -925.383,
            18324.000, -333.469, -925.383,
            18324.000, -333.469, -845.383,
            18285.264, -333.469, -845.383,
            18285.264, -209.344, -845.383,
            18285.264, -209.344, -925.383,
            18285.264, -209.344, -925.383,
            18285.264, -333.469, -925.383,
            18285.264, -333.469, -845.383,
            18285.264, -209.344, -845.383,
            18285.264, 186.344, -845.383,
            18285.264, 186.344, -925.383,
            18285.264, 186.344, -925.383,
            18285.264, -209.344, -925.383,
            18285.264, -209.344, -845.383,
            18285.264, 186.344, -845.383,
            18285.264, 316.531, -845.383,
            18285.264, 316.531, -925.383,
            18285.264, 316.531, -925.383,
            18285.264, 186.344, -925.383,
            18285.264, 186.344, -845.383,
            18285.264, 316.531, -845.383,
            18324.000, 316.531, -845.383,
            18324.000, 316.531, -925.383,
            18324.000, 316.531, -925.383,
            18285.264, 316.531, -925.383,
            18285.264, 316.531, -845.383,
            18324.000, 316.531, -845.383,
            18458.039, 316.531, -845.383,
            18458.039, 316.531, -925.383,
            18458.039, 316.531, -925.383,
            18324.000, 316.531, -925.383,
            18324.000, 316.531, -845.383,
            18458.039, 316.531, -845.383,
            18502.967, 316.531, -845.383,
            18502.967, 316.531, -925.383,
            18502.967, 316.531, -925.383,
            18458.039, 316.531, -925.383,
            18458.039, 316.531, -845.383,
            18502.967, 316.531, -845.383,
            18502.967, 186.344, -845.383,
            18502.967, 186.344, -925.383,
            18502.967, 186.344, -925.383,
            18502.967, 316.531, -925.383,
            18502.967, 316.531, -845.383,
            18502.967, 186.344, -845.383,
            18502.967, -209.344, -845.383,
            18502.967, -209.344, -925.383,
            18502.967, -209.344, -925.383,
            18502.967, 186.344, -925.383,
            18502.967, 186.344, -845.383,
            18502.967, -209.344, -845.383,
            18502.967, -333.469, -845.383,
            18502.967, -333.469, -925.383,
            18502.967, -333.469, -925.383,
            18502.967, -209.344, -925.383,
            18502.967, -209.344, -845.383,
            18458.039, -209.344, -925.383,
            18324.000, -209.344, -925.383,
            18324.000, -209.344, -1545.383,
            18324.000, -209.344, -1545.383,
            18458.039, -209.344, -1545.383,
            18458.039, -209.344, -925.383,
            18324.000, -209.344, -925.383,
            18324.000, 186.344, -925.383,
            18324.000, 186.344, -1545.383,
            18324.000, 186.344, -1545.383,
            18324.000, -209.344, -1545.383,
            18324.000, -209.344, -925.383,
            18324.000, 186.344, -925.383,
            18458.039, 186.344, -925.383,
            18458.039, 186.344, -1545.383,
            18458.039, 186.344, -1545.383,
            18324.000, 186.344, -1545.383,
            18324.000, 186.344, -925.383,
            18458.039, 186.344, -925.383,
            18458.039, -209.344, -925.383,
            18458.039, -209.344, -1545.383,
            18458.039, -209.344, -1545.383,
            18458.039, 186.344, -1545.383,
               18458.039, 186.344, -925.383
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
               1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x969696,
            shininess: 2.000,
            ambient: 0x969696,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
