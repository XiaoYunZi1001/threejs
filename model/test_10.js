function create_geometry_10(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -31492.043, -333.594, -845.383,
            -31492.043, -209.469, -845.383,
            -31536.971, -209.469, -845.383,
            -31536.971, -209.469, -845.383,
            -31536.971, -333.594, -845.383,
            -31492.043, -333.594, -845.383,
            -31536.971, -333.594, -845.383,
            -31536.971, -209.469, -845.383,
            -31671.010, -209.469, -845.383,
            -31671.010, -209.469, -845.383,
            -31671.010, -333.594, -845.383,
            -31536.971, -333.594, -845.383,
            -31671.010, -333.594, -845.383,
            -31671.010, -209.469, -845.383,
            -31709.746, -209.469, -845.383,
            -31709.746, -209.469, -845.383,
            -31709.746, -333.594, -845.383,
            -31671.010, -333.594, -845.383,
            -31492.043, -209.469, -845.383,
            -31492.043, 186.219, -845.383,
            -31536.971, 186.219, -845.383,
            -31536.971, 186.219, -845.383,
            -31536.971, -209.469, -845.383,
            -31492.043, -209.469, -845.383,
            -31536.971, -209.469, -845.383,
            -31536.971, 186.219, -845.383,
            -31671.010, 186.219, -845.383,
            -31671.010, 186.219, -845.383,
            -31671.010, -209.469, -845.383,
            -31536.971, -209.469, -845.383,
            -31671.010, -209.469, -845.383,
            -31671.010, 186.219, -845.383,
            -31709.746, 186.219, -845.383,
            -31709.746, 186.219, -845.383,
            -31709.746, -209.469, -845.383,
            -31671.010, -209.469, -845.383,
            -31492.043, 186.219, -845.383,
            -31492.043, 316.406, -845.383,
            -31536.971, 316.406, -845.383,
            -31536.971, 316.406, -845.383,
            -31536.971, 186.219, -845.383,
            -31492.043, 186.219, -845.383,
            -31536.971, 186.219, -845.383,
            -31536.971, 316.406, -845.383,
            -31671.010, 316.406, -845.383,
            -31671.010, 316.406, -845.383,
            -31671.010, 186.219, -845.383,
            -31536.971, 186.219, -845.383,
            -31671.010, 186.219, -845.383,
            -31671.010, 316.406, -845.383,
            -31709.746, 316.406, -845.383,
            -31709.746, 316.406, -845.383,
            -31709.746, 186.219, -845.383,
            -31671.010, 186.219, -845.383,
            -31492.043, -333.594, -925.383,
            -31536.971, -333.594, -925.383,
            -31536.971, -209.469, -925.383,
            -31536.971, -209.469, -925.383,
            -31492.043, -209.469, -925.383,
            -31492.043, -333.594, -925.383,
            -31536.971, -333.594, -925.383,
            -31671.010, -333.594, -925.383,
            -31671.010, -209.469, -925.383,
            -31671.010, -209.469, -925.383,
            -31536.971, -209.469, -925.383,
            -31536.971, -333.594, -925.383,
            -31671.010, -333.594, -925.383,
            -31709.746, -333.594, -925.383,
            -31709.746, -209.469, -925.383,
            -31709.746, -209.469, -925.383,
            -31671.010, -209.469, -925.383,
            -31671.010, -333.594, -925.383,
            -31492.043, -209.469, -925.383,
            -31536.971, -209.469, -925.383,
            -31536.971, 186.219, -925.383,
            -31536.971, 186.219, -925.383,
            -31492.043, 186.219, -925.383,
            -31492.043, -209.469, -925.383,
            -31536.971, -209.469, -1545.383,
            -31671.010, -209.469, -1545.383,
            -31671.010, 186.219, -1545.383,
            -31671.010, 186.219, -1545.383,
            -31536.971, 186.219, -1545.383,
            -31536.971, -209.469, -1545.383,
            -31671.010, -209.469, -925.383,
            -31709.746, -209.469, -925.383,
            -31709.746, 186.219, -925.383,
            -31709.746, 186.219, -925.383,
            -31671.010, 186.219, -925.383,
            -31671.010, -209.469, -925.383,
            -31492.043, 186.219, -925.383,
            -31536.971, 186.219, -925.383,
            -31536.971, 316.406, -925.383,
            -31536.971, 316.406, -925.383,
            -31492.043, 316.406, -925.383,
            -31492.043, 186.219, -925.383,
            -31536.971, 186.219, -925.383,
            -31671.010, 186.219, -925.383,
            -31671.010, 316.406, -925.383,
            -31671.010, 316.406, -925.383,
            -31536.971, 316.406, -925.383,
            -31536.971, 186.219, -925.383,
            -31671.010, 186.219, -925.383,
            -31709.746, 186.219, -925.383,
            -31709.746, 316.406, -925.383,
            -31709.746, 316.406, -925.383,
            -31671.010, 316.406, -925.383,
            -31671.010, 186.219, -925.383,
            -31492.043, -333.594, -845.383,
            -31536.971, -333.594, -845.383,
            -31536.971, -333.594, -925.383,
            -31536.971, -333.594, -925.383,
            -31492.043, -333.594, -925.383,
            -31492.043, -333.594, -845.383,
            -31536.971, -333.594, -845.383,
            -31671.010, -333.594, -845.383,
            -31671.010, -333.594, -925.383,
            -31671.010, -333.594, -925.383,
            -31536.971, -333.594, -925.383,
            -31536.971, -333.594, -845.383,
            -31671.010, -333.594, -845.383,
            -31709.746, -333.594, -845.383,
            -31709.746, -333.594, -925.383,
            -31709.746, -333.594, -925.383,
            -31671.010, -333.594, -925.383,
            -31671.010, -333.594, -845.383,
            -31709.746, -333.594, -845.383,
            -31709.746, -209.469, -845.383,
            -31709.746, -209.469, -925.383,
            -31709.746, -209.469, -925.383,
            -31709.746, -333.594, -925.383,
            -31709.746, -333.594, -845.383,
            -31709.746, -209.469, -845.383,
            -31709.746, 186.219, -845.383,
            -31709.746, 186.219, -925.383,
            -31709.746, 186.219, -925.383,
            -31709.746, -209.469, -925.383,
            -31709.746, -209.469, -845.383,
            -31709.746, 186.219, -845.383,
            -31709.746, 316.406, -845.383,
            -31709.746, 316.406, -925.383,
            -31709.746, 316.406, -925.383,
            -31709.746, 186.219, -925.383,
            -31709.746, 186.219, -845.383,
            -31709.746, 316.406, -845.383,
            -31671.010, 316.406, -845.383,
            -31671.010, 316.406, -925.383,
            -31671.010, 316.406, -925.383,
            -31709.746, 316.406, -925.383,
            -31709.746, 316.406, -845.383,
            -31671.010, 316.406, -845.383,
            -31536.971, 316.406, -845.383,
            -31536.971, 316.406, -925.383,
            -31536.971, 316.406, -925.383,
            -31671.010, 316.406, -925.383,
            -31671.010, 316.406, -845.383,
            -31536.971, 316.406, -845.383,
            -31492.043, 316.406, -845.383,
            -31492.043, 316.406, -925.383,
            -31492.043, 316.406, -925.383,
            -31536.971, 316.406, -925.383,
            -31536.971, 316.406, -845.383,
            -31492.043, 316.406, -845.383,
            -31492.043, 186.219, -845.383,
            -31492.043, 186.219, -925.383,
            -31492.043, 186.219, -925.383,
            -31492.043, 316.406, -925.383,
            -31492.043, 316.406, -845.383,
            -31492.043, 186.219, -845.383,
            -31492.043, -209.469, -845.383,
            -31492.043, -209.469, -925.383,
            -31492.043, -209.469, -925.383,
            -31492.043, 186.219, -925.383,
            -31492.043, 186.219, -845.383,
            -31492.043, -209.469, -845.383,
            -31492.043, -333.594, -845.383,
            -31492.043, -333.594, -925.383,
            -31492.043, -333.594, -925.383,
            -31492.043, -209.469, -925.383,
            -31492.043, -209.469, -845.383,
            -31536.971, -209.469, -925.383,
            -31671.010, -209.469, -925.383,
            -31671.010, -209.469, -1545.383,
            -31671.010, -209.469, -1545.383,
            -31536.971, -209.469, -1545.383,
            -31536.971, -209.469, -925.383,
            -31671.010, -209.469, -925.383,
            -31671.010, 186.219, -925.383,
            -31671.010, 186.219, -1545.383,
            -31671.010, 186.219, -1545.383,
            -31671.010, -209.469, -1545.383,
            -31671.010, -209.469, -925.383,
            -31671.010, 186.219, -925.383,
            -31536.971, 186.219, -925.383,
            -31536.971, 186.219, -1545.383,
            -31536.971, 186.219, -1545.383,
            -31671.010, 186.219, -1545.383,
            -31671.010, 186.219, -925.383,
            -31536.971, 186.219, -925.383,
            -31536.971, -209.469, -925.383,
            -31536.971, -209.469, -1545.383,
            -31536.971, -209.469, -1545.383,
            -31536.971, 186.219, -1545.383,
               -31536.971, 186.219, -925.383
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
