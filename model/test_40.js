function create_geometry_40(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -2175.008, -337.406, -499.637,
            -2175.009, -152.406, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2166.687, -319.344, -499.637,
            -2175.008, -337.406, -499.637,
            -2195.100, -344.875, -499.637,
            -2195.102, -159.875, 1436.172,
            -2175.009, -152.406, 1436.172,
            -2175.009, -152.406, 1436.172,
            -2175.008, -337.406, -499.637,
            -2195.100, -344.875, -499.637,
            -2215.191, -337.406, -499.637,
            -2215.194, -152.406, 1436.172,
            -2195.102, -159.875, 1436.172,
            -2195.102, -159.875, 1436.172,
            -2195.100, -344.875, -499.637,
            -2215.191, -337.406, -499.637,
            -2223.513, -319.344, -499.637,
            -2223.515, -134.344, 1436.172,
            -2215.194, -152.406, 1436.172,
            -2215.194, -152.406, 1436.172,
            -2215.191, -337.406, -499.637,
            -2223.513, -319.344, -499.637,
            -2215.191, -301.313, -499.637,
            -2215.194, -116.313, 1436.172,
            -2223.515, -134.344, 1436.172,
            -2223.515, -134.344, 1436.172,
            -2223.513, -319.344, -499.637,
            -2215.191, -301.313, -499.637,
            -2195.100, -293.844, -499.637,
            -2195.102, -108.844, 1436.172,
            -2215.194, -116.313, 1436.172,
            -2215.194, -116.313, 1436.172,
            -2215.191, -301.313, -499.637,
            -2195.100, -293.844, -499.637,
            -2175.008, -301.313, -499.637,
            -2175.009, -116.313, 1436.172,
            -2195.102, -108.844, 1436.172,
            -2195.102, -108.844, 1436.172,
            -2195.100, -293.844, -499.637,
            -2175.008, -301.313, -499.637,
            -2166.687, -319.344, -499.637,
            -2166.689, -134.344, 1436.172,
            -2175.009, -116.313, 1436.172,
            -2175.009, -116.313, 1436.172,
            -2175.008, -301.313, -499.637,
            -2166.687, -319.344, -499.637,
            -2195.102, -108.844, 1436.172,
            -2175.009, -116.313, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2215.194, -116.313, 1436.172,
            -2195.102, -108.844, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2223.515, -134.344, 1436.172,
            -2215.194, -116.313, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2215.194, -152.406, 1436.172,
            -2223.515, -134.344, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2195.102, -159.875, 1436.172,
            -2215.194, -152.406, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2175.009, -152.406, 1436.172,
            -2195.102, -159.875, 1436.172,
            -2166.689, -134.344, 1436.172,
            -2195.100, -344.875, -499.637,
            -2175.008, -337.406, -499.637,
            -2166.687, -319.344, -499.637,
            -2166.687, -319.344, -499.637,
            -2175.008, -301.313, -499.637,
            -2195.100, -293.844, -499.637,
            -2166.687, -319.344, -499.637,
            -2195.100, -293.844, -499.637,
            -2215.191, -301.313, -499.637,
            -2166.687, -319.344, -499.637,
            -2215.191, -301.313, -499.637,
            -2223.513, -319.344, -499.637,
            -2166.687, -319.344, -499.637,
            -2223.513, -319.344, -499.637,
            -2215.191, -337.406, -499.637,
            -2195.100, -344.875, -499.637,
            -2166.687, -319.344, -499.637,
               -2215.191, -337.406, -499.637
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.667, 0.742, -0.071,
            -0.690, 0.721, -0.069,
            -0.908, 0.418, -0.040,
            -0.908, 0.418, -0.040,
            -0.908, 0.418, -0.040,
            -0.667, 0.742, -0.071,
            0.000, 0.995, -0.095,
            0.000, 0.995, -0.095,
            -0.690, 0.721, -0.069,
            -0.690, 0.721, -0.069,
            -0.667, 0.742, -0.071,
            0.000, 0.995, -0.095,
            0.667, 0.742, -0.071,
            0.690, 0.721, -0.069,
            0.000, 0.995, -0.095,
            0.000, 0.995, -0.095,
            0.000, 0.995, -0.095,
            0.667, 0.742, -0.071,
            1.000, 0.025, -0.002,
            1.000, -0.026, 0.002,
            0.690, 0.721, -0.069,
            0.690, 0.721, -0.069,
            0.667, 0.742, -0.071,
            1.000, 0.025, -0.002,
            0.690, -0.721, 0.069,
            0.667, -0.742, 0.071,
            1.000, -0.026, 0.002,
            1.000, -0.026, 0.002,
            1.000, 0.025, -0.002,
            0.690, -0.721, 0.069,
            0.000, -0.995, 0.095,
            0.000, -0.995, 0.095,
            0.667, -0.742, 0.071,
            0.667, -0.742, 0.071,
            0.690, -0.721, 0.069,
            0.000, -0.995, 0.095,
            -0.690, -0.721, 0.069,
            -0.667, -0.742, 0.071,
            0.000, -0.995, 0.095,
            0.000, -0.995, 0.095,
            0.000, -0.995, 0.095,
            -0.690, -0.721, 0.069,
            -0.907, -0.419, 0.040,
            -0.907, -0.419, 0.040,
            -0.667, -0.742, 0.071,
            -0.667, -0.742, 0.071,
            -0.690, -0.721, 0.069,
            -0.907, -0.419, 0.040,
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
               0.000, 0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            shininess: 50.000,
            ambient: 0xFFFFFF,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
