var main = function() {

	// local declarartions
	var score = 0;
	var missed = 0;
	var total_kill_amount = 15;
	var remaining_bact = total_kill_amount;
	var lives = 2;
	var newly_Spawned = 0;
	var myclicked = [];
	var dots = [];
	var depelete = 90;
	var r=0.8;     //radius of circle
	var i=0.5;     //size of circle
	
	var total_bacteria = 10;  //total number of bacteria
	var bacteria_array = [];  //bacteria array

	var canvas = document.getElementById('area');
	var web_gl = canvas.getContext('webgl');
	var canvas_text = document.getElementById('text');
	var can_txt = canvas_text.getContext('2d')
	var dotsCanvas = document.getElementById('dots');
	var dot_txt = dotsCanvas.getContext('2d')

	can_txt.font = "20px Brush Script MT";  //setting font for canvas text
	can_txt.textAlign = "center";           //alligning it to centre

	//vertex shader
	var vertex_c = [
		'attribute vec3 coordinates;',
		'',
		'void main() {',
		'	gl_Position = vec4(coordinates, 1.0);',
		'}'
	].join('\n');
    //fragment shader
	var fragment_c = [
	  'precision mediump float;',
	  'uniform vec4 fColor;',
	  '',
	  'void main()',
	  '{',
	  ' gl_FragColor = fColor;',
	  '}'
	].join('\n');

	var buffer_object = web_gl.createBuffer(); //creating empty buffer

	web_gl.viewport(0,0,canvas.width,canvas.height);

	web_gl.bindBuffer(web_gl.ARRAY_BUFFER, buffer_object); //binding array to buffer

	web_gl.enable(web_gl.DEPTH_TEST);

	var vertex_shader = web_gl.createShader(web_gl.VERTEX_SHADER);  //vertex shader object
	var fragment_shader = web_gl.createShader(web_gl.FRAGMENT_SHADER); //fragment shader object

	web_gl.shaderSource(vertex_shader, vertex_c);
	web_gl.compileShader(vertex_shader);

	web_gl.shaderSource(fragment_shader, fragment_c);
	web_gl.compileShader(fragment_shader);

	var myshaders = web_gl.createProgram();

	web_gl.attachShader(myshaders, vertex_shader);
	web_gl.attachShader(myshaders, fragment_shader);

	web_gl.linkProgram(myshaders);
	web_gl.useProgram(myshaders);

	var co_ordinates = web_gl.getAttribLocation(myshaders, "coordinates");
	var colour = web_gl.getUniformLocation(myshaders, "fColor");

	web_gl.vertexAttribPointer(co_ordinates, 3, web_gl.FLOAT, false, 0, 0);
	web_gl.enableVertexAttribArray(co_ordinates);

//Main Circle Function
	function MainCircle(x,y,r,color) {

		var vertices = [];
		for (let i = 1; i <= 360; i++) {
			var y1 = r*Math.sin(i)+y;
			var x1 = r*Math.cos(i)+x;
            var y2 = r*Math.sin(i+1)+y;
			var x2 = r*Math.cos(i+1)+x;

			vertices.push(x);
			vertices.push(y);
			vertices.push(0);

			vertices.push(x1);
			vertices.push(y1);
			vertices.push(0);

			vertices.push(x2);
			vertices.push(y2);
			vertices.push(0);
		}

		web_gl.bufferData(web_gl.ARRAY_BUFFER, new Float32Array(vertices), web_gl.STATIC_DRAW); //passing vertex data to buffer

		web_gl.uniform4f(colour, color[0], color[1], color[2], color[3]); //passing color data

		web_gl.clearColor(0, 1, 0, 0.9);
		web_gl.drawArrays(web_gl.TRIANGLES, 0, 360*3);

	}

	//function to find if bacteria is colliding
	function collider(x1, y1, r1, x2, y2, r2) {
		var dist_xaxis = x2-x1;
		var dist_yaxis = y2-y1;
		var totalDistance = Math.sqrt(Math.pow(dist_xaxis, 2) + Math.pow(dist_yaxis, 2));

		if(calc_distance(x1, y1, x2, y2) - (r1+r2) < 0) {
			return true;
		}

		return false;
	}

	// Pythagorean theorem
	function calc_distance(x1, y1, x2, y2) {
		var dist_xaxis = x2-x1;
		var dist_yaxis = y2-y1;
		return Math.sqrt(Math.pow(dist_xaxis, 2) + Math.pow(dist_yaxis, 2));
	}

	function simplify(x1, y1, x2, y2) {
		let m = calc_distance(x1, y1, x2, y2);
		return [(x2-x1)/m, (y2-y1)/m];
	}

	function removeBac(bac){
		let bacteria_xaxis = (bac.x + 2/75 + 1) * 300;
		let bacteria_yaxis = -1 * (bac.y-1) * 300 - 8;
		let r = (((bac.x + bac.r) + 2/75 + 1) * 300) - bacteria_xaxis;
		let temp = 0;
		let dcolor = bac.color;
		for(let x = 0; x < r; x++){
			for(let y = 0; y < r; y++){
				if(temp % depelete == 0) {
					let part_xaxis = bacteria_xaxis + x;
					let part_yaxis = bacteria_yaxis + y;
					let npart_xaxis = bacteria_xaxis - x;
					let npart_yaxis = bacteria_yaxis - y;
					let particle = new Dot(part_xaxis, part_yaxis, 5, bac.color);
					dots.push(particle);
					particle = new Dot(npart_xaxis, npart_yaxis, 5, bac.color);
					dots.push(particle);
					particle = new Dot(part_xaxis, npart_yaxis, 5, bac.color);
					dots.push(particle);
					particle = new Dot(npart_xaxis, part_yaxis, 5, bac.color);
					dots.push(particle);
				}
				temp++;
			}
		}
	}
	canvas.onmousedown = function(e, canvas){myclick(e, area);};

	//On click function
	function myclick(e, canvas) {
		let x = e.clientX;
		let y = e.clientY;
		let begin = y;
		let press = false;
		let point_increase = 0;
		const Rect = e.target.getBoundingClientRect();
		x = ((x - Rect.left) - canvas.width/2)/(canvas.width/2);
		y = (canvas.height/2 - (y - Rect.top))/(canvas.height/2);

		for(let i in bacteria_array) {
			//loop to determine if bacteria is clicked
			//then increment score 
			if(collider(x, y, 0, bacteria_array[i].x, bacteria_array[i].y, bacteria_array[i].r)){
				point_increase = Math.round(1/bacteria_array[i].r);
				removeBac(bacteria_array[i]);
 			 	score += point_increase;
				bacteria_array[i].remove(i);
 			 	press = true;
				myclicked.push({
					points: "+" + point_increase,
					x: e.clientX,
					y: e.clientY,
					dY: 0,
					color: "rgba(0,200,0,"
				});
			 	break;
			 }
		}

		// Score is decreased by 20 + the total amount of times clicked.
		if(!press && remaining_bact != 0) {
			missed ++;
			myclicked.push({
				points: -10 - missed,
				x: e.clientX,
				y: e.clientY,
				dY: 0,
				color: "rgba(255,0,0,"
			});
			score -= (10 + missed);
		}
	}

	//assigning negative and positive to the passed number
	function randomly(n){
		if(Math.random() >= 0.5){
			n = n*-1;
		}
		return n;
	}

	class Bacteria {

		constructor(id) {
			this.id = id;
			this.swallow = [];
		}
		newBac() {

			// for determining x axi and y axis data randomly
			this.random_xy();
			// get new x and y values along the game circle
			this.circlexy();
			var tries = 0;
			for (var i = 0; i < bacteria_array.length; i++) {
				if(tries > 500) {
					console.log("Bacteria out of scope");
					break;
				}
				if (collider(this.x, this.y, 0.06, bacteria_array[i].x, bacteria_array[i].y, bacteria_array[i].r)) {
					this.random_xy();
					this.circlexy();
					tries++;
					i = -1;
				}
			}
			this.r = 0.06;
			this.color = [Math.random() * (1.95), Math.random() * (1.95), Math.random() * (1.95), 1.75];
			this.active = true;
			this.swallow = [];
			newly_Spawned++;
		}

		modify() {

			if(this.active) {
				if(this.r > 0.3) {
					lives--;
					this.remove(bacteria_array.indexOf(this));
				} else {
						this.r += 0.0003; //increasing bacteria size
					this.color[3] += 0.0003;
					for(i in bacteria_array) {
						if(this != bacteria_array[i]){
							if(this.swallow.indexOf(bacteria_array[i]) == -1 && bacteria_array[i].swallow.indexOf(this) == -1) {
								if(collider(this.x, this.y, this.r, bacteria_array[i].x, bacteria_array[i].y, bacteria_array[i].r)) {
									if(this.id < bacteria_array[i].id){
										this.swallow.push(bacteria_array[i]);
									}
								}
						} else {
								for(i in this.swallow) {
									let swallow = this.swallow[i];
									if(calc_distance(this.x, this.y, swallow.x, swallow.y) <= (this.r - swallow.r) || swallow.r <= 0.0){
										swallow.remove(bacteria_array.indexOf(swallow));
									} else {
										var dVec = simplify(this.x, this.y, swallow.x, swallow.y);
										swallow.x -= dVec[0]/(1800*swallow.r);
										swallow.y -= dVec[1]/(1800*swallow.r);
										swallow.r -= 0.0025;
										this.r += 0.01*swallow.r;
										this.color[3] += 0.003;
									}
								}
							}
						}
					}
				}
				MainCircle(this.x, this.y, this.r, this.color);
			}
		}

		remove(index) {
			//setting radius to 0
			this.r = 0;
			this.x = 0;
			this.y = 0;
			this.active = false;
			remaining_bact--;
			for(i in this.swallow) {
				//destroying consumed bacteria
				this.swallow[i].remove(bacteria_array.indexOf(this.swallow[i]));
			}
			for(i in bacteria_array) {
				if(bacteria_array[i].swallow.indexOf(this) != -1) {
					bacteria_array[i].swallow.splice(bacteria_array[i].swallow.indexOf(this), 1);
				}
			}
			this.swallow = [];
			bacteria_array.splice(index,1);
			if(remaining_bact >= total_bacteria) {
				//spawning new bacteria
				bacteria_array.push(new Bacteria(newly_Spawned));
				bacteria_array[total_bacteria-1].newBac();
			}
		}

		// random x and y axis coordinates
		random_xy() {
			this.angle = Math.random();
			this.newBacRadX = randomly(0.8);
			this.newBacRadY = randomly(0.8);
			if(Math.random() >= 0.5) {
				this.trig = "sin";
			} else {
				this.trig = "cos";
			}
		}

		circlexy() {
			var tempX, tempY;
			if (this.trig == "sin") {
				this.x = this.newBacRadX*Math.sin(this.angle);
				this.y = this.newBacRadY*Math.cos(this.angle);
			} else {
				this.x = this.newBacRadX*Math.cos(this.angle);
				this.y = this.newBacRadY*Math.sin(this.angle);
			}
		}
	}

	class Dot {

		constructor(x, y, r, color) {
			this.x = x;
			this.y = y;
			this.r = r + Math.random() * 5;
			this.color = "rgba(" + Math.round((1*color[0]) * 255) + "," + Math.round((1*color[1]) * 255) + "," + Math.round((1*color[2]) * 255) + "," + Math.random()*0.85 + ")";
			this.inc_speed = {
				x: -1 + Math.random() * 3,
				y: -1 + Math.random() * 3
			}
			this.life = 30 + Math.random() * 10;
		}
		create() {
			if(this.life > 0 && this.r > 0) {
				dot_txt.beginPath();
				dot_txt.arc(this.x, this.y, this.r, 0, Math.PI * 2);
				dot_txt.fillStyle = this.color;
				dot_txt.fill();
				this.life--;
				this.r -= 0.25;
				this.x += this.inc_speed.x;
				this.y += this.inc_speed.y;
			}
		}
	}
	for(var i = 0; i<total_bacteria; i++){
		//pushing into bacteria array
		bacteria_array.push(new Bacteria(newly_Spawned));
		bacteria_array[i].newBac();
	}

// Winner function
	function winner(){
		 if(lives > 0 && remaining_bact <= 0) {
			can_txt.clearRect(0, 0, canvas.width, canvas.height);
			myclicked = [];
			dots = [];
			can_txt.fillStyle = "#00994C";
			can_txt.font = "80px Brush Script MT";  //Font 
			can_txt.fillText("**You Won!**", 300, 300); //Display
		 	return true;
		 }
		return false;
	}

	function looser(){
		if(lives<=0) {
			can_txt.clearRect(0, 0, canvas.width, canvas.height);
			can_txt.font = "80px Brush Script MT";
			can_txt.fillStyle = "#FF0000";
			can_txt.fillText("Game over", 300, 300);
			can_txt.font = "40px Brush Script MT"; //Font
			can_txt.fillText("You lost", 310, 355);//Display
			return true;
		}
		return false;
	}

	// Game Loop
	function repeat() {
		document.getElementById('display_score').innerHTML=score;
		document.getElementById('remaining_bact').innerHTML=remaining_bact;
		document.getElementById('lives').innerHTML=lives;

		if(!winner() && lives > 0) {
			for (let i in bacteria_array) {
					bacteria_array[i].modify();
					if (looser()) {
						remaining_bact = 0;
						break;
					}
				}

				// isplaying points added on clicks
				for(i in myclicked) {
					myclicked[i].dY--;
					if(myclicked[i].dY <= -50){
						myclicked.splice(i,1);
					} else {
						can_txt.clearRect(myclicked[i].x - 25, myclicked[i].y + myclicked[i].dY - 20, myclicked[i].x + 20, myclicked[i].y + 20);
						can_txt.fillStyle = myclicked[i].color + (1.0 - (myclicked[i].dY * -0.02) + ")");
						can_txt.fillText(myclicked[i].points, myclicked[i].x, myclicked[i].y + myclicked[i].dY);
					}
				}
				dot_txt.clearRect(0, 0, canvas.width, canvas.height);
				for(i in dots) {
					dots[i].create();
				}
				looser();//function calling
			}

		MainCircle(0,0,0.8,[0.46, 0.100, 0.94, 1]);//Draw the main circle
		requestAnimationFrame(repeat);
	}
	requestAnimationFrame(repeat);
}
