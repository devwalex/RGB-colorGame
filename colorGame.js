/*
=============================================
Created By Salami Usman Olawale (Walexitino)
Email: youngstar2450@gmail.com
=============================================
*/

var numCirles = 6;
var circles = document.querySelectorAll(".circle");
var colors = generateRandomColors(numCirles);
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numCirles = 3;
	// generating all new colors
	colors = generateRandomColors(numCirles);
	// picking a new random color from the array
	colorPicked = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = colorPicked;
	// change colors of circle
	for (var i = 0; i < circles.length; i++) {
		if (colors[i]) {
			circles[i].style.backgroundColor = colors[i];
		}
		else{
			circles[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numCirles = 6;
	// generating all new colors
	colors = generateRandomColors(numCirles);
	// picking a new random color from the array
	colorPicked = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = colorPicked;
	// change colors of circle
	for (var i = 0; i < circles.length; i++) {
			circles[i].style.backgroundColor = colors[i];
			circles[i].style.display = "block";
	}
});


newColor.addEventListener("click", function() {
	colors = generateRandomColors(numCirles);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for (var i = 0; i < circles.length; i++) {
	circles[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
}
});

for (var i = 0; i < circles.length; i++) {
	// adding initial colors to the circles
	circles[i].style.backgroundColor = colors[i];

	// adding click listener to the circles
	circles[i].addEventListener("click", function() {

	// grabbing color of the circle clicked
		var clickedColor = this.style.backgroundColor;
	// comparing color to colorPicked
		if (clickedColor === colorPicked) {
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			newColor.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


colorDisplay.textContent = colorPicked;
function changeColor(color) {
	// looping through all circles
	for (var i = 0; i < circles.length; i++) {
	// changing each color to match given color
		circles[i].style.backgroundColor = color;
	}
}

// pickColor function
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}
// generateRandomColors function
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());

	}
	return arr;
}
// randomColor function
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", " + g + ", " + b + ")";
}