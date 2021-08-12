let nav = document.querySelector('nav');
let navBtn = document.querySelector('nav .btn');
let logoForWhiteBackground = document.querySelector('nav .img_2');
let logoForBlackBackground = document.querySelector('nav .img_1');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        logoForWhiteBackground.style.height = '80px';
        logoForBlackBackground.style.height = '80px';
        logoForWhiteBackground.style.display = 'inline-block'
        logoForBlackBackground.style.display = 'none'
        nav.style.backgroundColor = "#151515"
        navBtn.style.display = 'inline-block'
    } else {
        logoForWhiteBackground.style.height = '135px';
        logoForBlackBackground.style.height = '135px';
        logoForWhiteBackground.style.display = 'none'
        logoForBlackBackground.style.display = 'inline-block'
        nav.style.backgroundColor = '#FBFBF2'
        navBtn.style.display = 'none'
    }
}
