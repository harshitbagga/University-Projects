var main = function(){

  //Necessary Variables
  var max_bacteria_count = 10;
  var life = 2;
  var remainingbacteria = 20;
  var score = 0;
  var alive_count = 0;
  var myclicks = [];
  var flag = true; //
  let multibac = [];
  var canvas = document.getElementById('game-area');

  //Create 2D Canvas 
  var textCanvas = document.getElementById('text');
  var obj = textCanvas.getContext('2d')

 
  obj.font = "20px Brush Script MT"; //setting font for centre text
  obj.textAlign = "center";          //alligning it to centre

  document.body.style.margin = 0;
  canvas.width = 800;
  canvas.height = 800;


 

  // Lighting location and colour
  let lightposition = vec3.fromValues(2.0, 2.0, 2.0);
  let lightcolor = vec3.fromValues(1.0, 1.0, 1.0);

  let sphereRes = 5;

  // Centre sphere info
  let centersphere = {
    centre: vec2.fromValues(canvas.width / 2, canvas.height / 2),
    radius: (Math.min(canvas.width, canvas.height) - 10) / 2.0
  };

  // WebGL Initialization
  let gl = canvas.getContext("webgl");

  let clearColor = [0.3, 0.5, 0.6, 1.0];

  gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);

  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);

  // Uniforms and attributes
  var uniforms = [
    "modelMatrix",
    "viewMatrix",
    "projectionMatrix",

    "one_colour",
    "single_colour",

    "light_point",
    "light_colour",

    "light_ambient",
    "light_diffuse",
    "light_specular",
  ];

  var attributes = [
    "point",
    "colour",
    "normal"
  ];

  // Create GL environment using predefined Initialization functions 
  let glenvironment = new GLEnvironment(gl,
      vertexShaderCode, fragmentShaderCode,
      uniforms, attributes);

  gl.useProgram(glenvironment.shader);
  gl.uniform1f(glenvironment.uniforms.one_colour, 0.0);

  // Create centre sphere
  let createsphere = new Sphere(glenvironment, sphereRes);

  // View Matrix Initialization
  let pointfrom = [0.0, 0.0, 3.0];
  let pointat = [0.0, 0.0, 0.0];
  let pointup = [0.0, 1.0, 0.0];

  let viewMatrix = mat4.create();
  mat4.lookAt(viewMatrix, pointfrom, pointat, pointup);

  // Projection Matrix Initialization
  var fieldofview = glMatrix.toRadian(60);
  var width = canvas.width;
  var height = canvas.height;
  var aspect = width/height;
  var near = 0.1;
  var far = 100.0;

  let projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fieldofview, aspect, near, far);

  // Create set of ids for the multibac
  let bacteriaidcreate = new Set();
  for (var i = 0; i < max_bacteria_count; i++) {
    bacteriaidcreate.add(i + 2);
  }

  max_bacteria_count = bacteriaidcreate.size;

  // Map for bacteria colours
  var columnforbac = new Map();

  var idrepeat = bacteriaidcreate.entries();

  // Assign colours to each multibac id
  for (let i = 0; i < bacteriaidcreate.size; i++) {
    let hue =  i * 360.0 / bacteriaidcreate.size;

    let stop = hsl2rgb([hue, 1.0, 0.8 - 0.2 * (i % 2)]);
    let start = hsl2rgb([hue, 1.0, 0.4 - 0.2 * (i % 2)]);

    columnforbac.set(idrepeat.next().value[0], [
      vec4.fromValues(start[0], start[1], start[2], 1.0),
      vec4.fromValues(stop[0], stop[1], stop[2], 1.0)
    ]);
  }

  // Add mouse handlers to Canvas
  canvas.addEventListener('click', click());
  canvas.addEventListener('mousemove', movemouse());
  canvas.addEventListener('mousedown', mouseDown());
  canvas.addEventListener('mousepointup', mouseUp());
  // Disable context menu
  document.oncontextmenu = function() {
    return false;
  }
  // Button for toggling brightness
  document.getElementById("brightness").onclick = function(e) {Lightingtoggle(e)};

  function Lightingtoggle(e) {
    if(flag){
      flag = false;
      e.target.textContent = "Off";
      e.target.style.color = "red";
    } else {
      flag = true;
      e.target.textContent = "On";
      e.target.style.color = "green";
    }
  }

  draw();

  // Draw Function
  function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(glenvironment.uniforms.viewMatrix, false, viewMatrix);
    gl.uniformMatrix4fv(glenvironment.uniforms.projectionMatrix, false, projectionMatrix);

    if(flag){
      gl.uniform3fv(glenvironment.uniforms.light_point, lightposition);
      gl.uniform3fv(glenvironment.uniforms.light_colour, lightcolor);
    } else {
      gl.uniform3fv(glenvironment.uniforms.light_colour, [0.0, 0.0, 0.0]);
    }

    createsphere.draw();

    multibac.forEach(function(bacteria){bacteria.draw();});
  }

  // function used for hit detection
  function hitdetection() {
    gl.uniform1f(glenvironment.uniforms.one_colour, 1.0);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    draw();
    gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
    gl.uniform1f(glenvironment.uniforms.one_colour, 0.0);
  }

  // Getting the next id from the bacteriaidcreate
  function gotonext() {
    let bucket = Array.from(bacteriaidcreate);
    let id = bucket[Math.floor(Math.random() * bucket.length)];

    bacteriaidcreate.delete(id);
    return id;
  }

  // Function to spawn multibac
  function bacspawn() {
    let frequency = 70;
    let radius = 0.07;

    // Chance based on frequency to spawn bacteria
    if (Math.random() < 1.0 / frequency && multibac.length < max_bacteria_count) {
      let r = vec3.fromValues(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      vec3.normalize(r, r);

      let id = gotonext();
      let colours = columnforbac.get(id);

      // If colours is just a lazy bug fix for colours sometimes being unfdefined
      if(colours) {
        let bacteria = new Sphere(glenvironment, sphereRes, r, radius, colours[0], colours[1], undefined, undefined, 0.02);
        bacteria.id = id;

        let pole = vec3.fromValues(0.0, 0.0, 1.0);

        if (!vec3.equals(r, pole)) {
          let axis = vec3.cross(vec3.create(), pole, r);
          vec3.normalize(axis, axis);

          let angle = Math.acos(vec3.dot(pole, r));
          bacteria.rotation = mat4.rotate(mat4.create(), mat4.create(),
                                          angle, axis);
          bacteria.buildModel();
        }
        alive_count++;
        multibac.push(bacteria);
      }
    }
  }

  // Function to grow bacteria on each tick
  function bacteriagrowth() {
    let increasescalar = 0.0005;
    let inc = vec3.fromValues(increasescalar, increasescalar, increasescalar);
    let max = increasescalar *  5000;

    multibac.forEach(function(bacteria){
      if (bacteria.scale[0] < max) {
        bacteria.radius += increasescalar;
        vec3.add(bacteria.scale, bacteria.scale, inc);
        bacteria.buildModel();
      }
      // If bacteria exceeds a limit of r=0.35, destroy and dec life
      if(bacteria.radius >= 0.35) {
        let id = bacteria.id;
        alive_count--;
        life--;
        multibac.splice(multibac.indexOf(bacteria), 1);
        bacteriaidcreate.add(id);
      }
    });
  }

  // Repeat the game
  function gamerepeat() {
    //Scorboard update
    document.getElementById('points-display').innerHTML=score;
		document.getElementById('remainingbacteria').innerHTML=remainingbacteria;
		document.getElementById('life').innerHTML=life;

    // Win or lose
    if(!result()){
      if(remainingbacteria>0+alive_count) {
        bacspawn();
      }

      bacteriagrowth();
      collisionchecker();
      consumebac();
      updatepoint();
      draw();
      requestAnimationFrame(gamerepeat);
    }
  }

  //destroy multbac by clicking
  function click() {
    return function(event) {
      let offset = windowoffset(event.target);
      let x = event.clientX - offset.x;
      let y = event.target.height - (event.clientY - offset.y);

      let colour = new Uint8Array(4);
      hitdetection();
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, colour);

      let id = colour2id(colour);

      let hitflag = false;
      let scoreincrement = 0;

      for (let i = 0; i < multibac.length; i++){
        if (multibac[i].id == id){
          hitflag = true;
          scoreincrement = Math.round(2/multibac[i].radius);
          score += scoreincrement
          remainingbacteria--;
          alive_count--;
          myclicks.push({pts: "+" + scoreincrement, x: event.clientX, y: event.clientY, dY: 0, color: "rgba(235,25,28,"});
          multibac.splice(i, 1);
          bacteriaidcreate.add(id);
          break;
        }
      }
      draw();
    };
  }

  function mouseDown() {
    return function(event) {
      if (event.button == 2){

        let offset = windowoffset(event.target);

        let height = event.target.height;

        let point = {
          x: (event.clientX - offset.x) - centersphere.centre[0],
          y: (height - (event.clientY - offset.y)) - centersphere.centre[1],
          z: 0
        };

        centersphere.matrix_stash = mat4.copy(mat4.create(), viewMatrix);

        let di2 = point.x * point.x + point.y * point.y;
        let radi2 = centersphere.radius * centersphere.radius;
        if (di2 < radi2){
          point.z = Math.sqrt(radi2 - di2);
        }

        centersphere.start = vec3.fromValues(point.x, point.y, point.z);
        vec3.normalize(centersphere.start, centersphere.start);
      }
    }
  }

  function movemouse() {
    return function(event) {
      if ((event.buttons & 2) == 2 && centersphere.start != null) {
        let offset = windowoffset(event.target);

        let height = event.target.height;

        let point = {
          x: (event.clientX - offset.x) - centersphere.centre[0],
          y: (height - (event.clientY - offset.y)) - centersphere.centre[1],
          z: 0
        };

        let di2 = point.x * point.x + point.y * point.y;
        let radi2 = centersphere.radius * centersphere.radius;
        if (di2 < radi2){
          point.z = Math.sqrt(radi2 - di2);
        }

        centersphere.end = vec3.fromValues(point.x, point.y, point.z);
        vec3.normalize(centersphere.end, centersphere.end);

        let axis = vec3.cross(vec3.create(), centersphere.start, centersphere.end);
        let angle = Math.acos(vec3.dot(centersphere.start, centersphere.end));

        if (vec3.equals(centersphere.start, centersphere.end)) {
          mat4.copy(viewMatrix, centersphere.matrix_stash);
        } else {
          let transform = mat4.create();

          // Translate into createsphere.
          let TranslateIn = mat4.translate(mat4.create(), mat4.create(),
                                            vec3.fromValues(0.0, 0.0, 3.0));

          let rotation = mat4.rotate(mat4.create(), mat4.create(), angle, axis);

          // Translate out of createsphere.
          let TranslateOut = mat4.translate(mat4.create(), mat4.create(),
                                             vec3.fromValues(0.0, 0.0, -3.0));


          mat4.mul(transform, TranslateIn, transform);
          mat4.mul(transform, rotation, transform);
          mat4.mul(transform, TranslateOut, transform);
          mat4.mul(viewMatrix, transform, centersphere.matrix_stash);
        }
      }
    }
  }

  function mouseUp() {
    return function(event) {
      if ((event.button & 2) == 2){
        centersphere.start = undefined;
      }
    }
  }

  // Check collision function
  function collisionchecker() {
    if(multibac.length > 1) {
      for(let i = 0; i < multibac.length - 2; i++) {
          for(let j = i+1; j < multibac.length; j++) {
            if(!multibac[i].consuming.includes(multibac[j]) && !multibac[j].consuming.includes(multibac[i])) {
              if(dist3d(multibac[i].centre, multibac[j].centre) <= multibac[i].radius + multibac[j].radius) {
                if(multibac[i].radius > multibac[j].radius){
                  multibac[i].consuming.push(multibac[j]);
                } else {
                  multibac[j].consuming.push(multibac[i]);
                }
              }
            }
          }
        }
      }
    }

  function updatepoint() {
    for(i in myclicks) {
      let text = myclicks[i];
      text.dY--;

      if(text.dY <= -50) {
        myclicks.splice(i,1);
      } else {
        
        obj.clearRect(text.x - 25, text.y + text.dY - 20, text.x + 20, text.y + 20);

        obj.fillStyle = text.color + (1.0 - (text.dY * -0.02) + ")");
        
        obj.fillText(text.pts, text.x, text.y + text.dY);
      }
    }
  }

  //Bacteria after consumed gets shrinked and replaced
  function consumebac() {
    let decreasescale = -0.0030;
    let dec = vec3.fromValues(decreasescale, decreasescale, decreasescale);
    for(i in multibac){
      for(j in multibac[i].consuming) {
        let consumed = multibac[i].consuming[j];
        consumed.radius -= 0.0015;
        vec3.add(consumed.scale, consumed.scale, dec);
        vec3.add(consumed.translation, consumed.translation, normal3d(multibac[i].centre, consumed.centre));
        if(consumed.radius <= 0.0) {
          let id = consumed.id;
          alive_count--;
          multibac.splice(multibac.indexOf(consumed), 1);
          multibac[i].consuming.splice(j, 1);
          bacteriaidcreate.add(id);
        }
        consumed.buildModel();
      }
    }
  }

  // Win or lose depending on remainging bacteria
  function result() {
    if(remainingbacteria <= 0) {
      obj.clearRect(0, 0, canvas.width, canvas.height);
      myclicks = [];
      obj.fillStyle = "#00994C";
			obj.font = "80px Brush Script MT";
			obj.fillText("**You Won!**", canvas.width/2, canvas.height/2);
      return true;
    }
    if(life<=0) {
      obj.clearRect(0, 0, canvas.width, canvas.height);
      myclicks = [];
      multibac = [];
      draw();
      obj.fillStyle = "#FF0000";
			obj.font = "80px Brush Script MT";
			obj.fillText("You lost", canvas.width/2, canvas.height/2);
      return true;
    }
    return false;
  }

  gamerepeat();
}

// Converts an id to a colour
function id2colour(id) {
  if (id > 2<< (8 * 3)) return vec4.fromValues(0.0, 0.0, 0.0, 1.0);
  let a = (id >> (8 * 0)) & (255);
  let b = (id >> (8 * 1)) & (255);
  let c = (id >> (8 * 2)) & (255);
  return vec4.fromValues(a / 255.0, b / 255.0, c / 255.0, 1.0);
}

// Converts a colour to an id.
function colour2id(colour) {
  return (colour[0] << (8 * 0)) |
         (colour[1] << (8 * 1)) |
         (colour[2] << (8 * 2));
}

// Converts a colour in hsl to rgb.
function hsl2rgb(hsl) {
  var h = hsl[0];
  var s = hsl[1];
  var l = hsl[2];

  var hp = h / 60;
  var f = Math.floor(hp);
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(hp % 2 - 1));
  var m = l - 0.5 * c;

  var r = m;
  var g = m;
  var b = m;

  switch(f) {
    case 0:
      r += c;
      g += x;
      break;
    case 1:
      r += x;
      g += c;
      break;
    case 2:
      g += c;
      b += x;
      break;
    case 3:
      g += x;
      b += c;
      break;
    case 4:
      r += x;
      b += c;
      break;
    case 5:
      r += c;
      b += x;
      break;
  }

  return [r, g , b];
}

// Gets the window offset
function windowoffset(element) {
  var x = 0;
  var y = 0;

  while (element != null){
    x += element.offsetTop;
    y += element.offsetLeft;
    element = element.parentElement;
  }
  return {x:x, y:y};
}

// Returns distance between two points in 3D space
function dist3d(vec1, vec2) {
  return Math.sqrt(Math.pow(vec2[0]-vec1[0], 2) + Math.pow(vec2[1]-vec1[1], 2) + Math.pow(vec2[2]-vec1[2], 2))
}

// Normalize a vector between two points in 3D space
function normal3d(vec1, vec2) {
  let m = dist3d(vec1, vec2);
  return[((vec1[0]-vec2[0])/m)/400, ((vec1[1]-vec2[1])/m)/400, ((vec1[2]-vec2[2])/m)/400];
}
