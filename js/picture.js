//модуль для отрисовки миниатюры;
(function () {
    //функция отрисовке изоражения
    window.picture = function(data){
        var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
        var pictureElement = pictureTemplate.cloneNode(true);

        pictureElement.querySelector('img').src = data['url'];
        pictureElement.querySelector('.picture__comments').textContent = data['comments'];
        pictureElement.querySelector('.picture__likes').textContent = data['likes'];

        return pictureElement;
    };

})();