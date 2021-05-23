function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2); };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

document.addEventListener("DOMContentLoaded", function(){
	
	// Scale Intro
	function addClass() {
		let blockBg = document.querySelector(".intro__wrap--1");
		blockBg.classList.add("scale-intro");
	};
	setTimeout(addClass, 50);


	// Canvas
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	canvas.setAttribute("width", "1170px");
	canvas.setAttribute("height", "400px");
	
	ctx.strokeStyle = '#f00';
	ctx.beginPath();
	ctx.moveTo(10, 15);
	ctx.bezierCurveTo(75, 55, 175, 20, 250, 15);
	ctx.moveTo(10, 15);
	ctx.quadraticCurveTo(100, 100, 250, 15);
	ctx.stroke();

	// canvas.height = 
	// ctx.setLineDash([5, 15]);/*dashes are 5px and spaces are 15px*/
	// ctx.beginPath();
	// ctx.moveTo(0,100);
	// ctx.lineTo(400, 100);
	// ctx.stroke();
});
