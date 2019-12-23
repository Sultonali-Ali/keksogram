'use strict';
(function () {

    var description = [
        "Тестим новую камеру!",
        "Затусили с друзьями на море",
        "Как же круто тут кормят",
        "Отдыхаем...",
        "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
        "Вот это тачка!",
    ];

    //Получения шаблона комментарии
    var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
    var generateComment = function(comments){
        var commentElement = commentTemplate.cloneNode(true);

        commentElement.querySelector('.social__picture').src = 'img/avatar-' + (Math.floor(Math.random()*6) + 1) + '.svg';
        commentElement.querySelector('.social__text').textContent = comments[Math.floor(Math.random()*6)];

        return commentElement;
    };

    //var bigPicturePreview = document.querySelector('.big-picture');
    var bigPicture = document.querySelector('.big-picture');

    window.preview = function(genArr){

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


    bigPicture.querySelector('.big-picture__cancel').addEventListener('click', function () {
        closePopup();
    });
})();