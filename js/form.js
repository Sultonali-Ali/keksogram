'use strict';
(function () {
    //Обработка событий открытия и закрытия формы редактирования изображения
    var imgCorrect = document.querySelector('.img-upload__overlay');

//модальные окны для загрузки изображения
    var onPopupUploadEscPress = function(evt){
        if (evt.keyCode === 27){
            closePopupUpload();
        }
    };

    var openPopupUpload = function(evt){
        imgCorrect.classList.remove('hidden');
        document.addEventListener('keydown',onPopupUploadEscPress);
    };

    var closePopupUpload = function(evt){
        imgCorrect.classList.add('hidden');
        document.querySelector('#upload-file').value = "";
        document.removeEventListener('keydown',onPopupUploadEscPress);
    };



    document.querySelector('#upload-file').addEventListener('change', function () {
        openPopupUpload();
    });

    imgCorrect.querySelector('.img-upload__cancel').addEventListener('click', function (evt) {
        closePopupUpload();
    });







    //Валидация хэш тега
    var hashtags = document.querySelector('.text__hashtags')

    var imgUploadButton = document.querySelector('#upload-submit')



    imgUploadButton.addEventListener('click',function (evt) {

        var hashtagError = new Array();
        var hashtagArray = hashtags.value.trim().split(' ');


        if (hashtagArray.toString() === ''){
            return;
        }


        for (var i = 0; i < hashtagArray.length;i++){

            if (hashtagArray[i].substr(0,1) !== '#'){
                hashtagError.push('хэш-тег начинается с символа # (решётка)');
            }
            if (hashtagArray[i].length < 2){
                hashtagError.push('\nхеш-тег не может состоять только из одной решётки');
            }
            if (hashtagArray[i].length > 20){
                hashtagError.push('\nмаксимальная длина одного хэш-тега 20 символов, включая решётку');
            }
            if (hashtagArray.length > 5){
                hashtagError.push('\nнельзя указать больше пяти хэш-тегов');
            }
            if (hashtagError.length === 0){
                // hashtags.validity.valid = true;
                hashtags.setCustomValidity("");
            }

        }

        if (hashtagError.length > 0){

            var message = "";
            for (var k = 0;k < hashtagError.length;k++){
                message = message + "    " + hashtagError[k];
            }

            hashtags.setCustomValidity(message);

        }
    });

    //Запрешаем закрытия окна при активном input и textarea
    hashtags.addEventListener('focusin',function () {
        document.removeEventListener('keydown',onPopupUploadEscPress);
    });

    hashtags.addEventListener('focusout',function () {
        document.addEventListener('keydown',onPopupUploadEscPress);
    });

    document.querySelector('.text__description').addEventListener('focusin', function () {
        document.removeEventListener('keydown',onPopupUploadEscPress);
    });

    document.querySelector('.text__description').addEventListener('focusout', function () {
        document.addEventListener('keydown',onPopupUploadEscPress);
    });


})();