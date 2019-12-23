(function () {
    var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

    //фукнция отрисовке изоражения
    var renderPicture = function(data){
        var pictureElement = pictureTemplate.cloneNode(true);

        pictureElement.querySelector('img').src = data['url'];
        pictureElement.querySelector('.picture__comments').textContent = data['comments'];
        pictureElement.querySelector('.picture__likes').textContent = data['likes'];

        return pictureElement;
    };

    var generatedArray = generateObjArray(comments,description);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < generatedArray.length;i++){
        fragment.appendChild(renderPicture(generatedArray[i]));
    }

    document.querySelector('.pictures').appendChild(fragment);
})();