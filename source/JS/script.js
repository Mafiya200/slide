'use strict';


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};




/* $(`.slider`).on(`beforeChange`,function(even,slick,currentSlide,nextSlide){
}); */
//$(`.slider`).on(`afterChange`,function(even,slick,currentSlide /* нельзя получить следующий слайд nextSlide*/){
//    console.log(currentSlide);

//});


/* 
$(`.slider`).slick(`setPosition`); /// метод перезагрузки слайдера, если возникли проблемы с его размера и подсчётами
$(`.slider`).slick(`goTo`,3); /// метод управление слайдером из других событий, переход к слайду по номеру

$(`.slider`).slick(`slickPrev`);/// метод управления шаг вперёд(стрелка влево)
$(`.slider`).slick(`slickNext`);/// метод управления шаг назад(стрелка вправо)

$(`.slider`).slick(`slickPlay`);/// метод управления запускает проигрывание слайдера
$(`.slider`).slick(`slickPause`);/// метод управления ставит на паузу проигрывание слайдера

$(`.slider`).slick(`slickAdd`,`<div></div>`); /// метод добавления в слайдер новых элементов
$(`.slider`).slick(`slickRemove`,0); /// метод удаления в слайдере элементов(удаление происходит по индексу(0-первый))
 */
/* 

var filter = true;
if(filter===false){
    $(`.slider`).slick(`slickFilter`,`.filter`);///имя класса которое мы хотим оставить, после фильтрации
    filter=true;
}
else{
    $(`.slider`).slick(`slickUnfilter`);

    filter = false;
}

var s=$(`.slider`).slick(`slickGetOption`, 'slidesToShow');/// метод получения параметров которые действую на обьект
$(`.slider`).slick(`slickSetOption`, 'slidesToShow',3);/// метод с помощью которого можно менять параметры, действую на обьект
console.log(s);

$(`.slider`).slick(`unslick`);/// полностью отключает слайдер буд-то его и не включали 
 */



$(`.slider`).slick({
    slidesToShow:5,
    dots:true,
    infinite:true,
    waitForAnimate:false,
    adaptiveHeight:true,
    centerMode:true ,
    speed:1000,
    autoplay:false,      
    responsive:[
        {
        breakpoint:769,
        settings:{
            slidesToShow:2,
            centerMode:false ,

        }
    },
    , {
        breakpoint:625,
        settings:{
            slidesToShow:1,
            variableWidth:true,

        }
    },{
        breakpoint:1500,
        settings:{
            slidesToShow:3,
            variableWidth:true,

        }
    }],
});


