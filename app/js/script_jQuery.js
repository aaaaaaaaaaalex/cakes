@@include('check_webp_css.js')

document.addEventListener("DOMContentLoaded", function(){

@@include('jquery.maskedinput.min.js')

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
	setTimeout(addClass, 700);















	// SVG
	let path = document.querySelector(".svg__path");

	path.setAttribute("d", "M 70 70C 125 0 125 430 250 430C 380 430 400 100 650 70C 880 50 880 500 1100 350" );





	// MASK
	// MASK TEL
	jQuery("[data-input-tel]").mask("+7 (999) 999 - 99 - 99", {autoclear: false});
	// MASK Cyrillic
	jQuery("[data-input-cyrillic]").on('input', function() {
		jQuery(this).val(jQuery(this).val().replace(/[^а-яА-ЯёЁ\s]/g, ''));
	});
	// MASK LATIN
	jQuery("[data-input-latin]").on('input', function() {
		jQuery(this).val(jQuery(this).val().replace(/[^A-Za-zА\s]/g, ''));
	});
	// MASK EMAIL
	jQuery("[data-input-email]").on('input', function() {
		jQuery(this).val(jQuery(this).val().replace(/[а-яА-ЯёЁ]/g, ''));
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
		let inputСreateRe = new RegExp(inputDataRe, "g");
		let resultRe = inputValue.match(inputСreateRe);


		// ЕСЛИ ПОЛЕ ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОЛНЕНИЯ
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

		// ЕСЛИ ПОЛЕ НЕ ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОЛНЕНИЯ
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
			// console.log("кнопка активирована");
		}else{
			btnRelated.prop("disabled", true).removeClass("hover-on");
			// console.log("кнопка деактивирована");

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














	// CART


	// Переменные
	// Все кнопки, которые меняют кол-во товара
	let btnsChangeQuantity = document.querySelectorAll("[data-btn-change-quantity]");
	// Корзина
	let cart = document.querySelector("#cart");
	// Установим начальное кол-во товара равное 0
	newQuantity = 0;


	// Функция, которая выполняется при клике на кнопку, которая меняет количество товара
	let clickBtnChangeQuantity = function (event) {
		// Сохраняем в переменную btnChangeQuantity кнопку по которой кликнули
		let btnChangeQuantity = event.target;

		// Покажем корзину
		cart.classList.add("show");


		// Сохраним "направление" подсчета в переменную direction
		let direction = btnChangeQuantity.dataset.direction;
		// Сохраним "id" инпута, к которому привязан товар в переменную idInput
		let idInput = btnChangeQuantity.dataset.idInput;
		// Найдем инпут, в который нужно записать новое значение кол-ва товара
		let inputProduct = document.getElementById(idInput);
		// Узнаем текущее значение инпута
		let currentValueInput = Number(inputProduct.value);


		// Увеличим/уменьшим кол-во товара по определенной позиции
		if (direction === "plus") {
			// Увеличиваем количество товара на 1
			newQuantity = currentValueInput + 1;
		} else {
			// Уменьшаем общее количество товара на 1
			// Сначала делаем проверку, будет ли кол-во товара больше 0
			if (currentValueInput - 1 > 0) {
				newQuantity = currentValueInput - 1;
			} else {
				newQuantity = 0;
			}
		}
		// Запишем в инпут новое значени кол-ва товара
		inputProduct.value = newQuantity;



		// Подсчет общего кол-ва товаров
		// Запись общего кол-ва товаров в корзину

	};

	// Установим прослушку события клика на кнопки, которые меняют кол-во товара
	for (i=0; i<btnsChangeQuantity.length; i++) {
		let btnChangeQuantity = btnsChangeQuantity[i];
		btnChangeQuantity.addEventListener("click", clickBtnChangeQuantity);
	};












	// // CART SHOW
	// let btnsBuy = document.querySelectorAll("[data-cart]");
	// let cart = document.querySelector("#cart");

	// let onClickBtn = function(event) {
	// 	event.preventDefault();

	// 	cart.classList.add("show");
	// };

	// for (i=0; i<btnsBuy.length; i++) {
	// 	let btn = btnsBuy[i];
	// 	btn.addEventListener("click", onClickBtn);
	// };












	// COUNTER
	let btnsCount = document.querySelectorAll(".counter__btn");
	let spanTotalResultProducts = document.getElementById("total-price-products");
	let spanTotalResult = document.getElementById("total-price-and-dostavka");
	let spanDostavkaValue = Number(document.getElementById("dostavka").textContent);



	// Считаем сумму по всем продуктам
	let countPriceTotalAll = function() {
		let spansPriceTotalAll = document.querySelectorAll(".modal__price-total");

		priceTotalAll = 0;

		for (i=0; i<spansPriceTotalAll.length; i++) {
			let spanPriceValue = Number(spansPriceTotalAll[i].textContent);

			if(spanPriceValue > 0) {
				priceTotalAll = priceTotalAll + spanPriceValue;
			}
		};

		spanTotalResultProducts.textContent = priceTotalAll;


		// Считаем общую сумму вместе с доставкой
		if(priceTotalAll > 0) {
			priceTotalAllAndDostavka = priceTotalAll + spanDostavkaValue;
			spanTotalResult.textContent = priceTotalAllAndDostavka;
		} else {
			spanTotalResult.textContent = 0;
		}
	};



	// Считаем сумму по отдельному продукту
	let countPriceTotalOne = function(input) {
		let currentValueInput = input.value;
		let сost = Number(input.dataset.price);
		let spanPriceTotal = input.closest(".modal__item").querySelector(".modal__price-total");

		let totalPrice = currentValueInput * сost;
		spanPriceTotal.textContent = totalPrice;

		countPriceTotalAll();
	};



	// Тело счетчика
	// let onCount = function() {
	// 	let direction = this.dataset.direction;
	// 	let input = this.parentElement.querySelector(".counter__input");
	// 	let currentValueInput = Number(input.value);
	// 	let newValue;

	// 	if (direction === "plus") {
	// 		newValue = currentValueInput + 1;
	// 	} else {
	// 		if ((newValue = currentValueInput -1) > 0) {
	// 			newValue = currentValueInput -1;
	// 		} else {
	// 			newValue = 0;
	// 		}
	// 	}

	// 	input.value = newValue;
	// 	countPriceTotalOne(input);
	// };

	// for (i=0; i<btnsCount.length; i++) {
	// 	let btnCount = btnsCount[i];
	// 	btnCount.addEventListener("click", onCount);
	// };


















	// OPEN AND CLOSE BANK CARD ADD PAYMENT
	let blockBankWrapBtns = document.querySelector(".bank-card__wrap");
	let btnsCardChoice = document.querySelectorAll(".btn-card-choice");
	let blockAddPayment = document.querySelector(".bank-card__add-payment");
	let btnsCardChoiceSubtitle = document.querySelector(".btn-bank-card-subtitle");

	let onClickSubtitle = function () {
		blockAddPayment.classList.remove("show");
		blockBankWrapBtns.classList.remove("hidden");
	};

	let onCardChoice = function () {
		blockBankWrapBtns.classList.add("hidden");
		blockAddPayment.classList.add("show");
	};

	for (i=0; i<btnsCardChoice.length; i++) {
		let btnCardChoice = btnsCardChoice[i];
		btnCardChoice.addEventListener("click", onCardChoice);
	};

	btnsCardChoiceSubtitle.addEventListener("click", onClickSubtitle);








	// АКТИВАЦИЯ КНОПКИ ОФОРМИТЬ ЗАКАЗ
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
