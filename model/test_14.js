function create_geometry_14(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -35120.422, -333.594, -845.383,
            -35120.422, -209.469, -845.383,
            -35165.348, -209.469, -845.383,
            -35165.348, -209.469, -845.383,
            -35165.348, -333.594, -845.383,
            -35120.422, -333.594, -845.383,
            -35165.348, -333.594, -845.383,
            -35165.348, -209.469, -845.383,
            -35299.387, -209.469, -845.383,
            -35299.387, -209.469, -845.383,
            -35299.387, -333.594, -845.383,
            -35165.348, -333.594, -845.383,
            -35299.387, -333.594, -845.383,
            -35299.387, -209.469, -845.383,
            -35338.125, -209.469, -845.383,
            -35338.125, -209.469, -845.383,
            -35338.125, -333.594, -845.383,
            -35299.387, -333.594, -845.383,
            -35120.422, -209.469, -845.383,
            -35120.422, 186.219, -845.383,
            -35165.348, 186.219, -845.383,
            -35165.348, 186.219, -845.383,
            -35165.348, -209.469, -845.383,
            -35120.422, -209.469, -845.383,
            -35165.348, -209.469, -845.383,
            -35165.348, 186.219, -845.383,
            -35299.387, 186.219, -845.383,
            -35299.387, 186.219, -845.383,
            -35299.387, -209.469, -845.383,
            -35165.348, -209.469, -845.383,
            -35299.387, -209.469, -845.383,
            -35299.387, 186.219, -845.383,
            -35338.125, 186.219, -845.383,
            -35338.125, 186.219, -845.383,
            -35338.125, -209.469, -845.383,
            -35299.387, -209.469, -845.383,
            -35120.422, 186.219, -845.383,
            -35120.422, 316.406, -845.383,
            -35165.348, 316.406, -845.383,
            -35165.348, 316.406, -845.383,
            -35165.348, 186.219, -845.383,
            -35120.422, 186.219, -845.383,
            -35165.348, 186.219, -845.383,
            -35165.348, 316.406, -845.383,
            -35299.387, 316.406, -845.383,
            -35299.387, 316.406, -845.383,
            -35299.387, 186.219, -845.383,
            -35165.348, 186.219, -845.383,
            -35299.387, 186.219, -845.383,
            -35299.387, 316.406, -845.383,
            -35338.125, 316.406, -845.383,
            -35338.125, 316.406, -845.383,
            -35338.125, 186.219, -845.383,
            -35299.387, 186.219, -845.383,
            -35120.422, -333.594, -925.383,
            -35165.348, -333.594, -925.383,
            -35165.348, -209.469, -925.383,
            -35165.348, -209.469, -925.383,
            -35120.422, -209.469, -925.383,
            -35120.422, -333.594, -925.383,
            -35165.348, -333.594, -925.383,
            -35299.387, -333.594, -925.383,
            -35299.387, -209.469, -925.383,
            -35299.387, -209.469, -925.383,
            -35165.348, -209.469, -925.383,
            -35165.348, -333.594, -925.383,
            -35299.387, -333.594, -925.383,
            -35338.125, -333.594, -925.383,
            -35338.125, -209.469, -925.383,
            -35338.125, -209.469, -925.383,
            -35299.387, -209.469, -925.383,
            -35299.387, -333.594, -925.383,
            -35120.422, -209.469, -925.383,
            -35165.348, -209.469, -925.383,
            -35165.348, 186.219, -925.383,
            -35165.348, 186.219, -925.383,
            -35120.422, 186.219, -925.383,
            -35120.422, -209.469, -925.383,
            -35165.348, -209.469, -1545.383,
            -35299.387, -209.469, -1545.383,
            -35299.387, 186.219, -1545.383,
            -35299.387, 186.219, -1545.383,
            -35165.348, 186.219, -1545.383,
            -35165.348, -209.469, -1545.383,
            -35299.387, -209.469, -925.383,
            -35338.125, -209.469, -925.383,
            -35338.125, 186.219, -925.383,
            -35338.125, 186.219, -925.383,
            -35299.387, 186.219, -925.383,
            -35299.387, -209.469, -925.383,
            -35120.422, 186.219, -925.383,
            -35165.348, 186.219, -925.383,
            -35165.348, 316.406, -925.383,
            -35165.348, 316.406, -925.383,
            -35120.422, 316.406, -925.383,
            -35120.422, 186.219, -925.383,
            -35165.348, 186.219, -925.383,
            -35299.387, 186.219, -925.383,
            -35299.387, 316.406, -925.383,
            -35299.387, 316.406, -925.383,
            -35165.348, 316.406, -925.383,
            -35165.348, 186.219, -925.383,
            -35299.387, 186.219, -925.383,
            -35338.125, 186.219, -925.383,
            -35338.125, 316.406, -925.383,
            -35338.125, 316.406, -925.383,
            -35299.387, 316.406, -925.383,
            -35299.387, 186.219, -925.383,
            -35120.422, -333.594, -845.383,
            -35165.348, -333.594, -845.383,
            -35165.348, -333.594, -925.383,
            -35165.348, -333.594, -925.383,
            -35120.422, -333.594, -925.383,
            -35120.422, -333.594, -845.383,
            -35165.348, -333.594, -845.383,
            -35299.387, -333.594, -845.383,
            -35299.387, -333.594, -925.383,
            -35299.387, -333.594, -925.383,
            -35165.348, -333.594, -925.383,
            -35165.348, -333.594, -845.383,
            -35299.387, -333.594, -845.383,
            -35338.125, -333.594, -845.383,
            -35338.125, -333.594, -925.383,
            -35338.125, -333.594, -925.383,
            -35299.387, -333.594, -925.383,
            -35299.387, -333.594, -845.383,
            -35338.125, -333.594, -845.383,
            -35338.125, -209.469, -845.383,
            -35338.125, -209.469, -925.383,
            -35338.125, -209.469, -925.383,
            -35338.125, -333.594, -925.383,
            -35338.125, -333.594, -845.383,
            -35338.125, -209.469, -845.383,
            -35338.125, 186.219, -845.383,
            -35338.125, 186.219, -925.383,
            -35338.125, 186.219, -925.383,
            -35338.125, -209.469, -925.383,
            -35338.125, -209.469, -845.383,
            -35338.125, 186.219, -845.383,
            -35338.125, 316.406, -845.383,
            -35338.125, 316.406, -925.383,
            -35338.125, 316.406, -925.383,
            -35338.125, 186.219, -925.383,
            -35338.125, 186.219, -845.383,
            -35338.125, 316.406, -845.383,
            -35299.387, 316.406, -845.383,
            -35299.387, 316.406, -925.383,
            -35299.387, 316.406, -925.383,
            -35338.125, 316.406, -925.383,
            -35338.125, 316.406, -845.383,
            -35299.387, 316.406, -845.383,
            -35165.348, 316.406, -845.383,
            -35165.348, 316.406, -925.383,
            -35165.348, 316.406, -925.383,
            -35299.387, 316.406, -925.383,
            -35299.387, 316.406, -845.383,
            -35165.348, 316.406, -845.383,
            -35120.422, 316.406, -845.383,
            -35120.422, 316.406, -925.383,
            -35120.422, 316.406, -925.383,
            -35165.348, 316.406, -925.383,
            -35165.348, 316.406, -845.383,
            -35120.422, 316.406, -845.383,
            -35120.422, 186.219, -845.383,
            -35120.422, 186.219, -925.383,
            -35120.422, 186.219, -925.383,
            -35120.422, 316.406, -925.383,
            -35120.422, 316.406, -845.383,
            -35120.422, 186.219, -845.383,
            -35120.422, -209.469, -845.383,
            -35120.422, -209.469, -925.383,
            -35120.422, -209.469, -925.383,
            -35120.422, 186.219, -925.383,
            -35120.422, 186.219, -845.383,
            -35120.422, -209.469, -845.383,
            -35120.422, -333.594, -845.383,
            -35120.422, -333.594, -925.383,
            -35120.422, -333.594, -925.383,
            -35120.422, -209.469, -925.383,
            -35120.422, -209.469, -845.383,
            -35165.348, -209.469, -925.383,
            -35299.387, -209.469, -925.383,
            -35299.387, -209.469, -1545.383,
            -35299.387, -209.469, -1545.383,
            -35165.348, -209.469, -1545.383,
            -35165.348, -209.469, -925.383,
            -35299.387, -209.469, -925.383,
            -35299.387, 186.219, -925.383,
            -35299.387, 186.219, -1545.383,
            -35299.387, 186.219, -1545.383,
            -35299.387, -209.469, -1545.383,
            -35299.387, -209.469, -925.383,
            -35299.387, 186.219, -925.383,
            -35165.348, 186.219, -925.383,
            -35165.348, 186.219, -1545.383,
            -35165.348, 186.219, -1545.383,
            -35299.387, 186.219, -1545.383,
            -35299.387, 186.219, -925.383,
            -35165.348, 186.219, -925.383,
            -35165.348, -209.469, -925.383,
            -35165.348, -209.469, -1545.383,
            -35165.348, -209.469, -1545.383,
            -35165.348, 186.219, -1545.383,
               -35165.348, 186.219, -925.383
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
