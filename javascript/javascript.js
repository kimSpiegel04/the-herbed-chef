//*navbar
var $document=$(document),
    $element=$('.navbar'),
    navbarDefault='navbar-default';
    navbarTransparent='navbar-transparent';
    fadeInDown='fadeInDown';

$document.scroll(function(){
    if($document.scrollTop()>=100){
        //user scrolled more than 100px
        $element.addClass(navbarDefault);
        $element.removeClass(navbarTransparent);
        $element.addClass(fadeInDown);
    } else {
        $element.addClass(navbarTransparent);
        $element.removeClass(navbarDefault);
        $element.removeClass(fadeInDown);
    }
});

//*about photos
// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//     };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

// const sliderImages = document.querySelectorAll('.slide-in');

// function checkSlide() {
//     sliderImages.forEach(sliderImage => {
//         // halfway through the image
//         const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//         // bottom of the image
//         const imageBottom = sliderImage.offsetTop + sliderImage.height;
//         const isHalfShown = slideInAt > sliderImage.offsetTop;
//         const isNotScrolledPast = window.scrollY < imageBottom;
//         if (isHalfShown && isNotScrolledPast) {
//             sliderImage.classList.add('active');
//         } else {
//             sliderImage.classList.remove('active');
//         }
//     });
// }

// window.addEventListener('scroll', debounce(checkSlide));

//* what this
const pressed = [];
const secretCode = 'yumyum';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
});