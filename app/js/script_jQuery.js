document.addEventListener("DOMContentLoaded", function(){
	@@include('check_webp_css.js')
	
	// Scale Intro
	function addClass() {
		let blockBg = document.querySelector(".intro__wrap--1");
		blockBg.classList.add("scale-intro");
		console.log("function job");
		
	};
	setTimeout(addClass, 500);
});
