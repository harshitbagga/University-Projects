//attribute_names: A list of attribute names in the shader.
//uniform_names: A list of uniform names in the shader.
//vertex_shader_source: The source for the vertex shader.
//fragment_shader_source: The source for the fragment shader.

function GLEnvironment(gl,vertex_shader_source, fragment_shader_source,uniform_names, attribute_names) {
  this.gl = gl;
  this.shader = null;
  this.vertex_shader = null;
  this.fragment_shader = null;
  this.uniforms = null;
  this.attributes = null;

  this._setVertexShaderSource(vertex_shader_source);
  this._setFragmentShaderSource(fragment_shader_source);
  this._buildShader();
  this._setUniforms(uniform_names);
  this._setAttributes(attribute_names);

}

//Load the vertex shader from the source.

GLEnvironment.prototype._setVertexShaderSource = function(source) {
  var gl = this.gl;
  var vertex_shader = gl.createShader(gl.VERTEX_SHADER);

  gl.shaderSource(vertex_shader, source);
  gl.compileShader(vertex_shader);
  if (!gl.getShaderParameter(vertex_shader, gl.COMPILE_STATUS)){
    console.log("Vertex Shader failed to load ...");
    console.log(gl.getShaderInfoLog(vertex_shader));
  }
  this.vertex_shader = vertex_shader;
}

// Load the fragment shader from the source.

GLEnvironment.prototype._setFragmentShaderSource = function(source) {
  var gl = this.gl;
  var fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(fragment_shader, source);
  gl.compileShader(fragment_shader);
  if (!gl.getShaderParameter(fragment_shader, gl.COMPILE_STATUS)){
    console.log("Fragment Shader failed to load ...");
    console.log(gl.getShaderInfoLog(fragment_shader));
  }
  this.fragment_shader = fragment_shader;
}

GLEnvironment.prototype._buildShader = function() {
  var gl = this.gl;
  var shader = gl.createProgram();

  gl.attachShader(shader, this.vertex_shader);
  gl.attachShader(shader, this.fragment_shader);

  gl.linkProgram(shader);

  if(!gl.getProgramParameter(shader, gl.LINK_STATUS)) {
    console.log("Link failure ...");
    console.log(gl.getProgramInfoLog(shader));
  }
  this.shader = shader;
}

//Gets all the uniform locations and stores them on this.uniforms.
GLEnvironment.prototype._setUniforms = function(uniform_names) {
  var gl = this.gl;
  var uniforms = {};

  uniform_names.forEach(function(uniform) {
    if (uniform.substring(0,3) == "vs_" ||
        uniform.substring(0,3) == "fs_") {
      uniforms[uniform] = gl.getUniformLocation(this.shader, uniform);
    } else {
      uniforms[uniform] = gl.getUniformLocation(this.shader, "vs_" + uniform);
    }
  }, this);

  this.uniforms = uniforms;
}

// Gets all the attribute locations and stores them on this.attributes.
GLEnvironment.prototype._setAttributes = function(attribute_names) {
  var gl = this.gl;
  var attributes = {};

  attribute_names.forEach(function(attribute){
    var attribute_name = "vs_" + attribute;
    attributes[attribute] = gl.getAttribLocation(this.shader, attribute_name);
    gl.enableVertexAttribArray(attributes[attribute]);
  }, this);

  this.attributes = attributes;
}

// Converts a list of vec4 to a buffer usable by openGL.
function gl_vector_list(vectors) {
  var size = vectors.length * 4;
  var return_value = new Float32Array(size);
  vectors.forEach(function(vector, index) {
    for (var i = 0; i < 4; i++){
      return_value[index * 4 + i] = vector[i];
    }
  }, this);
  return return_value;
}

// Converts a list of vec3 to a buffer usable by openGL.
function gl_vector3_list(vectors) {
  var size = vectors.length * 3;
  var return_value = new Float32Array(size);
  vectors.forEach(function(vector, index) {
    for (var i = 0; i < 3; i++){
      return_value[index * 3 + i] = vector[i];
    }
  }, this);
  return return_value;
}
