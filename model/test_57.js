function create_geometry_57(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            8175.730, 772.469, -1475.172,
            8175.730, 772.469, -842.516,
            8190.002, 786.750, -842.516,
            8190.002, 786.750, -842.516,
            8190.002, 786.750, -1475.172,
            8175.730, 772.469, -1475.172,
            8175.730, 581.031, -1475.172,
            8175.730, 581.031, -842.516,
            8175.730, 772.469, -842.516,
            8175.730, 772.469, -842.516,
            8175.730, 772.469, -1475.172,
            8175.730, 581.031, -1475.172,
            8190.002, 566.750, -1475.172,
            8190.002, 566.750, -842.516,
            8175.730, 581.031, -842.516,
            8175.730, 581.031, -842.516,
            8175.730, 581.031, -1475.172,
            8190.002, 566.750, -1475.172,
            8361.459, 566.750, -1475.172,
            8361.459, 566.750, -842.516,
            8190.002, 566.750, -842.516,
            8190.002, 566.750, -842.516,
            8190.002, 566.750, -1475.172,
            8361.459, 566.750, -1475.172,
            8375.730, 581.031, -1475.172,
            8375.730, 581.031, -842.516,
            8361.459, 566.750, -842.516,
            8361.459, 566.750, -842.516,
            8361.459, 566.750, -1475.172,
            8375.730, 581.031, -1475.172,
            8375.730, 772.469, -1475.172,
            8375.730, 772.469, -842.516,
            8375.730, 581.031, -842.516,
            8375.730, 581.031, -842.516,
            8375.730, 581.031, -1475.172,
            8375.730, 772.469, -1475.172,
            8361.459, 786.750, -1475.172,
            8361.459, 786.750, -842.516,
            8375.730, 772.469, -842.516,
            8375.730, 772.469, -842.516,
            8375.730, 772.469, -1475.172,
            8361.459, 786.750, -1475.172,
            8190.002, 786.750, -1475.172,
            8190.002, 786.750, -842.516,
            8361.459, 786.750, -842.516,
            8361.459, 786.750, -842.516,
            8361.459, 786.750, -1475.172,
            8190.002, 786.750, -1475.172,
            8175.730, 581.031, -842.516,
            8190.002, 566.750, -842.516,
            8361.459, 566.750, -842.516,
            8361.459, 566.750, -842.516,
            8375.730, 581.031, -842.516,
            8375.730, 772.469, -842.516,
            8175.730, 581.031, -842.516,
            8361.459, 566.750, -842.516,
            8375.730, 772.469, -842.516,
            8375.730, 772.469, -842.516,
            8361.459, 786.750, -842.516,
            8190.002, 786.750, -842.516,
            8175.730, 581.031, -842.516,
            8375.730, 772.469, -842.516,
            8190.002, 786.750, -842.516,
            8175.730, 772.469, -842.516,
            8175.730, 581.031, -842.516,
            8190.002, 786.750, -842.516,
            8361.459, 786.750, -1475.172,
            8375.730, 772.469, -1475.172,
            8375.730, 581.031, -1475.172,
            8375.730, 581.031, -1475.172,
            8361.459, 566.750, -1475.172,
            8190.002, 566.750, -1475.172,
            8190.002, 566.750, -1475.172,
            8175.730, 581.031, -1475.172,
            8175.730, 772.469, -1475.172,
            8375.730, 581.031, -1475.172,
            8190.002, 566.750, -1475.172,
            8175.730, 772.469, -1475.172,
            8361.459, 786.750, -1475.172,
            8375.730, 581.031, -1475.172,
            8175.730, 772.469, -1475.172,
            8190.002, 786.750, -1475.172,
            8361.459, 786.750, -1475.172,
               8175.730, 772.469, -1475.172
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
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
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
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
