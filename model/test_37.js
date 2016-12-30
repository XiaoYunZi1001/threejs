function create_geometry_37(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            1987.114, 138.875, -499.625,
            1987.112, -46.125, 1495.180,
            1995.433, -64.156, 1495.180,
            1995.433, -64.156, 1495.180,
            1995.436, 120.844, -499.625,
            1987.114, 138.875, -499.625,
            1967.022, 146.344, -499.625,
            1967.020, -38.625, 1495.180,
            1987.112, -46.125, 1495.180,
            1987.112, -46.125, 1495.180,
            1987.114, 138.875, -499.625,
            1967.022, 146.344, -499.625,
            1946.932, 138.875, -499.625,
            1946.929, -46.125, 1495.180,
            1967.020, -38.625, 1495.180,
            1967.020, -38.625, 1495.180,
            1967.022, 146.344, -499.625,
            1946.932, 138.875, -499.625,
            1938.609, 120.844, -499.625,
            1938.606, -64.156, 1495.180,
            1946.929, -46.125, 1495.180,
            1946.929, -46.125, 1495.180,
            1946.932, 138.875, -499.625,
            1938.609, 120.844, -499.625,
            1946.932, 102.813, -499.625,
            1946.929, -82.188, 1495.180,
            1938.606, -64.156, 1495.180,
            1938.606, -64.156, 1495.180,
            1938.609, 120.844, -499.625,
            1946.932, 102.813, -499.625,
            1967.022, 95.344, -499.625,
            1967.020, -89.656, 1495.180,
            1946.929, -82.188, 1495.180,
            1946.929, -82.188, 1495.180,
            1946.932, 102.813, -499.625,
            1967.022, 95.344, -499.625,
            1987.114, 102.813, -499.625,
            1987.112, -82.188, 1495.180,
            1967.020, -89.656, 1495.180,
            1967.020, -89.656, 1495.180,
            1967.022, 95.344, -499.625,
            1987.114, 102.813, -499.625,
            1995.436, 120.844, -499.625,
            1995.433, -64.156, 1495.180,
            1987.112, -82.188, 1495.180,
            1987.112, -82.188, 1495.180,
            1987.114, 102.813, -499.625,
            1995.436, 120.844, -499.625,
            1967.020, -89.656, 1495.180,
            1987.112, -82.188, 1495.180,
            1995.433, -64.156, 1495.180,
            1946.929, -82.188, 1495.180,
            1967.020, -89.656, 1495.180,
            1995.433, -64.156, 1495.180,
            1938.606, -64.156, 1495.180,
            1946.929, -82.188, 1495.180,
            1995.433, -64.156, 1495.180,
            1946.929, -46.125, 1495.180,
            1938.606, -64.156, 1495.180,
            1995.433, -64.156, 1495.180,
            1967.020, -38.625, 1495.180,
            1946.929, -46.125, 1495.180,
            1995.433, -64.156, 1495.180,
            1987.112, -46.125, 1495.180,
            1967.020, -38.625, 1495.180,
            1995.433, -64.156, 1495.180,
            1967.022, 146.344, -499.625,
            1987.114, 138.875, -499.625,
            1995.436, 120.844, -499.625,
            1995.436, 120.844, -499.625,
            1987.114, 102.813, -499.625,
            1967.022, 95.344, -499.625,
            1995.436, 120.844, -499.625,
            1967.022, 95.344, -499.625,
            1946.932, 102.813, -499.625,
            1995.436, 120.844, -499.625,
            1946.932, 102.813, -499.625,
            1938.609, 120.844, -499.625,
            1995.436, 120.844, -499.625,
            1938.609, 120.844, -499.625,
            1946.932, 138.875, -499.625,
            1967.022, 146.344, -499.625,
            1995.436, 120.844, -499.625,
               1946.932, 138.875, -499.625
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.667, 0.742, 0.069,
            0.690, 0.721, 0.067,
            0.907, 0.419, 0.039,
            0.907, 0.419, 0.039,
            0.907, 0.419, 0.039,
            0.667, 0.742, 0.069,
            -0.000, 0.996, 0.092,
            -0.000, 0.996, 0.092,
            0.690, 0.721, 0.067,
            0.690, 0.721, 0.067,
            0.667, 0.742, 0.069,
            -0.000, 0.996, 0.092,
            -0.667, 0.742, 0.069,
            -0.690, 0.721, 0.067,
            -0.000, 0.996, 0.092,
            -0.000, 0.996, 0.092,
            -0.000, 0.996, 0.092,
            -0.667, 0.742, 0.069,
            -1.000, 0.025, 0.002,
            -1.000, -0.025, -0.002,
            -0.690, 0.721, 0.067,
            -0.690, 0.721, 0.067,
            -0.667, 0.742, 0.069,
            -1.000, 0.025, 0.002,
            -0.689, -0.721, -0.067,
            -0.667, -0.742, -0.069,
            -1.000, -0.025, -0.002,
            -1.000, -0.025, -0.002,
            -1.000, 0.025, 0.002,
            -0.689, -0.721, -0.067,
            -0.000, -0.996, -0.092,
            -0.000, -0.996, -0.092,
            -0.667, -0.742, -0.069,
            -0.667, -0.742, -0.069,
            -0.689, -0.721, -0.067,
            -0.000, -0.996, -0.092,
            0.689, -0.721, -0.067,
            0.667, -0.742, -0.069,
            -0.000, -0.996, -0.092,
            -0.000, -0.996, -0.092,
            -0.000, -0.996, -0.092,
            0.689, -0.721, -0.067,
            0.907, -0.419, -0.039,
            0.907, -0.419, -0.039,
            0.667, -0.742, -0.069,
            0.667, -0.742, -0.069,
            0.689, -0.721, -0.067,
            0.907, -0.419, -0.039,
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
               0.000, 0.000, -1.000
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