@@include('check_webp_css.js')

document.addEventListener("DOMContentLoaded", function(){
	
	// Scale Intro
	function addClass() {
		let blockBg = document.querySelector(".intro__wrap--1");
		blockBg.classList.add("scale-intro");
	};
	setTimeout(addClass, 50);


	// Svg
	let path = document.querySelector(".svg__path");
	let numPoints = 4;
	let points = [100, 200, 800, 100];
	let str = "";
	// str += `M 0 0 V ${points[0]}`;
	str += `M 0 ${points[0]}`;


	for (let i=0; i < numPoints-1; i++) {
		let p = i+1/(numPoints-1)*100;
		let cp = p - (1/(numPoints-1)*100)/2;
		str += `C ${cp} ${points[i]} ${cp} ${points[i+1]} ${p} ${points[i+1]}`;
	};
	// str += "V 0 H 0"

	path.setAttribute("d", str);








	// Canvas
	// let canvas = document.getElementById("canvas");
	// let ctx = canvas.getContext("2d");

	// canvas.setAttribute("width", "1170px");
	// canvas.setAttribute("height", "400px");
	
	// ctx.strokeStyle = '#f00';
	// ctx.beginPath();
	// ctx.moveTo(10, 15);
	// ctx.bezierCurveTo(75, 55, 175, 20, 250, 15);
	// ctx.moveTo(10, 15);
	// ctx.quadraticCurveTo(100, 100, 250, 15);
	// ctx.stroke();

	// canvas.height = 
	// ctx.setLineDash([5, 15]);/*dashes are 5px and spaces are 15px*/
	// ctx.beginPath();
	// ctx.moveTo(0,100);
	// ctx.lineTo(400, 100);
	// ctx.stroke();
});
