function create_geometry_46(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            3119.855, 138.875, -498.082,
            3119.854, -46.125, 1196.570,
            3128.175, -64.156, 1196.570,
            3128.175, -64.156, 1196.570,
            3128.177, 120.844, -498.082,
            3119.855, 138.875, -498.082,
            3099.764, 146.344, -498.082,
            3099.760, -38.625, 1196.570,
            3119.854, -46.125, 1196.570,
            3119.854, -46.125, 1196.570,
            3119.855, 138.875, -498.082,
            3099.764, 146.344, -498.082,
            3079.673, 138.875, -498.082,
            3079.670, -46.125, 1196.570,
            3099.760, -38.625, 1196.570,
            3099.760, -38.625, 1196.570,
            3099.764, 146.344, -498.082,
            3079.673, 138.875, -498.082,
            3071.351, 120.844, -498.082,
            3071.348, -64.156, 1196.570,
            3079.670, -46.125, 1196.570,
            3079.670, -46.125, 1196.570,
            3079.673, 138.875, -498.082,
            3071.351, 120.844, -498.082,
            3079.673, 102.813, -498.082,
            3079.670, -82.188, 1196.570,
            3071.348, -64.156, 1196.570,
            3071.348, -64.156, 1196.570,
            3071.351, 120.844, -498.082,
            3079.673, 102.813, -498.082,
            3099.764, 95.344, -498.082,
            3099.760, -89.656, 1196.570,
            3079.670, -82.188, 1196.570,
            3079.670, -82.188, 1196.570,
            3079.673, 102.813, -498.082,
            3099.764, 95.344, -498.082,
            3119.855, 102.813, -498.082,
            3119.854, -82.188, 1196.570,
            3099.760, -89.656, 1196.570,
            3099.760, -89.656, 1196.570,
            3099.764, 95.344, -498.082,
            3119.855, 102.813, -498.082,
            3128.177, 120.844, -498.082,
            3128.175, -64.156, 1196.570,
            3119.854, -82.188, 1196.570,
            3119.854, -82.188, 1196.570,
            3119.855, 102.813, -498.082,
            3128.177, 120.844, -498.082,
            3099.760, -89.656, 1196.570,
            3119.854, -82.188, 1196.570,
            3128.175, -64.156, 1196.570,
            3079.670, -82.188, 1196.570,
            3099.760, -89.656, 1196.570,
            3128.175, -64.156, 1196.570,
            3071.348, -64.156, 1196.570,
            3079.670, -82.188, 1196.570,
            3128.175, -64.156, 1196.570,
            3079.670, -46.125, 1196.570,
            3071.348, -64.156, 1196.570,
            3128.175, -64.156, 1196.570,
            3099.760, -38.625, 1196.570,
            3079.670, -46.125, 1196.570,
            3128.175, -64.156, 1196.570,
            3119.854, -46.125, 1196.570,
            3099.760, -38.625, 1196.570,
            3128.175, -64.156, 1196.570,
            3099.764, 146.344, -498.082,
            3119.855, 138.875, -498.082,
            3128.177, 120.844, -498.082,
            3128.177, 120.844, -498.082,
            3119.855, 102.813, -498.082,
            3099.764, 95.344, -498.082,
            3128.177, 120.844, -498.082,
            3099.764, 95.344, -498.082,
            3079.673, 102.813, -498.082,
            3128.177, 120.844, -498.082,
            3079.673, 102.813, -498.082,
            3071.351, 120.844, -498.082,
            3128.177, 120.844, -498.082,
            3071.351, 120.844, -498.082,
            3079.673, 138.875, -498.082,
            3099.764, 146.344, -498.082,
            3128.177, 120.844, -498.082,
               3079.673, 138.875, -498.082
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.664, 0.743, 0.081,
            0.691, 0.718, 0.078,
            0.907, 0.419, 0.046,
            0.907, 0.419, 0.046,
            0.907, 0.419, 0.046,
            0.664, 0.743, 0.081,
            -0.000, 0.994, 0.109,
            -0.000, 0.994, 0.109,
            0.691, 0.718, 0.078,
            0.691, 0.718, 0.078,
            0.664, 0.743, 0.081,
            -0.000, 0.994, 0.109,
            -0.664, 0.743, 0.081,
            -0.691, 0.718, 0.078,
            -0.000, 0.994, 0.109,
            -0.000, 0.994, 0.109,
            -0.000, 0.994, 0.109,
            -0.664, 0.743, 0.081,
            -1.000, 0.029, 0.003,
            -1.000, -0.029, -0.003,
            -0.691, 0.718, 0.078,
            -0.691, 0.718, 0.078,
            -0.664, 0.743, 0.081,
            -1.000, 0.029, 0.003,
            -0.691, -0.719, -0.078,
            -0.664, -0.743, -0.081,
            -1.000, -0.029, -0.003,
            -1.000, -0.029, -0.003,
            -1.000, 0.029, 0.003,
            -0.691, -0.719, -0.078,
            -0.000, -0.994, -0.109,
            -0.000, -0.994, -0.109,
            -0.664, -0.743, -0.081,
            -0.664, -0.743, -0.081,
            -0.691, -0.719, -0.078,
            -0.000, -0.994, -0.109,
            0.691, -0.719, -0.078,
            0.664, -0.743, -0.081,
            -0.000, -0.994, -0.109,
            -0.000, -0.994, -0.109,
            -0.000, -0.994, -0.109,
            0.691, -0.719, -0.078,
            0.907, -0.419, -0.046,
            0.907, -0.419, -0.046,
            0.664, -0.743, -0.081,
            0.664, -0.743, -0.081,
            0.691, -0.719, -0.078,
            0.907, -0.419, -0.046,
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