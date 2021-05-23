@@include('check_webp_css.js')

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

	ctx.setLineDash([5, 15]);/*dashes are 5px and spaces are 15px*/
	ctx.beginPath();
	ctx.moveTo(0,100);
	ctx.lineTo(400, 100);
	ctx.stroke();
});
