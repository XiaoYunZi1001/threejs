function create_geometry_30(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            1985.142, -337.406, -499.629,
            1985.139, -152.406, 1495.180,
            1993.459, -134.344, 1495.180,
            1993.459, -134.344, 1495.180,
            1993.463, -319.344, -499.629,
            1985.142, -337.406, -499.629,
            1965.050, -344.875, -499.629,
            1965.046, -159.875, 1495.180,
            1985.139, -152.406, 1495.180,
            1985.139, -152.406, 1495.180,
            1985.142, -337.406, -499.629,
            1965.050, -344.875, -499.629,
            1944.959, -337.406, -499.629,
            1944.955, -152.406, 1495.180,
            1965.046, -159.875, 1495.180,
            1965.046, -159.875, 1495.180,
            1965.050, -344.875, -499.629,
            1944.959, -337.406, -499.629,
            1936.637, -319.344, -499.629,
            1936.633, -134.344, 1495.180,
            1944.955, -152.406, 1495.180,
            1944.955, -152.406, 1495.180,
            1944.959, -337.406, -499.629,
            1936.637, -319.344, -499.629,
            1944.958, -301.313, -499.629,
            1944.955, -116.313, 1495.180,
            1936.633, -134.344, 1495.180,
            1936.633, -134.344, 1495.180,
            1936.637, -319.344, -499.629,
            1944.958, -301.313, -499.629,
            1965.049, -293.844, -499.629,
            1965.046, -108.844, 1495.180,
            1944.955, -116.313, 1495.180,
            1944.955, -116.313, 1495.180,
            1944.958, -301.313, -499.629,
            1965.049, -293.844, -499.629,
            1985.141, -301.313, -499.629,
            1985.139, -116.313, 1495.180,
            1965.046, -108.844, 1495.180,
            1965.046, -108.844, 1495.180,
            1965.049, -293.844, -499.629,
            1985.141, -301.313, -499.629,
            1993.463, -319.344, -499.629,
            1993.459, -134.344, 1495.180,
            1985.139, -116.313, 1495.180,
            1985.139, -116.313, 1495.180,
            1985.141, -301.313, -499.629,
            1993.463, -319.344, -499.629,
            1965.046, -108.844, 1495.180,
            1985.139, -116.313, 1495.180,
            1993.459, -134.344, 1495.180,
            1944.955, -116.313, 1495.180,
            1965.046, -108.844, 1495.180,
            1993.459, -134.344, 1495.180,
            1936.633, -134.344, 1495.180,
            1944.955, -116.313, 1495.180,
            1993.459, -134.344, 1495.180,
            1944.955, -152.406, 1495.180,
            1936.633, -134.344, 1495.180,
            1993.459, -134.344, 1495.180,
            1965.046, -159.875, 1495.180,
            1944.955, -152.406, 1495.180,
            1993.459, -134.344, 1495.180,
            1985.139, -152.406, 1495.180,
            1965.046, -159.875, 1495.180,
            1993.459, -134.344, 1495.180,
            1965.050, -344.875, -499.629,
            1985.142, -337.406, -499.629,
            1993.463, -319.344, -499.629,
            1993.463, -319.344, -499.629,
            1985.141, -301.313, -499.629,
            1965.049, -293.844, -499.629,
            1993.463, -319.344, -499.629,
            1965.049, -293.844, -499.629,
            1944.958, -301.313, -499.629,
            1993.463, -319.344, -499.629,
            1944.958, -301.313, -499.629,
            1936.637, -319.344, -499.629,
            1993.463, -319.344, -499.629,
            1936.637, -319.344, -499.629,
            1944.959, -337.406, -499.629,
            1965.050, -344.875, -499.629,
            1993.463, -319.344, -499.629,
               1944.959, -337.406, -499.629
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.667, 0.742, -0.069,
            -0.690, 0.721, -0.067,
            -0.908, 0.418, -0.039,
            -0.908, 0.418, -0.039,
            -0.908, 0.418, -0.039,
            -0.667, 0.742, -0.069,
            0.000, 0.996, -0.092,
            0.000, 0.996, -0.092,
            -0.690, 0.721, -0.067,
            -0.690, 0.721, -0.067,
            -0.667, 0.742, -0.069,
            0.000, 0.996, -0.092,
            0.667, 0.742, -0.069,
            0.690, 0.721, -0.067,
            0.000, 0.996, -0.092,
            0.000, 0.996, -0.092,
            0.000, 0.996, -0.092,
            0.667, 0.742, -0.069,
            1.000, 0.024, -0.002,
            1.000, -0.025, 0.002,
            0.690, 0.721, -0.067,
            0.690, 0.721, -0.067,
            0.667, 0.742, -0.069,
            1.000, 0.024, -0.002,
            0.689, -0.721, 0.067,
            0.667, -0.742, 0.069,
            1.000, -0.025, 0.002,
            1.000, -0.025, 0.002,
            1.000, 0.024, -0.002,
            0.689, -0.721, 0.067,
            0.000, -0.996, 0.092,
            0.000, -0.996, 0.092,
            0.667, -0.742, 0.069,
            0.667, -0.742, 0.069,
            0.689, -0.721, 0.067,
            0.000, -0.996, 0.092,
            -0.689, -0.721, 0.067,
            -0.667, -0.742, 0.069,
            0.000, -0.996, 0.092,
            0.000, -0.996, 0.092,
            0.000, -0.996, 0.092,
            -0.689, -0.721, 0.067,
            -0.907, -0.419, 0.039,
            -0.907, -0.419, 0.039,
            -0.667, -0.742, 0.069,
            -0.667, -0.742, 0.069,
            -0.689, -0.721, 0.067,
            -0.907, -0.419, 0.039,
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