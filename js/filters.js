'use strict';

(function () {

    var pictures = document.querySelector('.pictures');
    var picturesInnerElements = document.createDocumentFragment();
    picturesInnerElements.appendChild(pictures.querySelector('.pictures__title').cloneNode(true));
    picturesInnerElements.appendChild(pictures.querySelector('.img-upload').cloneNode(true));

    var addInnerElements = function () {
        pictures.innerHTML = '';
        pictures.appendChild(picturesInnerElements.cloneNode(true));
    };

    var disableActiveFilter = function () {
        var filterButtons = document.querySelectorAll('.img-filters__button');
        filterButtons.forEach(function (item) {
            if (item.classList.contains('img-filters__button--active')){
                item.classList.remove('img-filters__button--active');
            }
        })
    };

    var filterPopular = document.querySelector('#filter-popular');
    var filterRandom = document.querySelector('#filter-random');
    var filterDiscussed = document.querySelector('#filter-discussed');

    filterPopular.addEventListener('click', function () {
        addInnerElements();
        disableActiveFilter();
        filterPopular.classList.add('img-filters__button--active');

        var generatedArray = window.data.slice();
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < generatedArray.length;i++){
            fragment.appendChild(window.picture(generatedArray[i],i));
        }

        document.querySelector('.pictures').appendChild(fragment);


        //реализация открытия изображения при клике на ее
        var picture = document.querySelectorAll('.picture');
        for (var j = 0; j < picture.length;j++){
            picture[j].addEventListener('click',function (evt) {
                //alert(evt.currentTarget.tagName);
                window.preview(evt.currentTarget.querySelector('#forGeneratePreview').textContent,generatedArray);
            });
        }
    });

    filterRandom.addEventListener('click', function () {
        addInnerElements();
        disableActiveFilter();
        filterRandom.classList.add('img-filters__button--active');

        var generatedArray = window.data.slice(0,9);
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < generatedArray.length;i++){
            fragment.appendChild(window.picture(generatedArray[i],i));
        }

        pictures.appendChild(fragment);


        //реализация открытия изображения при клике на ее
        var picture = document.querySelectorAll('.picture');
        for (var j = 0; j < picture.length;j++){
            picture[j].addEventListener('click',function (evt) {
                //alert(evt.currentTarget.tagName);
                window.preview(evt.currentTarget.querySelector('#forGeneratePreview').textContent,generatedArray);
            });
        }
    });

    var pictureComparator = function(left,right){
        return right['comments'].length - left['comments'].length;
    };

    filterDiscussed.addEventListener('click', function () {
        addInnerElements();
        disableActiveFilter();
        filterDiscussed.classList.add('img-filters__button--active');

        var generatedArray = window.data.slice().sort(pictureComparator);
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < generatedArray.length;i++){
            fragment.appendChild(window.picture(generatedArray[i],i));
        }

        document.querySelector('.pictures').appendChild(fragment);


        //реализация открытия изображения при клике на ее
        var picture = document.querySelectorAll('.picture');
        for (var j = 0; j < picture.length;j++){
            picture[j].addEventListener('click',function (evt) {
                //alert(evt.currentTarget.tagName);
                window.preview(evt.currentTarget.querySelector('#forGeneratePreview').textContent,generatedArray);
            });
        }
    });

})();