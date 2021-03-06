function create_geometry_19(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -400.458, 138.875, -499.625,
            -400.459, -46.125, 1573.242,
            -392.138, -64.156, 1573.242,
            -392.138, -64.156, 1573.242,
            -392.137, 120.844, -499.625,
            -400.458, 138.875, -499.625,
            -420.550, 146.344, -499.625,
            -420.551, -38.625, 1573.242,
            -400.459, -46.125, 1573.242,
            -400.459, -46.125, 1573.242,
            -400.458, 138.875, -499.625,
            -420.550, 146.344, -499.625,
            -440.641, 138.875, -499.625,
            -440.643, -46.125, 1573.242,
            -420.551, -38.625, 1573.242,
            -420.551, -38.625, 1573.242,
            -420.550, 146.344, -499.625,
            -440.641, 138.875, -499.625,
            -448.963, 120.844, -499.625,
            -448.965, -64.156, 1573.242,
            -440.643, -46.125, 1573.242,
            -440.643, -46.125, 1573.242,
            -440.641, 138.875, -499.625,
            -448.963, 120.844, -499.625,
            -440.641, 102.813, -499.625,
            -440.643, -82.188, 1573.242,
            -448.965, -64.156, 1573.242,
            -448.965, -64.156, 1573.242,
            -448.963, 120.844, -499.625,
            -440.641, 102.813, -499.625,
            -420.550, 95.344, -499.625,
            -420.551, -89.656, 1573.242,
            -440.643, -82.188, 1573.242,
            -440.643, -82.188, 1573.242,
            -440.641, 102.813, -499.625,
            -420.550, 95.344, -499.625,
            -400.458, 102.813, -499.625,
            -400.459, -82.188, 1573.242,
            -420.551, -89.656, 1573.242,
            -420.551, -89.656, 1573.242,
            -420.550, 95.344, -499.625,
            -400.458, 102.813, -499.625,
            -392.137, 120.844, -499.625,
            -392.138, -64.156, 1573.242,
            -400.459, -82.188, 1573.242,
            -400.459, -82.188, 1573.242,
            -400.458, 102.813, -499.625,
            -392.137, 120.844, -499.625,
            -420.551, -89.656, 1573.242,
            -400.459, -82.188, 1573.242,
            -392.138, -64.156, 1573.242,
            -440.643, -82.188, 1573.242,
            -420.551, -89.656, 1573.242,
            -392.138, -64.156, 1573.242,
            -448.965, -64.156, 1573.242,
            -440.643, -82.188, 1573.242,
            -392.138, -64.156, 1573.242,
            -440.643, -46.125, 1573.242,
            -448.965, -64.156, 1573.242,
            -392.138, -64.156, 1573.242,
            -420.551, -38.625, 1573.242,
            -440.643, -46.125, 1573.242,
            -392.138, -64.156, 1573.242,
            -400.459, -46.125, 1573.242,
            -420.551, -38.625, 1573.242,
            -392.138, -64.156, 1573.242,
            -420.550, 146.344, -499.625,
            -400.458, 138.875, -499.625,
            -392.137, 120.844, -499.625,
            -392.137, 120.844, -499.625,
            -400.458, 102.813, -499.625,
            -420.550, 95.344, -499.625,
            -392.137, 120.844, -499.625,
            -420.550, 95.344, -499.625,
            -440.641, 102.813, -499.625,
            -392.137, 120.844, -499.625,
            -440.641, 102.813, -499.625,
            -448.963, 120.844, -499.625,
            -392.137, 120.844, -499.625,
            -448.963, 120.844, -499.625,
            -440.641, 138.875, -499.625,
            -420.550, 146.344, -499.625,
            -392.137, 120.844, -499.625,
               -440.641, 138.875, -499.625
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.668, 0.742, 0.066,
            0.690, 0.721, 0.064,
            0.907, 0.419, 0.037,
            0.907, 0.419, 0.037,
            0.907, 0.419, 0.037,
            0.668, 0.742, 0.066,
            -0.000, 0.996, 0.089,
            0.000, 0.996, 0.089,
            0.690, 0.721, 0.064,
            0.690, 0.721, 0.064,
            0.668, 0.742, 0.066,
            -0.000, 0.996, 0.089,
            -0.667, 0.742, 0.066,
            -0.690, 0.721, 0.064,
            0.000, 0.996, 0.089,
            0.000, 0.996, 0.089,
            -0.000, 0.996, 0.089,
            -0.667, 0.742, 0.066,
            -1.000, 0.024, 0.002,
            -1.000, -0.024, -0.002,
            -0.690, 0.721, 0.064,
            -0.690, 0.721, 0.064,
            -0.667, 0.742, 0.066,
            -1.000, 0.024, 0.002,
            -0.689, -0.722, -0.064,
            -0.667, -0.742, -0.066,
            -1.000, -0.024, -0.002,
            -1.000, -0.024, -0.002,
            -1.000, 0.024, 0.002,
            -0.689, -0.722, -0.064,
            -0.000, -0.996, -0.089,
            -0.000, -0.996, -0.089,
            -0.667, -0.742, -0.066,
            -0.667, -0.742, -0.066,
            -0.689, -0.722, -0.064,
            -0.000, -0.996, -0.089,
            0.689, -0.722, -0.064,
            0.668, -0.742, -0.066,
            -0.000, -0.996, -0.089,
            -0.000, -0.996, -0.089,
            -0.000, -0.996, -0.089,
            0.689, -0.722, -0.064,
            0.907, -0.419, -0.037,
            0.907, -0.419, -0.037,
            0.668, -0.742, -0.066,
            0.668, -0.742, -0.066,
            0.689, -0.722, -0.064,
            0.907, -0.419, -0.037,
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
