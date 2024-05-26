ymaps.ready(function () {
    var map1 = new ymaps.Map('map1', {
        center: [48.716049, 44.525939],
        zoom: 14,
        controls:[]

    }, {
        suppressMapOpenBlock: true

    });
        var placemark1 = new ymaps.Placemark([48.714070, 44.528339], {
        balloonContent: 'Обучающий центр ЮНИТ (центральный район)'
    });
    map1.geoObjects.add(placemark1);

    var map2 = new ymaps.Map('map2', {
        center: [48.805724, 44.606654],
        zoom: 14,
        controls:[]
    }, {
        suppressMapOpenBlock: true

    });
    var placemark2 = new ymaps.Placemark([48.805724, 44.606654], {
        balloonContent: 'Обучающий центр ЮНИТ (тракторозаводской район)'
    });
    map2.geoObjects.add(placemark2);

    var map3 = new ymaps.Map('map3', {
        center: [48.703418, 44.516026],
        zoom: 14,
        controls:[]

    }, {
        suppressMapOpenBlock: true

    });
    var placemark3 = new ymaps.Placemark([48.703418, 44.516026], {
        balloonContent: ''
    });
    map3.geoObjects.add(placemark3);
});

//controls[] - указать кнопки которые тебе нужны, если не указать их не будет... Верхних
//suppressMapOpenBlock: true -  отключение нижних кнопок