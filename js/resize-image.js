'use strict';

(function () {
	
	var doSmaller = document.querySelector('.scale__control--smaller');
	var doBigger = document.querySelector('.scale__control--bigger');
	var value = document.querySelector('.scale__control--value');
	var imagePreview = document.querySelector('.img-upload__preview');

	var injectResize = function(value){
		imagePreview.style.transform = 'scale(' + (value/ 100) + ')';
	}

	doSmaller.addEventListener('click',function () {
		value.value = Math.max(25,parseInt(value.value) - 25) + '%';
		injectResize(parseInt(value.value));
	});

	doBigger.addEventListener('click',function () {
		value.value = Math.min(100,parseInt(value.value) + 25) + '%';
		injectResize(parseInt(value.value));
	});

})();