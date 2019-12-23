'use strict';
(function () {

    //Получения шаблона комментарии
    var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
    var generateComment = function(comment){
        var commentElement = commentTemplate.cloneNode(true);

        commentElement.querySelector('.social__picture').src = comment['avatar'];
        commentElement.querySelector('.social__text').textContent = comment['message'];

        return commentElement;
    };


    var bigPicture = document.querySelector('.big-picture');

    window.preview = function(id){
        id = parseInt(id);
        // var data = window.data;
        // console.log(data.length);
        var comments = window.data[id]['comments'];
        bigPicture.querySelector('.big-picture__img img').src = window.data[id]['url'];
        bigPicture.querySelector('.likes-count').textContent = window.data[id]['likes'];
        bigPicture.querySelector('.comments-count').textContent = comments.length;
        bigPicture.querySelector('.social__caption').textContent = window.data[id]['description'];

        var commentFragment = document.createDocumentFragment();
        for (var i = 0; i < comments.length;i++){
            commentFragment.appendChild(generateComment(comments[i]));
        }
        bigPicture.querySelector('.social__comments').appendChild(commentFragment);

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