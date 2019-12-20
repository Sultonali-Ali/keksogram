
var comments = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра." +
    "В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

var description = [
    "Тестим новую камеру!",
    "Затусили с друзьями на море",
    "Как же круто тут кормят",
    "Отдыхаем...",
    "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
    "Вот это тачка!",
];

var generateObjArray = function(comments,description) {

    var objArray = new Array();
    for (var i = 0; i < 25;i++){
        /*objArray[i].url = "photos/" + (i + 1);
        objArray[i].likes = Math.floor(Math.random()*185) + 15;
        objArray[i].comments = comments[Math.floor(Math.random()*7)];
        objArray[i].description = description[Math.floor(Math.random()*6)];*/
        objArray[i] = {
            url: "photos/" + (i + 1) + ".jpg",
            likes: Math.floor(Math.random()*185) + 15,
            comments: comments[Math.floor(Math.random()*6)],
            description: description[Math.floor(Math.random()*5)],
        };
    }
    return objArray;
};

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

var renderPicture = function(data){
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('img').src = data['url'];
    pictureElement.querySelector('.picture__comments').textContent = data['comments'].substr(0,5) + "...";
    pictureElement.querySelector('.picture__likes').textContent = data['likes'];

    return pictureElement;
};

var generatedArray = generateObjArray(comments,description);
var fragment = document.createDocumentFragment();

for (var i = 0; i < generatedArray.length;i++){
    fragment.appendChild(renderPicture(generatedArray[i]));
}

document.querySelector('.pictures').appendChild(fragment);


var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
var generateComment = function(comments){
    var commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = 'img/avatar-' + (Math.floor(Math.random()*6) + 1) + '.svg';
    commentElement.querySelector('.social__text').textContent = comments[Math.floor(Math.random()*6)];

    return commentElement;
};

var generateBigPicture = function(genArr, comments){
    var bigPicture = document.querySelector('.big-picture');
    bigPicture.querySelector('.big-picture__img img').src = genArr['url'];
    bigPicture.querySelector('.likes-count').textContent = genArr['likes'];
    bigPicture.querySelector('.comments-count').textContent = genArr['comments'].length;
    bigPicture.querySelector('.social__caption').textContent = genArr['description'];
    var commentFragment = document.createDocumentFragment();
    for (var i = 0; i < 3;i++){
        commentFragment.appendChild(generateComment(comments));
    }
    bigPicture.querySelector('.social__comments').appendChild(commentFragment);

    bigPicture.classList.remove('hidden');
};

document.querySelector('#upload-file').addEventListener('change', function () {
   document.querySelector('.img-upload__overlay').classList.remove('hidden');
});

//generateBigPicture(generatedArray[Math.floor(Math.random()*24)],comments);
