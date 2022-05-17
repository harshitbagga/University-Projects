//theta: The angle of the Y-pole (theta in [-pi/2, pi/2]).
//phi: The angle in the X/Z plane (phi in [0, 2*pi)).
function sphere_vector3(theta, phi) {
  var res = vec3.fromValues(
    Math.cos(theta) * Math.sin(phi),
    Math.cos(phi),
    Math.sin(theta) * Math.sin(phi)
  );
  return res;
}

//Generates the point from the spherical co-ordinates with radius 1.

// theta: The anngle off the Y-pole (theta in [-pi/2, pi/2]).
// phi: The angle in the X/Z plane (phi in [0, 2*pi)).
function sphere_vector(theta, phi) {
  var res = vec4.fromValues(
    Math.cos(theta) * Math.sin(phi),
    Math.cos(phi),
    Math.sin(theta) * Math.sin(phi),
    1.0
  );
  return res;
}
