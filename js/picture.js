'use strict';
//модуль для отрисовки миниатюры;
(function () {

    //функция отрисовке изоражения
    window.picture = function(data,number){
        var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
        var pictureElement = pictureTemplate.cloneNode(true);

        pictureElement.querySelector('img').src = data['url'];
        pictureElement.querySelector('.picture__comments').textContent = data['comments'].length;
        pictureElement.querySelector('.picture__likes').textContent = data['likes'];
        pictureElement.querySelector('#forGeneratePreview').textContent = number;

        return pictureElement;
    };

})();