var images = [
    '/images/map_page/general1.jpg',
    '/images/map_page/general2.jpg',
    '/images/map_page/general3.jpg',
    '/images/map_page/general4.jpg',
    '/images/map_page/general5.jpg',
    '/images/map_page/general6.jpg',
    '/images/map_page/general7.jpg',
];

// 随机选择图片链接
var randomIndex = Math.floor(Math.random() * images.length);
var randomImageUrl = images[randomIndex];

// 设置背景图片
document.body.style.backgroundImage = 'url("' + randomImageUrl + '")';