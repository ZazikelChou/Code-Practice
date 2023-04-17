//script.jsの内容を模写しよう。
//コピペではなく、自分の手で真似して打つことに意味があるよ！
'use strict'
const slider = function(){
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;

    const maxSlide = slides.length;
    const createDots = function () {
        slides.forEach(function (_, i){
        dotContainer.insertAdjacentHTML('beforeend', 
        `<button class="dots__dot" data-slide="${i}"></button> ` ) ;
        });
    };
   
    const activateDot = function (slide) {
        document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));
    };

    const goToSlide = (slide) => {
        slides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    };

    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();
        activateDot(0);
    }
    init();

    btnRight.addEventListener('click',nextSlide);
    btnLeft.addEventListener('click',prevSlide);

    document.addEventListener('keydown',function(e){
        console.log(e);
        if (e.key === 'ArrowLeft') prevSlide();
        e,key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function(e){
        if(e.target.classList.contains('dots___dot')){
            const {slide} = e.target.dataset;
            console.log(slide);
            goToSlide(slide);
            activateDot(slide);
        }
    });
}
slider();