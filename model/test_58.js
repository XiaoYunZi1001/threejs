function create_geometry_58(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            8175.729, -737.531, -1475.172,
            8175.729, -737.531, -842.516,
            8190.000, -723.250, -842.516,
            8190.000, -723.250, -842.516,
            8190.000, -723.250, -1475.172,
            8175.729, -737.531, -1475.172,
            8175.729, -928.969, -1475.172,
            8175.729, -928.969, -842.516,
            8175.729, -737.531, -842.516,
            8175.729, -737.531, -842.516,
            8175.729, -737.531, -1475.172,
            8175.729, -928.969, -1475.172,
            8190.000, -943.250, -1475.172,
            8190.000, -943.250, -842.516,
            8175.729, -928.969, -842.516,
            8175.729, -928.969, -842.516,
            8175.729, -928.969, -1475.172,
            8190.000, -943.250, -1475.172,
            8361.457, -943.250, -1475.172,
            8361.457, -943.250, -842.516,
            8190.000, -943.250, -842.516,
            8190.000, -943.250, -842.516,
            8190.000, -943.250, -1475.172,
            8361.457, -943.250, -1475.172,
            8375.729, -928.969, -1475.172,
            8375.729, -928.969, -842.516,
            8361.457, -943.250, -842.516,
            8361.457, -943.250, -842.516,
            8361.457, -943.250, -1475.172,
            8375.729, -928.969, -1475.172,
            8375.729, -737.531, -1475.172,
            8375.729, -737.531, -842.516,
            8375.729, -928.969, -842.516,
            8375.729, -928.969, -842.516,
            8375.729, -928.969, -1475.172,
            8375.729, -737.531, -1475.172,
            8361.457, -723.250, -1475.172,
            8361.457, -723.250, -842.516,
            8375.729, -737.531, -842.516,
            8375.729, -737.531, -842.516,
            8375.729, -737.531, -1475.172,
            8361.457, -723.250, -1475.172,
            8190.000, -723.250, -1475.172,
            8190.000, -723.250, -842.516,
            8361.457, -723.250, -842.516,
            8361.457, -723.250, -842.516,
            8361.457, -723.250, -1475.172,
            8190.000, -723.250, -1475.172,
            8175.729, -928.969, -842.516,
            8190.000, -943.250, -842.516,
            8361.457, -943.250, -842.516,
            8361.457, -943.250, -842.516,
            8375.729, -928.969, -842.516,
            8375.729, -737.531, -842.516,
            8175.729, -928.969, -842.516,
            8361.457, -943.250, -842.516,
            8375.729, -737.531, -842.516,
            8375.729, -737.531, -842.516,
            8361.457, -723.250, -842.516,
            8190.000, -723.250, -842.516,
            8175.729, -928.969, -842.516,
            8375.729, -737.531, -842.516,
            8190.000, -723.250, -842.516,
            8175.729, -737.531, -842.516,
            8175.729, -928.969, -842.516,
            8190.000, -723.250, -842.516,
            8361.457, -723.250, -1475.172,
            8375.729, -737.531, -1475.172,
            8375.729, -928.969, -1475.172,
            8375.729, -928.969, -1475.172,
            8361.457, -943.250, -1475.172,
            8190.000, -943.250, -1475.172,
            8190.000, -943.250, -1475.172,
            8175.729, -928.969, -1475.172,
            8175.729, -737.531, -1475.172,
            8375.729, -928.969, -1475.172,
            8190.000, -943.250, -1475.172,
            8175.729, -737.531, -1475.172,
            8361.457, -723.250, -1475.172,
            8375.729, -928.969, -1475.172,
            8175.729, -737.531, -1475.172,
            8190.000, -723.250, -1475.172,
            8361.457, -723.250, -1475.172,
               8175.729, -737.531, -1475.172
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
