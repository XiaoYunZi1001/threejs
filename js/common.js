function left_view() {
  isRotation = false
  camera.position.set(43131.836, 0, 0)
  camera.up = new THREE.Vector3(0, 0, 1)
  var target = new THREE.Vector3(0.000, 0.000, 0.000)
  camera.lookAt(target)
}

$('#left-view').click(function() {
  left_view()
})

$('#reset-view').click(function() {
  isRotation = false
  controls.reset()
})

$('#front-view').click(function() {
  left_view()

  var quaternion = new THREE.Quaternion()
  quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), -Math.PI / 2 )
  camera.position.applyQuaternion(quaternion)
})

$('#top-view').click(function() {
  left_view()

  var quaternion = new THREE.Quaternion()
  quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), -Math.PI / 2 )
  camera.position.applyQuaternion(quaternion)

  quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), -Math.PI / 2.0001 )
  camera.position.applyQuaternion(quaternion)
})

$('#rotation').click(function() {
  isRotation = !isRotation
})
