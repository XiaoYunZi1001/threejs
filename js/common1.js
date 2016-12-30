function front_view() {
    isRotation = false
    camera.position.set(0, 43131.836,0 )
    camera.up = new THREE.Vector3(0,0, 1)
    var target = new THREE.Vector3(0.000, 0.000, 0.000)
    camera.lookAt(target)
}

$('#left-view').click(function() {
    front_view()

    var quaternion = new THREE.Quaternion()
    quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), -Math.PI / 2 )
    camera.position.applyQuaternion(quaternion)
})

$('#reset-view').click(function() {
    isRotation = false
    controls.reset()
})

$('#front-view').click(function() {
    front_view()


})

$('#top-view').click(function() {
    front_view()

   var quaternion = new THREE.Quaternion()
  //  quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), -Math.PI / 2 )
  //  camera.position.applyQuaternion(quaternion)

    quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2 )
    camera.position.applyQuaternion(quaternion)
})

$('#rotation').click(function() {
    isRotation = !isRotation
})
