viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "autoLoad": true,
  "showZoomCtrl":true,
  "showFullscreenCtrl": true,
  "firstScene": "scene-1",
  "sceneFadeDuration": 1000,
  "showControls": false,
  "scenes": {
    "scene-1": {
        "type": "equirectangular",
        "panorama": "scene-1.jpg",
        "pitch": -7,
        "yaw": -154,
        "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -155,
                    "type": "scene",
                    "text": "Переход на улицу Витебскую",
                    "sceneId": "scene-2"
                },
            ]
        },
    "scene-2": {
        "type": "equirectangular",
        "panorama": "scene-2.jpg",
        "pitch": -0,
        "yaw": -162,
        "hotSpots": [{
            "pitch": 3,
            "yaw": -163,
            "type": "scene",
            "text": "Переход на улицу Льнозаводскую",
            "sceneId": "scene-3"
            },{
            "pitch": -3,
            "yaw": 19,
            "type": "scene",
            "text": "Переход на улицу Витебскую",
            "sceneId": "scene-1"
            }]
        },
    "scene-3": {
        "type": "equirectangular",
        "panorama": "scene-3.jpg",
        "pitch": -18,
        "yaw": -159,
        "hotSpots": [
            {
            "pitch": 6,
            "yaw": 101,
            "type": "info",
            "text": "Бригитпольское лесничество",
            },{
            "pitch": 4,
            "yaw": 14,
            "type": "scene",
            "text": "Переход на улицу Витебскую",
            "sceneId": "scene-2"
            },{
            "pitch": 1,
            "yaw": 134,
            "type": "scene",
            "text": "Переход на паромную переправу",
            "sceneId": "scene-4"
            },{
            "pitch": -1,
            "yaw": -160,
            "type": "scene",
            "text": "Переход на памятник сожженным деревням",
            "sceneId": "scene-5"
            }]
        },
    "scene-4": {
        "type": "equirectangular",
        "panorama": "scene-4.jpg",
        "pitch": -18,
        "yaw": -159,
        "hotSpots": [{
            "pitch": -5,
            "yaw": -145,
            "type": "info",
            "text": "Паромная переправа",
            },{
            "pitch": -1,
            "yaw": -62,
            "type": "scene",
            "text": "Переход на улицу Льнозаводскую",
            "sceneId": "scene-3"
            }]
        },
    "scene-5": {
        "type": "equirectangular",
        "panorama": "scene-5.jpg",
        "pitch": -4,
        "yaw": -152,
        "hotSpots": [{
            "pitch": 1,
            "yaw": -87,
            "type": "info",
            "text": "Памятник сожженным деревням",
            },{
            "pitch": 0,
            "yaw": -91,
            "type": "scene",
            "text": "Переход на памятник сожженным деревням",
            "sceneId": "scene-6"
            },
            {
            "pitch": 2,
            "yaw": 18,
            "type": "scene",
            "text": "Переход на улицу Льнозаводскую",
            "sceneId": "scene-3"
            },{
            "pitch": 4,
            "yaw": -156,
            "type": "scene",
            "text": "Переход на мост",
            "sceneId": "scene-7"
            }]
        },
    "scene-6": {
        "type": "equirectangular",
        "panorama": "scene-6.jpg",
        "pitch": -9,
        "yaw": 16,
        "hotSpots": [{
            "pitch": -3,
            "yaw": -163,
            "type": "scene",
            "text": "Переход на улицу Льнозаводскую",
            "sceneId": "scene-5"
            }]
        },
    "scene-7": {
        "type": "equirectangular",
        "panorama": "scene-7.jpg",
        "pitch": -4,
        "yaw": -152,
        "hotSpots": [{
            "pitch": 2,
            "yaw": -158,
            "type": "scene",
            "text": "Переход на Мост",
            "sceneId": "scene-8"
            }]
        },
    "scene-8": {
        "type": "equirectangular",
"panorama": "scene-8.jpg",
        "pitch": -2,
        "yaw": 22,
        "hotSpots": [{
            "pitch": 4,
            "yaw": -153,
            "type": "scene",
            "text": "Переход на Мост",
            "sceneId": "scene-7"
            },
        {
            "pitch": 2,
            "yaw": 15,
            "type": "scene",
            "text": "Переход на Суражский сельский исполнительный комитет",
            "sceneId": "scene-9"
            }]
        },
    "scene-9": {
        "type": "equirectangular",
        "panorama": "scene-9.jpg",
        "pitch": -2,
        "yaw": 22,
        "hotSpots": [{
            "pitch": 4,
            "yaw": -153,
            "type": "scene",
            "text": "Переход на Мост",
            "sceneId": "scene-7"
            },
        {
            "pitch": 7,
            "yaw": 89,
            "type": "info",
            "text": "Суражский сельский исполнительный комитет",
            },
        {
            "pitch": 4,
            "yaw": 24,
            "type": "scene",
            "text": "Переход на Памятник воинам-освободителям",
            "sceneId": "scene-10"
            },]
        },
    "scene-10": {
        "type": "equirectangular",
        "panorama": "scene-10.jpg",
        "pitch": -2,
        "yaw": 22,
        "hotSpots": [{
            "pitch": -1,
            "yaw": 129,
            "type": "scene",
            "text": "Переход на Памятник воинам-освободителям",
            "sceneId": "scene-11"
            },
        {
            "pitch": 4,
            "yaw": 171,
            "type": "info",
            "text": "Суражский лесхоз",

            },
        {
            "pitch": 3,
            "yaw": 12,
            "type": "scene",
            "text": "Переход на МЧС",
            "sceneId": "scene-12"

            }]
        },
    "scene-11": {
        "type": "equirectangular",
        "panorama": "scene-11.jpg",
        "pitch": -6,
        "yaw": -155,
        "hotSpots": [{
            "pitch": -1,
            "yaw": 129,
            "type": "scene",
            "text": "Переход на Памятник воинам-освободителям",
            "sceneId": "scene-11"
            },
        {
            "pitch": 0,
            "yaw": 24,
            "type": "scene",
            "text": "Переход на улицу Советскую",
            "sceneId": "scene-10"
            }]
        },
    "scene-12": {
        "type": "equirectangular",
        "panorama": "scene-12.jpg",
        "pitch": -1,
        "yaw": 123,
        "hotSpots": [{
            "pitch": 0,
            "yaw": 123,
            "type": "scene",
            "text": "Переход на мост",
            "sceneId": "scene-13"
            },]
        },
    "scene-13": {
        "type": "equirectangular",
        "panorama": "scene-13.jpg",
        "pitch": 1,
        "yaw": -19,
        "hotSpots": [{
            "pitch": 3,
            "yaw": -18,
            "type": "scene",
            "text": "Переход на МЧС",
            "sceneId": "scene-12"
            },
        {
            "pitch": 1,
            "yaw": 21,
            "type": "scene",
            "text": "Переход на памятник",
            "sceneId": "scene-14"
            },
        {
            "pitch": 1,
            "yaw": -27,
            "type": "scene",
            "text": "Переход на Школу",
            "sceneId": "scene-15"
            }]
        },
    "scene-14": {
        "type": "equirectangular",
        "panorama": "scene-14.jpg",
        "pitch": 4,
        "yaw": -107,
        "hotSpots": [{
            "pitch": 3,
            "yaw": 11,
            "type": "scene",
            "text": "Переход на мост",
            "sceneId": "scene-13"
            },
        ]
        },
    "scene-15": {
        "type": "equirectangular",
        "panorama": "scene-15.jpg",
        "pitch": 6,
        "yaw": 158,
        "hotSpots": [{
            "pitch": 6,
            "yaw": -174,
            "type": "info",
            "text": "Суражская средняя школа",
            },{
            "pitch": 3,
            "yaw": 95,
            "type": "scene",
"text": "Переход на мост",
            "sceneId": "scene-13"
            },{
            "pitch": 4,
            "yaw": 142,
            "type": "scene",
            "text": "Переход на памятник детям Шмырёва",
            "sceneId": "scene-16"
            }
        ]
        },
    "scene-16": {
        "type": "equirectangular",
        "panorama": "scene-16.jpg",
        "pitch": 12,
        "yaw": -156,
        "hotSpots": [{
            "pitch": -2,
            "yaw": 72,
            "type": "scene",
            "text": "Переход на мост",
            "sceneId": "scene-13"
            },
        ]
        },
    },
});

const container = document.getElementById('scrollContainer');
const btnLeft = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');
const elements = document.querySelectorAll('#scene-1, #scene-2, #scene-3, #scene-4, #scene-5,#scene-6, #scene-7, #scene-8, #scene-9, #scene-10, #scene-12,#scene-14,#scene-15,#scene-16');
const scrollAmount = 200;

elements.forEach(element => {
    element.addEventListener('click', () => {
        viewer.loadScene(element.id);
    });
});

btnLeft.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
btnRight.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});