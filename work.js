// 
let box = document.getElementsByClassName("box");
let boxes = [...box];

var comp = "";
var user = "";

var xs = [];
var os = [];

// all places
var pos = ["box1", "box2","box3", "box4", "box5", "box6", "box7", "box8", "box9"];

function choose(opt){
	document.getElementById("select").style.display = "none";
	document.getElementById("game").style.pointerEvents = "auto";
	user = opt;
	let temp = opt;
	if (temp == "O") {
		comp = "X";
	}else if(temp == "X"){
		comp = "O";
	}
}

// for selected places
var selectedPlaces = [];

document.body.onload = startGame();

function startGame(){

	if(pos.includes(this.id)){
		document.getElementById(this.id).innerHTML = user;
		document.getElementById(this.id).disable = "yes";
		var audio = new Audio("click.mp3"); 
        audio.play(); 
		if (user == "X") {
			xs.push(this.id);
		}else{
			os.push(this.id);
		}
		
		var index = pos.indexOf(this.id);
		if (index > -1) {
			pos.splice(index, 1);
			var res = Result();
			if (res == 1){
				console.log("in if");
				setTimeout(() => 500);
			}else {
				console.log("in else");
				setTimeout(() => compPlace(),500);
			}
		}
	}
}

function compPlace(){

	var position = randomPlace();

	var index1 = pos.indexOf(position);
	if (index1 > -1) {
		document.getElementById(position).innerHTML = comp;
		document.getElementById(position).disable = "yes";
		if (comp == "X") {
			xs.push(position);
		}else{
			os.push(position);
		}

		pos.splice(index1, 1);
		Result();

	}else{
		Result();
	}	
}

// loop to add eventlistener to each block
for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", startGame);
}

// // random place selector
function randomPlace(){
	// random value
	const randomIndex = Math.floor(Math.random() * pos.length);

	// get random item
	const item = pos[randomIndex];

	return item;
}

function finalDisplay(){
	document.getElementById("finalResult").style.display = "block";
	document.getElementById("game").style.pointerEvents = "none";
}

// calculate result
function Result(){
	console.log("xs:",xs,"os:",os);

	if ((xs.includes("box1")&&xs.includes("box2")&&xs.includes("box3")) || 
		(xs.includes("box4")&&xs.includes("box5")&&xs.includes("box6")) || 
		(xs.includes("box7")&&xs.includes("box8")&&xs.includes("box9")) || 
		(xs.includes("box1")&&xs.includes("box4")&&xs.includes("box7")) || 
		(xs.includes("box2")&&xs.includes("box5")&&xs.includes("box8")) || 
		(xs.includes("box3")&&xs.includes("box6")&&xs.includes("box9")) || 
		(xs.includes("box3")&&xs.includes("box5")&&xs.includes("box7")) || 
		(xs.includes("box1")&&xs.includes("box5")&&xs.includes("box9"))) {
			if (user == "X") {
				document.getElementById("result").innerHTML = "congratulations !!!";
				finalDisplay();
				return 1;
			}else {
				document.getElementById("result").innerHTML = "Better luck next time !!!";
				finalDisplay();
				return 1;
			}
	}else if ((os.includes("box1")&&os.includes("box2")&&os.includes("box3")) || 
		(os.includes("box4")&&os.includes("box5")&&os.includes("box6")) || 
		(os.includes("box7")&&os.includes("box8")&&os.includes("box9")) || 
		(os.includes("box1")&&os.includes("box4")&&os.includes("box7")) || 
		(os.includes("box2")&&os.includes("box5")&&os.includes("box8")) || 
		(os.includes("box3")&&os.includes("box6")&&os.includes("box9")) || 
		(os.includes("box3")&&os.includes("box5")&&os.includes("box7")) || 
		(os.includes("box1")&&os.includes("box5")&&os.includes("box9"))) {
			if (user == "O") {
				document.getElementById("result").innerHTML = "congratulations !!!";
				finalDisplay();
				return 1;
			}else {
				document.getElementById("result").innerHTML = "Better luck next time !!!";
				finalDisplay();
				return 1;
			}
	}else if (pos.length === 0){
		document.getElementById("result").innerHTML = "Better luck next time !!!";

	}
}