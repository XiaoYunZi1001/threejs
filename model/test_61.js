function create_geometry_61(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -8521.918, -177.344, -1475.172,
            -8521.918, -177.344, -842.516,
            -8536.189, -191.625, -842.516,
            -8536.189, -191.625, -842.516,
            -8536.189, -191.625, -1475.172,
            -8521.918, -177.344, -1475.172,
            -8521.918, 14.094, -1475.172,
            -8521.918, 14.094, -842.516,
            -8521.918, -177.344, -842.516,
            -8521.918, -177.344, -842.516,
            -8521.918, -177.344, -1475.172,
            -8521.918, 14.094, -1475.172,
            -8536.189, 28.375, -1475.172,
            -8536.189, 28.375, -842.516,
            -8521.918, 14.094, -842.516,
            -8521.918, 14.094, -842.516,
            -8521.918, 14.094, -1475.172,
            -8536.189, 28.375, -1475.172,
            -8707.646, 28.375, -1475.172,
            -8707.646, 28.375, -842.516,
            -8536.189, 28.375, -842.516,
            -8536.189, 28.375, -842.516,
            -8536.189, 28.375, -1475.172,
            -8707.646, 28.375, -1475.172,
            -8721.918, 14.094, -1475.172,
            -8721.918, 14.094, -842.516,
            -8707.646, 28.375, -842.516,
            -8707.646, 28.375, -842.516,
            -8707.646, 28.375, -1475.172,
            -8721.918, 14.094, -1475.172,
            -8721.918, -177.344, -1475.172,
            -8721.918, -177.344, -842.516,
            -8721.918, 14.094, -842.516,
            -8721.918, 14.094, -842.516,
            -8721.918, 14.094, -1475.172,
            -8721.918, -177.344, -1475.172,
            -8707.646, -191.625, -1475.172,
            -8707.646, -191.625, -842.516,
            -8721.918, -177.344, -842.516,
            -8721.918, -177.344, -842.516,
            -8721.918, -177.344, -1475.172,
            -8707.646, -191.625, -1475.172,
            -8536.189, -191.625, -1475.172,
            -8536.189, -191.625, -842.516,
            -8707.646, -191.625, -842.516,
            -8707.646, -191.625, -842.516,
            -8707.646, -191.625, -1475.172,
            -8536.189, -191.625, -1475.172,
            -8521.918, 14.094, -842.516,
            -8536.189, 28.375, -842.516,
            -8707.646, 28.375, -842.516,
            -8707.646, 28.375, -842.516,
            -8721.918, 14.094, -842.516,
            -8721.918, -177.344, -842.516,
            -8521.918, 14.094, -842.516,
            -8707.646, 28.375, -842.516,
            -8721.918, -177.344, -842.516,
            -8721.918, -177.344, -842.516,
            -8707.646, -191.625, -842.516,
            -8536.189, -191.625, -842.516,
            -8521.918, 14.094, -842.516,
            -8721.918, -177.344, -842.516,
            -8536.189, -191.625, -842.516,
            -8521.918, -177.344, -842.516,
            -8521.918, 14.094, -842.516,
            -8536.189, -191.625, -842.516,
            -8707.646, -191.625, -1475.172,
            -8721.918, -177.344, -1475.172,
            -8721.918, 14.094, -1475.172,
            -8721.918, 14.094, -1475.172,
            -8707.646, 28.375, -1475.172,
            -8536.189, 28.375, -1475.172,
            -8536.189, 28.375, -1475.172,
            -8521.918, 14.094, -1475.172,
            -8521.918, -177.344, -1475.172,
            -8721.918, 14.094, -1475.172,
            -8536.189, 28.375, -1475.172,
            -8521.918, -177.344, -1475.172,
            -8707.646, -191.625, -1475.172,
            -8721.918, 14.094, -1475.172,
            -8521.918, -177.344, -1475.172,
            -8536.189, -191.625, -1475.172,
            -8707.646, -191.625, -1475.172,
               -8521.918, -177.344, -1475.172
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x959595,
            shininess: 2.000,
            ambient: 0x959595,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
