function create_geometry_17(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -13000.439, -1742.781, -489.742,
            -13000.439, -2000.250, -489.742,
            -13000.439, -2000.250, -539.742,
            -13000.439, -2000.250, -539.742,
            -13000.439, -1742.781, -539.742,
            -13000.439, -1742.781, -489.742,
            -13000.439, 2000.563, -489.742,
            -13000.439, 1757.094, -489.742,
            -13000.439, 1757.094, -539.742,
            -13000.439, 1757.094, -539.742,
            -13000.439, 2000.563, -539.742,
            -13000.439, 2000.563, -489.742,
            3199.558, -2000.250, -539.742,
            3199.558, -1742.781, -539.742,
            -3199.294, -1742.781, -539.742,
            -3199.294, -1742.781, -539.742,
            -3199.295, -2000.250, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, 2000.563, -539.742,
            -3199.294, 2000.563, -539.742,
            -3199.294, 2000.563, -539.742,
            -3199.295, 1757.094, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, -2000.250, -489.742,
            3199.558, -2000.250, -539.742,
            -3199.295, -2000.250, -539.742,
            -3199.295, -2000.250, -539.742,
            -3199.295, -2000.250, -489.742,
            3199.558, -2000.250, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -539.742,
            -3199.295, 1757.094, -539.742,
            -3199.295, 1757.094, -539.742,
            -3199.295, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 2000.563, -489.742,
            3199.558, 1757.094, -489.742,
            -3199.295, 1757.094, -489.742,
            -3199.295, 1757.094, -489.742,
            -3199.294, 2000.563, -489.742,
            3199.558, 2000.563, -489.742,
            3199.558, -1742.781, -489.742,
            3199.558, -2000.250, -489.742,
            -3199.295, -2000.250, -489.742,
            -3199.295, -2000.250, -489.742,
            -3199.294, -1742.781, -489.742,
            3199.558, -1742.781, -489.742,
            -3199.294, -1742.781, -489.742,
            -3199.295, -2000.250, -489.742,
            -3199.295, -2000.250, -539.742,
            -3199.295, -2000.250, -539.742,
            -3199.294, -1742.781, -539.742,
            -3199.294, -1742.781, -489.742,
            -3199.294, 2000.563, -489.742,
            -3199.295, 1757.094, -489.742,
            -3199.295, 1757.094, -539.742,
            -3199.295, 1757.094, -539.742,
            -3199.294, 2000.563, -539.742,
            -3199.294, 2000.563, -489.742,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -539.742,
            3199.559, -1742.781, -539.742,
            3199.559, -1742.781, -539.742,
            3199.559, -1742.781, -489.742,
            3199.558, -1742.781, -489.742,
            3199.558, 2000.563, -489.742,
            3199.558, 2000.563, -539.742,
            3199.559, 2000.563, -539.742,
            3199.559, 2000.563, -539.742,
            3199.559, 2000.563, -489.742,
            3199.558, 2000.563, -489.742,
            3199.558, -2000.250, -539.742,
            3199.559, -1742.781, -539.742,
            3199.558, -1742.781, -539.742,
            3199.558, -1742.781, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, 1757.094, -539.742,
            3199.559, 2000.563, -539.742,
            3199.558, 2000.563, -539.742,
            3199.558, 2000.563, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, -2000.250, -489.742,
            3199.558, -2000.250, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, -2000.250, -489.742,
            3199.558, -2000.250, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.559, 2000.563, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 2000.563, -489.742,
            3199.559, 2000.563, -489.742,
            3199.559, -1742.781, -489.742,
            3199.558, -2000.250, -489.742,
            3199.558, -2000.250, -489.742,
            3199.558, -2000.250, -489.742,
            3199.558, -1742.781, -489.742,
            3199.559, -1742.781, -489.742,
            -3199.294, -1742.781, -489.742,
            -3199.294, -1742.781, -539.742,
            3199.558, -1742.781, -539.742,
            3199.558, -1742.781, -539.742,
            3199.558, -1742.781, -489.742,
            -3199.294, -1742.781, -489.742,
            -3199.294, 2000.563, -489.742,
            -3199.294, 2000.563, -539.742,
            3199.558, 2000.563, -539.742,
            3199.558, 2000.563, -539.742,
            3199.558, 2000.563, -489.742,
            -3199.294, 2000.563, -489.742,
            -13000.439, -1742.781, -539.742,
            -13000.439, -2000.250, -539.742,
            -13000.439, -2000.250, -489.742,
            -13000.439, -2000.250, -489.742,
            -13000.439, -1742.781, -489.742,
            -13000.439, -1742.781, -539.742,
            -13000.439, 2000.563, -539.742,
            -13000.439, 1757.094, -539.742,
            -13000.439, 1757.094, -489.742,
            -13000.439, 1757.094, -489.742,
            -13000.439, 2000.563, -489.742,
            -13000.439, 2000.563, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, -2000.250, -489.742,
            3199.559, -1742.781, -489.742,
            3199.559, -1742.781, -489.742,
            3199.559, -1742.781, -539.742,
            3199.558, -2000.250, -539.742,
            3199.558, 1757.094, -539.742,
            3199.558, 1757.094, -489.742,
            3199.559, 2000.563, -489.742,
            3199.559, 2000.563, -489.742,
            3199.559, 2000.563, -539.742,
               3199.558, 1757.094, -539.742
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
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
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
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
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
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
               -1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xCCCD66,
            shininess: 8.000,
            ambient: 0xCCCD66,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            3199.558, -674.344, -832.340,
            3199.558, 676.875, -832.340,
            -3199.296, 676.875, -832.340,
            -3199.296, 676.875, -832.340,
            -3199.295, -674.344, -832.340,
            3199.558, -674.344, -832.340,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -616.344,
            -3199.295, -1742.781, -616.344,
            -3199.295, -1742.781, -616.344,
            -3199.295, -1742.781, -489.742,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -616.344,
            3199.558, -674.344, -832.340,
            -3199.295, -674.344, -832.340,
            -3199.295, -674.344, -832.340,
            -3199.295, -1742.781, -616.344,
            3199.558, -1742.781, -616.344,
            -3199.294, 1757.094, -616.340,
            -3199.294, 1757.094, -489.742,
            -3199.295, -1742.781, -489.742,
            -3199.295, -1742.781, -489.742,
            -3199.295, -1742.781, -616.344,
            -3199.295, -674.344, -832.340,
            -3199.294, 1757.094, -616.340,
            -3199.295, -1742.781, -489.742,
            -3199.295, -674.344, -832.340,
            -3199.296, 676.875, -832.340,
            -3199.294, 1757.094, -616.340,
            -3199.295, -674.344, -832.340,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -616.340,
            3199.559, 1757.094, -616.340,
            3199.559, 1757.094, -616.340,
            3199.559, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -616.340,
            3199.558, 676.875, -832.340,
            3199.559, 676.875, -832.340,
            3199.559, 676.875, -832.340,
            3199.559, 1757.094, -616.340,
            3199.558, 1757.094, -616.340,
            3199.558, -1742.781, -489.742,
            3199.558, 1757.094, -489.742,
            3199.559, 1757.094, -489.742,
            3199.559, 1757.094, -489.742,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -489.742,
            3199.559, -674.344, -832.340,
            3199.559, 676.875, -832.340,
            3199.558, 676.875, -832.340,
            3199.558, 676.875, -832.340,
            3199.558, -674.344, -832.340,
            3199.559, -674.344, -832.340,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -616.344,
            3199.558, -1742.781, -616.344,
            3199.558, -1742.781, -616.344,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -489.742,
            3199.558, -1742.781, -616.344,
            3199.559, -674.344, -832.340,
            3199.558, -674.344, -832.340,
            3199.558, -674.344, -832.340,
            3199.558, -1742.781, -616.344,
            3199.558, -1742.781, -616.344,
            -3199.294, 1757.094, -489.742,
            -3199.294, 1757.094, -616.340,
            3199.558, 1757.094, -616.340,
            3199.558, 1757.094, -616.340,
            3199.558, 1757.094, -489.742,
            -3199.294, 1757.094, -489.742,
            -3199.294, 1757.094, -616.340,
            -3199.296, 676.875, -832.340,
            3199.558, 676.875, -832.340,
            3199.558, 676.875, -832.340,
            3199.558, 1757.094, -616.340,
            -3199.294, 1757.094, -616.340,
            -3199.295, -1742.781, -489.742,
            -3199.294, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, 1757.094, -489.742,
            3199.558, -1742.781, -489.742,
            -3199.295, -1742.781, -489.742,
            3199.559, 676.875, -832.340,
            3199.559, -674.344, -832.340,
            3199.558, -1742.781, -616.344,
            3199.559, 676.875, -832.340,
            3199.558, -1742.781, -616.344,
            3199.558, -1742.781, -489.742,
            3199.559, 676.875, -832.340,
            3199.558, -1742.781, -489.742,
            3199.559, 1757.094, -489.742,
            3199.559, 1757.094, -616.340,
            3199.559, 676.875, -832.340,
               3199.559, 1757.094, -489.742
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
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.198, 0.980,
            0.000, 0.198, 0.980,
            -0.000, 0.198, 0.980,
            0.000, 0.198, 0.980,
            -0.000, 0.198, 0.980,
            0.000, 0.198, 0.980,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.198, 0.980,
            0.000, 0.198, 0.980,
            -0.000, 0.198, 0.980,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, -0.196, 0.981,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, -0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x6C7585,
            shininess: 8.000,
            ambient: 0x6C7585,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}