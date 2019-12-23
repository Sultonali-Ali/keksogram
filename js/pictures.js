




//Получения шаблона комментарии
var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
var generateComment = function(comments){
    var commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = 'img/avatar-' + (Math.floor(Math.random()*6) + 1) + '.svg';
    commentElement.querySelector('.social__text').textContent = comments[Math.floor(Math.random()*6)];

    return commentElement;
};

var bigPicture = document.querySelector('.big-picture');
var generateBigPicture = function(genArr, comments){


    bigPicture.querySelector('.big-picture__img img').src = genArr.querySelector('.picture__img').getAttribute('src');
    bigPicture.querySelector('.likes-count').textContent = genArr.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = genArr.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__caption').textContent = description[Math.floor(Math.random()*5)];
    // bigPicture.querySelector('.big-picture__img img').src = genArr['url'];
    // bigPicture.querySelector('.likes-count').textContent = genArr['likes'];
    // bigPicture.querySelector('.comments-count').textContent = genArr['comments'].length;
    // bigPicture.querySelector('.social__caption').textContent = genArr['description'];
    // var commentFragment = document.createDocumentFragment();
    // for (var i = 0; i < 3;i++){
    //     commentFragment.appendChild(generateComment(comments));
    // }
    // bigPicture.querySelector('.social__comments').appendChild(commentFragment);

    openPopup();

};

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

//модальные окны для просмотра изображение
var onPopupEscPress = function(evt){

    if (evt.keyCode === 27){
        closePopup();
    }
};

var openPopup = function(evt){
    bigPicture.classList.remove('hidden');
    document.addEventListener('keydown',onPopupEscPress);
};

var closePopup = function(evt){
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown',onPopupEscPress);
};

document.querySelector('#upload-file').addEventListener('change', function () {
   openPopupUpload();
});

imgCorrect.querySelector('.img-upload__cancel').addEventListener('click', function (evt) {
    closePopupUpload();
});

//generateBigPicture(generatedArray[Math.floor(Math.random()*24)],comments);


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

var picture = document.querySelectorAll('.picture');
for (var j = 0; j < picture.length;j++){
    picture[j].addEventListener('click',function (evt) {
        //alert(evt.currentTarget.tagName);
        generateBigPicture(evt.currentTarget,comments);
    });
}

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', function () {
    closePopup();
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

