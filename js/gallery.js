'use strict';
//модуль, который работает с галереей изображений
(function () {
    var generatedArray = window.data;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < generatedArray.length;i++){
        fragment.appendChild(window.picture(generatedArray[i]));
    }

    document.querySelector('.pictures').appendChild(fragment);


    //реализация открытия изображения при клике на ее
    var picture = document.querySelectorAll('.picture');
    for (var j = 0; j < picture.length;j++){
        picture[j].addEventListener('click',function (evt) {
            //alert(evt.currentTarget.tagName);
            window.preview(evt.currentTarget);
        });
    }

})();