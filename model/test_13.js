function create_geometry_13(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -24235.291, -333.594, -845.383,
            -24235.291, -209.469, -845.383,
            -24280.219, -209.469, -845.383,
            -24280.219, -209.469, -845.383,
            -24280.219, -333.594, -845.383,
            -24235.291, -333.594, -845.383,
            -24280.219, -333.594, -845.383,
            -24280.219, -209.469, -845.383,
            -24414.258, -209.469, -845.383,
            -24414.258, -209.469, -845.383,
            -24414.258, -333.594, -845.383,
            -24280.219, -333.594, -845.383,
            -24414.258, -333.594, -845.383,
            -24414.258, -209.469, -845.383,
            -24452.994, -209.469, -845.383,
            -24452.994, -209.469, -845.383,
            -24452.994, -333.594, -845.383,
            -24414.258, -333.594, -845.383,
            -24235.291, -209.469, -845.383,
            -24235.291, 186.219, -845.383,
            -24280.219, 186.219, -845.383,
            -24280.219, 186.219, -845.383,
            -24280.219, -209.469, -845.383,
            -24235.291, -209.469, -845.383,
            -24280.219, -209.469, -845.383,
            -24280.219, 186.219, -845.383,
            -24414.258, 186.219, -845.383,
            -24414.258, 186.219, -845.383,
            -24414.258, -209.469, -845.383,
            -24280.219, -209.469, -845.383,
            -24414.258, -209.469, -845.383,
            -24414.258, 186.219, -845.383,
            -24452.994, 186.219, -845.383,
            -24452.994, 186.219, -845.383,
            -24452.994, -209.469, -845.383,
            -24414.258, -209.469, -845.383,
            -24235.291, 186.219, -845.383,
            -24235.291, 316.406, -845.383,
            -24280.219, 316.406, -845.383,
            -24280.219, 316.406, -845.383,
            -24280.219, 186.219, -845.383,
            -24235.291, 186.219, -845.383,
            -24280.219, 186.219, -845.383,
            -24280.219, 316.406, -845.383,
            -24414.258, 316.406, -845.383,
            -24414.258, 316.406, -845.383,
            -24414.258, 186.219, -845.383,
            -24280.219, 186.219, -845.383,
            -24414.258, 186.219, -845.383,
            -24414.258, 316.406, -845.383,
            -24452.994, 316.406, -845.383,
            -24452.994, 316.406, -845.383,
            -24452.994, 186.219, -845.383,
            -24414.258, 186.219, -845.383,
            -24235.291, -333.594, -925.383,
            -24280.219, -333.594, -925.383,
            -24280.219, -209.469, -925.383,
            -24280.219, -209.469, -925.383,
            -24235.291, -209.469, -925.383,
            -24235.291, -333.594, -925.383,
            -24280.219, -333.594, -925.383,
            -24414.258, -333.594, -925.383,
            -24414.258, -209.469, -925.383,
            -24414.258, -209.469, -925.383,
            -24280.219, -209.469, -925.383,
            -24280.219, -333.594, -925.383,
            -24414.258, -333.594, -925.383,
            -24452.994, -333.594, -925.383,
            -24452.994, -209.469, -925.383,
            -24452.994, -209.469, -925.383,
            -24414.258, -209.469, -925.383,
            -24414.258, -333.594, -925.383,
            -24235.291, -209.469, -925.383,
            -24280.219, -209.469, -925.383,
            -24280.219, 186.219, -925.383,
            -24280.219, 186.219, -925.383,
            -24235.291, 186.219, -925.383,
            -24235.291, -209.469, -925.383,
            -24280.219, -209.469, -1545.383,
            -24414.258, -209.469, -1545.383,
            -24414.258, 186.219, -1545.383,
            -24414.258, 186.219, -1545.383,
            -24280.219, 186.219, -1545.383,
            -24280.219, -209.469, -1545.383,
            -24414.258, -209.469, -925.383,
            -24452.994, -209.469, -925.383,
            -24452.994, 186.219, -925.383,
            -24452.994, 186.219, -925.383,
            -24414.258, 186.219, -925.383,
            -24414.258, -209.469, -925.383,
            -24235.291, 186.219, -925.383,
            -24280.219, 186.219, -925.383,
            -24280.219, 316.406, -925.383,
            -24280.219, 316.406, -925.383,
            -24235.291, 316.406, -925.383,
            -24235.291, 186.219, -925.383,
            -24280.219, 186.219, -925.383,
            -24414.258, 186.219, -925.383,
            -24414.258, 316.406, -925.383,
            -24414.258, 316.406, -925.383,
            -24280.219, 316.406, -925.383,
            -24280.219, 186.219, -925.383,
            -24414.258, 186.219, -925.383,
            -24452.994, 186.219, -925.383,
            -24452.994, 316.406, -925.383,
            -24452.994, 316.406, -925.383,
            -24414.258, 316.406, -925.383,
            -24414.258, 186.219, -925.383,
            -24235.291, -333.594, -845.383,
            -24280.219, -333.594, -845.383,
            -24280.219, -333.594, -925.383,
            -24280.219, -333.594, -925.383,
            -24235.291, -333.594, -925.383,
            -24235.291, -333.594, -845.383,
            -24280.219, -333.594, -845.383,
            -24414.258, -333.594, -845.383,
            -24414.258, -333.594, -925.383,
            -24414.258, -333.594, -925.383,
            -24280.219, -333.594, -925.383,
            -24280.219, -333.594, -845.383,
            -24414.258, -333.594, -845.383,
            -24452.994, -333.594, -845.383,
            -24452.994, -333.594, -925.383,
            -24452.994, -333.594, -925.383,
            -24414.258, -333.594, -925.383,
            -24414.258, -333.594, -845.383,
            -24452.994, -333.594, -845.383,
            -24452.994, -209.469, -845.383,
            -24452.994, -209.469, -925.383,
            -24452.994, -209.469, -925.383,
            -24452.994, -333.594, -925.383,
            -24452.994, -333.594, -845.383,
            -24452.994, -209.469, -845.383,
            -24452.994, 186.219, -845.383,
            -24452.994, 186.219, -925.383,
            -24452.994, 186.219, -925.383,
            -24452.994, -209.469, -925.383,
            -24452.994, -209.469, -845.383,
            -24452.994, 186.219, -845.383,
            -24452.994, 316.406, -845.383,
            -24452.994, 316.406, -925.383,
            -24452.994, 316.406, -925.383,
            -24452.994, 186.219, -925.383,
            -24452.994, 186.219, -845.383,
            -24452.994, 316.406, -845.383,
            -24414.258, 316.406, -845.383,
            -24414.258, 316.406, -925.383,
            -24414.258, 316.406, -925.383,
            -24452.994, 316.406, -925.383,
            -24452.994, 316.406, -845.383,
            -24414.258, 316.406, -845.383,
            -24280.219, 316.406, -845.383,
            -24280.219, 316.406, -925.383,
            -24280.219, 316.406, -925.383,
            -24414.258, 316.406, -925.383,
            -24414.258, 316.406, -845.383,
            -24280.219, 316.406, -845.383,
            -24235.291, 316.406, -845.383,
            -24235.291, 316.406, -925.383,
            -24235.291, 316.406, -925.383,
            -24280.219, 316.406, -925.383,
            -24280.219, 316.406, -845.383,
            -24235.291, 316.406, -845.383,
            -24235.291, 186.219, -845.383,
            -24235.291, 186.219, -925.383,
            -24235.291, 186.219, -925.383,
            -24235.291, 316.406, -925.383,
            -24235.291, 316.406, -845.383,
            -24235.291, 186.219, -845.383,
            -24235.291, -209.469, -845.383,
            -24235.291, -209.469, -925.383,
            -24235.291, -209.469, -925.383,
            -24235.291, 186.219, -925.383,
            -24235.291, 186.219, -845.383,
            -24235.291, -209.469, -845.383,
            -24235.291, -333.594, -845.383,
            -24235.291, -333.594, -925.383,
            -24235.291, -333.594, -925.383,
            -24235.291, -209.469, -925.383,
            -24235.291, -209.469, -845.383,
            -24280.219, -209.469, -925.383,
            -24414.258, -209.469, -925.383,
            -24414.258, -209.469, -1545.383,
            -24414.258, -209.469, -1545.383,
            -24280.219, -209.469, -1545.383,
            -24280.219, -209.469, -925.383,
            -24414.258, -209.469, -925.383,
            -24414.258, 186.219, -925.383,
            -24414.258, 186.219, -1545.383,
            -24414.258, 186.219, -1545.383,
            -24414.258, -209.469, -1545.383,
            -24414.258, -209.469, -925.383,
            -24414.258, 186.219, -925.383,
            -24280.219, 186.219, -925.383,
            -24280.219, 186.219, -1545.383,
            -24280.219, 186.219, -1545.383,
            -24414.258, 186.219, -1545.383,
            -24414.258, 186.219, -925.383,
            -24280.219, 186.219, -925.383,
            -24280.219, -209.469, -925.383,
            -24280.219, -209.469, -1545.383,
            -24280.219, -209.469, -1545.383,
            -24280.219, 186.219, -1545.383,
               -24280.219, 186.219, -925.383
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