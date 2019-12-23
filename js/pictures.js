






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


//определение глубину эффекта и его применения к изображение
var applyEffect = function(node,effectNumber,effectValue){
    switch (effectNumber) {
        case 0: {
            node.style = "";
            break;
        }
        case 1: {
            node.style = " -webkit-filter: grayscale(" + (effectValue / 100) + ");" +
                "         filter: grayscale(" + (effectValue / 100) + ");";
            break;
        }
        case 2: {
            node.style = " -webkit-filter: sepia(" + (effectValue / 100) + ");" +
                "         filter: sepia(" + (effectValue / 100) + ");";
            break;
        }
        case 3: {
            node.style = " -webkit-filter: invert(" + (effectValue) + "%);" +
                "         filter: invert(" + (effectValue) + "%);";
            break;
        }
        case 4: {
            node.style = " -webkit-filter: blur(" + (effectValue / 10) + "px);" +
                "         filter: blur(" + (effectValue / 10) + "px);";
            break;
        }
        case 5: {
            node.style = " -webkit-filter: brightness(" + (effectValue / 10) + ");" +
                "         filter: brightness(" + (effectValue / 10) + ");";
            break;
        }

    }
};

var inputRange = document.querySelector('.effect-level__value');
var imgUploadPreview = document.querySelector('.img-upload__preview');
inputRange.addEventListener('change', function () {

    var effects = document.querySelectorAll('.effects__radio');
    
    for (var i = 0;i < effects.length;i++){
        if(effects[i].checked == true){
            applyEffect(imgUploadPreview,i,inputRange.value);
        }
    } 

});

//обработка события с помощью делегирование
document.querySelector('.img-upload__effects').addEventListener('click',function (evt) {
    if (evt.target.tagName == 'INPUT' || evt.target.tagName == 'LI'){
        inputRange.value = '0';
        imgUploadPreview.style = "";
    }
});



//Валидация хэш тега



var hashtags = document.querySelector('.text__hashtags');
var imgUploadButton = document.querySelector('#upload-submit')

hashtags.addEventListener('focusout',function () {

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
        if (hashtagError.length > 0){
            hashtags.validity.valid = false;
            hashtags.setCustomValidity(
                hashtagError.toString()
            );
            break;
        }
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

