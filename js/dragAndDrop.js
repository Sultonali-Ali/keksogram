
(function () {
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

    // var inputRange = document.querySelector('.effect-level__value');
    var imgUploadPreview = document.querySelector('.img-upload__preview');
    // inputRange.addEventListener('change', function () {
    //
    //     var effects = document.querySelectorAll('.effects__radio');
    //
    //     for (var i = 0;i < effects.length;i++){
    //         if(effects[i].checked == true){
    //             applyEffect(imgUploadPreview,i,inputRange.value);
    //         }
    //     }
    //
    // });


    var effectLevelPin = document.querySelector('.effect-level__pin');
    var effectLevelDepth = document.querySelector('.effect-level__depth');

    effectLevelPin.addEventListener('mousedown',function (evt) {
       evt.preventDefault();

       var startCoords = {
         x: evt.clientX,
         //y: evt.clientY,
       };

       var onMouseMove = function (moveEvt) {
         moveEvt.preventDefault();

         var shift = {
             x: startCoords.x - moveEvt.clientX,
             //y: startCoords.y - moveEvt.clientY,
         };

         startCoords = {
             x: moveEvt.clientX,
             //y: moveEvt.clientY,
         };

           //effectLevelPin.style.top = (effectLevelPin.offsetTop - shift.y) + 'px';
           if ((effectLevelPin.offsetLeft - shift.x) >= 450){
               effectLevelPin.style.left =  '450px';
           } else if((effectLevelPin.offsetLeft - shift.x) <= 0) {
               effectLevelPin.style.left = 0;
           }else {
               effectLevelPin.style.left = (effectLevelPin.offsetLeft - shift.x) + 'px';
           }

           effectLevelDepth.style.width = effectLevelPin.style.left;
       };

       var onMouseUp = function (upEvt) {
           upEvt.preventDefault();

           document.removeEventListener('mousemove',onMouseMove);
           document.removeEventListener('mouseup',onMouseUp);

           var effectValue = parseInt(effectLevelPin.style.left) * 100 / 450;

           var effects = document.querySelectorAll('.effects__radio');

           for (var i = 0;i < effects.length;i++){
               if(effects[i].checked == true){
                   applyEffect(imgUploadPreview,i,effectValue);
               }
           }
       };
        document.addEventListener('mousemove',onMouseMove);
        document.addEventListener('mouseup',onMouseUp);

    });

    //обработка события с помощью делегирование
    document.querySelector('.img-upload__effects').addEventListener('click',function (evt) {
        if (evt.target.tagName == 'INPUT' || evt.target.tagName == 'LI'){
            effectLevelPin.style.left = 0;
            effectLevelDepth.style.width = 0;
            imgUploadPreview.style = "";
        }
    });


})();