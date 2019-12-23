//модуль, который создаёт данные
(function () {
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
//Генерация данных для изображения
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
    window.data = generateObjArray(comments,description);

})();