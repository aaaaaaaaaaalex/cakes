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

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

	// SMOOTH SCROLL
	let elementsSmoothScroll = document.querySelectorAll("[data-scroll]");

	let onClick = function(event) {
		event.preventDefault();

		let element = event.target;
		let sectionId = element.dataset.scroll;
		let sectionOffset = jQuery(sectionId).offset().top;

		jQuery("html, body").animate( {
			scrollTop: sectionOffset
		}, 800);
	};

	for (i=0; i<elementsSmoothScroll.length; i++) {
		let element = elementsSmoothScroll[i];
		element.addEventListener("click", onClick);
	};







	// SCALE INTRO
	let addClass = function() {
		let blockBg = document.querySelector(".intro__wrap--1");
		blockBg.classList.add("scale-intro");
	};
	setTimeout(addClass, 1000);






	// SVG
	let pathLg = document.querySelector(".svg__path--1");
	let pathSm = document.querySelector(".svg__path--2");

	pathLg.setAttribute("d", "M 70 70C 125 0 125 430 250 430C 380 430 400 100 650 70C 880 50 880 500 1100 350" );
	pathSm.setAttribute("d", "M 150 60C 585 50 970 100 970 175C 970 350 200 225 200 350C 200 450 585 425 900 470" );





	// MASK
	// MASK TEL
	jQuery("[data-input-tel]").mask("+7 (999) 999 - 99 - 99", {autoclear: false});
	// MASK Cyrillic
	jQuery("[data-input-cyrillic]").on('input', function() {
		jQuery(this).val(jQuery(this).val().replace(/[^??-????-??????\s]/g, ''));
	});
	// MASK LATIN
	jQuery("[data-input-latin]").on('input', function() {
		jQuery(this).val(jQuery(this).val().replace(/[^A-Za-z??\s]/g, ''));
	});
	// MASK EMAIL
	jQuery("[data-input-email]").on('input', function() {
		jQuery(this).val(jQuery(this).val().replace(/[??-????-??????]/g, ''));
	});


	// VALIDATOR
	let inputs = jQuery("[data-input]");

	for (i=0; i<inputs.length; i++) {
		let input = inputs[i];
		jQuery(input).on("input change keydown blur keypress keyup", onValidatorInput);
	};

	function onValidatorInput(event) {
		// VALIDATOR INPUT
		let input = event.target;
		let inputValue = input.value;
		let inputDataRe = jQuery(input).data("re");
		let inputDataRequired = jQuery(input).data("required");
		let input??reateRe = new RegExp(inputDataRe, "g");
		let resultRe = inputValue.match(input??reateRe);


		// ???????? ???????? ?????????????????????? ?????? ????????????????????
		if(inputDataRequired == true){

			if(inputValue == ""){
				jQuery(input).removeClass("valid").addClass("invalid").attr("data-flag","false");
			}else{
				if(inputValue != resultRe){
					jQuery(input).removeClass("valid").addClass("invalid").attr("data-flag","false");
				}else{
					jQuery(input).removeClass("invalid").addClass("valid").attr("data-flag","true");
				}
			}

		// ???????? ???????? ???? ?????????????????????? ?????? ????????????????????
		}else{

			if(inputValue == ""){
				jQuery(input).removeClass("valid").removeClass("invalid").attr("data-flag","true");
			}else{
				if(inputValue != resultRe){
					jQuery(input).removeClass("valid").addClass("invalid").attr("data-flag","false");
				}else{
					jQuery(input).removeClass("invalid").addClass("valid").attr("data-flag","true");
				}
			}

		}
		// CALL onCheck
		onCheck(input);
	};

	function onCheck(){
		let inputOn = event.target;
		let inputsFlag = jQuery(inputOn).parents("[data-form]").find("[data-input]");
		let btnRelated = jQuery(inputOn).parents("[data-form]").find("[data-btn]");

		let flagValue = jQuery(inputsFlag).map(function() {
			return this.dataset.flag;
		}).get();


		let getFlagValue = flagValue.every(validFlag);

		function validFlag(n){
			return n == "true";
		};

		switchBtn(getFlagValue, btnRelated);
	};

	// SWITCH BUTTON
	function switchBtn(getFlagValue, btnRelated){
		if(getFlagValue == true ) {
			btnRelated.prop("disabled", false).addClass("hover-on");
			// console.log("???????????? ????????????????????????");
		}else{
			btnRelated.prop("disabled", true).removeClass("hover-on");
			// console.log("???????????? ????????????????????????????");

		}
	};







	// Modal
	// Modal Open
	jQuery("[data-modal]").on("click", function(event) {
		event.preventDefault();
		let modalId = jQuery(this).data("modal");
		jQuery(modalId).addClass("show");
		jQuery("body").addClass("no-scroll");
	});
	// Modal Close
	jQuery("[data-close]").on("click", function(event) {
		event.preventDefault();
		let modalParent = jQuery(this).parents(".modal");
		jQuery(modalParent).removeClass("show");
		jQuery("body").removeClass("no-scroll");
	});
	jQuery(".modal").on("click", function() {
		jQuery(this).removeClass("show");
		jQuery("body").removeClass("no-scroll");
	});
	jQuery(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});


	// Modal Plug

	$("[data-close]").on("click", function(event) {
		event.preventDefault();
		let modalParent = $(this).parents(".modal-plug");
		modalParent.removeClass("show");
		$("body").removeClass("no-scroll");
	});
	$(".modal-plug").on("click", function(event) {
		$(this).removeClass("show");
		$("body").removeClass("no-scroll");
	});
	$(".modal-plug__dialog").on("click", function(event) {
		event.stopPropagation()
	});














	// CART

	// ????????????????????
	// ?????? ????????????, ?????????????? ???????????? ??????-???? ????????????
	let btnsChangeQuantity = document.querySelectorAll("[data-btn-change-quantity]");
	// ??????????????
	let cart = document.querySelector("[data-cart]");
	// ???????????? span ??????????????
	let spanCart = document.querySelector("[data-cart-count]");
	// ?????????????????? ?????????????????? ??????-???? ???????????? ???????????? ?? ???????????? ???????????? 0
	newQuantity = 0;
	// ???????????? ?????? ????????????, ???? ?????????????? ?????????? ?????????????? ??????????
	let counterInputs = document.querySelectorAll("[data-counter-input]");
	// ???????????? ?????? ??????????, ???? ?????????????? ?????????? ?????????????? ?????????? ?????????? ?????????????????? ???????? ??????????????
	let spansPriceProduct = document.querySelectorAll("[data-price-product]");
	// ???????????? ?????????????? ????????, ?? ?????????????? ?????????? ???????????????????? ?????????? ?????????? ?????????????????? ???????? ??????????????
	let spanPriceTotal = document.querySelector("[data-price-total]");
	// ???????????? ?????????? ?????????????? ????????, ?? ?????????????? ?????????? ???????????????????? ?????????? ?????????? ?????????????????? ???????? ?????????????? ???????????? ?? ??????????????????
	let spanPriceTotalAndDostavka = document.querySelector("[data-price-total-and-dostavka]");
	// ???????????????? ???????????????? ???????????????? ?? ??????e???????????? spanDostavkaValue
	let spanDostavkaValue = Number(document.querySelector("[data-price-dostavka]").textContent);

	// ??????????????, ?????????????? ?????????????????????? ?????? ?????????? ???? ????????????, ?????????????? ???????????? ???????????????????? ????????????
	let clickBtnChangeQuantity = function (event) {
		// ?????????????????? ?? ???????????????????? btnChangeQuantity ???????????? ???? ?????????????? ????????????????
		let btnChangeQuantity = event.target;

		// ?????????????? ??????????????
		cart.classList.add("show");

		// ???????????????? "??????????????????????" ???????????????? ?? ???????????????????? direction
		let direction = btnChangeQuantity.dataset.direction;
		// ???????????????? "id" ????????????, ?? ???????????????? ???????????????? ?????????? ?? ???????????????????? idInput
		let idInput = btnChangeQuantity.dataset.idInput;
		// ???????????? ??????????, ?? ?????????????? ?????????? ???????????????? ?????????? ???????????????? ??????-???? ????????????
		let inputProduct = document.getElementById(idInput);
		// ???????????? ?????????????? ???????????????? ????????????
		let currentValueInput = Number(inputProduct.value);

		// ????????????????/???????????????? ??????-???? ???????????? ???? ???????????????????????? ??????????????
		if (direction === "plus") {
			// ?????????????????????? ???????????????????? ???????????? ???? 1
			newQuantity = currentValueInput + 1;
		} else {
			// ?????????????????? ?????????? ???????????????????? ???????????? ???? 1
			// ?????????????? ???????????? ????????????????, ?????????? ???? ??????-???? ???????????? ???????????? 0
			if (currentValueInput - 1 > 0) {
				newQuantity = currentValueInput - 1;
			} else {
				newQuantity = 0;
			}
		}
		// ?????????????? ?? ?????????? ?????????? ???????????????? ??????-???? ????????????
		inputProduct.value = newQuantity;

		// ?????????????? ???????????? ??????-???? ??????????????
		// ?????????????????? ?????????????????? ???????????????? ?????????? ??????-???? ???????? ?????????????? ?? ????????
		let newSum = 0;
		// ?????????????? ???? ?????????????? ?? ??????????, ???????????????? ???? ????????????????
		for (i=0; i<counterInputs.length; i++) {
			// Co???????????? ?????????????? ???????????????? ???????????? ?? ???????????????????? counterInputValue
			let counterInputValue = Number(counterInputs[i].value);
			newSum = newSum + counterInputValue;
		};

		// ?????????????? ?????????? ??????-???? ?????????????? ?? ??????????????
		// ?????????????? ?????????? ??????-???? ?????????????? ?? ???????? ??????????????
		spanCart.textContent = newSum;

		// ???????????????????? ?????????? ???? ???????????????????? ????????????????
		let priceProduct = Number(inputProduct.dataset.price);
		// ???????????? ????????, ?? ?????????????? ?????????? ???????????????????? ?????????? ???? ???????????????????? ????????????????
		let spanPriceProduct = inputProduct.closest("[data-item]").querySelector("[data-price-product]");
		// ???????????????????? ?????????? ???? ???????????????????? ????????????????
		newPriceProduct = inputProduct.value * priceProduct;
		// ?????????????? ?????????? ???? ???????????????????? ???????????????? ?? ???????? ????????????????
		spanPriceProduct.textContent = newPriceProduct;

		// ???????????????????? ?????????? ???? ???????? ??????????????????
		// ?????????????????? ?????????????????? ???????????????? ?????????? ?????????????????? ???????? ?????????????? ?? ????????
		let newPriceTotal = 0;
		// ?????????????? ???? ???????????? ?? ???????????? ?????????????????? ???? ???????????????????? ???????????? ?? ??????????, ???????????????? ???? ????????????????
		for (i=0; i<spansPriceProduct.length; i++) {
			// Co???????????? ?????????????? ???????????????? ?????????? ?? ???????????????????? spanPriceProductValue
			let spanPriceProductValue = Number(spansPriceProduct[i].textContent);
			newPriceTotal = newPriceTotal + spanPriceProductValue;
		};
		// ?????????????? ?????????? ???? ?????????????????? ???? ???????? ?????????????????? ?? ?????????????? ????????
		spanPriceTotal.textContent = newPriceTotal;

		// ?????????????? ?????????? ?????????? ?????????????????? ???????? ?????????????? ???????????? ?? ??????????????????
		if(newPriceTotal > 0) {
			newPriceTotalAndDostavka = newPriceTotal + spanDostavkaValue;
		} else {
			newPriceTotalAndDostavka = 0;
		}
		// ?????????????? ?????????? ???? ?????????????????? ???? ???????? ?????????????????? ???????????? ?? ?????????????????? ?? ?????????? ?????????????? ????????
		spanPriceTotalAndDostavka.textContent = newPriceTotalAndDostavka;
	};
	// ?????????????????? ?????????????????? ?????????????? ?????????? ???? ????????????, ?????????????? ???????????? ??????-???? ????????????
	for (i=0; i<btnsChangeQuantity.length; i++) {
		let btnChangeQuantity = btnsChangeQuantity[i];
		btnChangeQuantity.addEventListener("click", clickBtnChangeQuantity);
	};







	// OPEN AND CLOSE BANK CARD ADD PAYMENT
	let blockBankWrapBtns = document.querySelector(".bank-card__wrap");
	let btnsCardChoice = document.querySelectorAll(".btn-card-choice");
	let blockAddPayment = document.querySelector(".bank-card__add-payment");
	let btnsCardChoiceSubtitle = document.querySelector(".btn-bank-card-subtitle");
	let title = document.querySelector(".bank-card__title");

	let onClickSubtitle = function () {
		blockAddPayment.classList.remove("show");
		blockBankWrapBtns.classList.remove("hidden");
		title.classList.remove("card-active");

	};

	let onCardChoice = function () {
		blockBankWrapBtns.classList.add("hidden");
		blockAddPayment.classList.add("show");
		title.classList.add("card-active");
	};

	for (i=0; i<btnsCardChoice.length; i++) {
		let btnCardChoice = btnsCardChoice[i];
		btnCardChoice.addEventListener("click", onCardChoice);
	};

	btnsCardChoiceSubtitle.addEventListener("click", onClickSubtitle);








	// ?????????????????? ???????????? ???????????????? ??????????
	let btnOrder = document.querySelector(".btn-order-total");
	let modal = document.querySelector(".modal");
	let inputsModal = modal.querySelectorAll("[data-input]");

	let switchBtnOrder = function (getInputsFlagValue) {
		if(getInputsFlagValue == true ) {
			btnOrder.removeAttribute("disabled");
			btnOrder.classList.add("hover-on");
		}else{
			btnOrder.setAttribute("disabled", "");
			btnOrder.classList.remove("hover-on");
		}
	};

	let checkInputsValid = function () {

		let inputsFlagValue = jQuery(inputsModal).map(function() {
			return this.dataset.flag;
		}).get();

		let getInputsFlagValue = inputsFlagValue.every(inputsValidFlag);

		function inputsValidFlag(n){
			return n == "true";
		};

		switchBtnOrder(getInputsFlagValue);
	};

	for (i=0; i<inputsModal.length; i++) {
		let inputModal = inputsModal[i];
		inputModal.addEventListener("input", checkInputsValid);
	};





});
