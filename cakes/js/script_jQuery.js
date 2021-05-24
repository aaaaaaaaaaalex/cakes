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


	// Svg
	let path = document.querySelector(".svg__path");
	// let numPoints = 4;
	// let points = [10, 40, 100, 50];
	// let str = "";
	// str += `M 0 0 V ${points[0]}`;
	// str += `M 0 ${points[0]}`;


	// for (let i=0; i < numPoints-1; i++) {
	// 	let p = i+1/(numPoints-1)*1000;
	// 	let cp = p - (1/(numPoints-1)*1000)/2;
	// 	str += `C ${cp} ${points[i]} ${cp} ${points[i+1]} ${p} ${points[i+1]}`;
	// };
	// str += "V 0 H 0"

	// console.log(str);
	

	path.setAttribute("d", "M 70 70C 125 0 125 430 250 430C 380 430 400 100 650 70C 880 50 880 500 1100 350" );








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
