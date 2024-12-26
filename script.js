const burgerBtn = document.querySelector('.burger__btn')
const burger = document.querySelector('.header__nav')
const buttonNext = document.querySelector('.button-next')
const buttonPrev = document.querySelector('.button-prev')
const sliderContainer = document.querySelector('.slider__contaiener')


burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('header__nav-active')
})

burger.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains('navigation-header')){
        burger.classList.remove('header__nav-active')
    }
})

buttonPrev.addEventListener('click', () => {
    sliderContainer.scroll({
        left: sliderContainer.scrollLeft - 600,
        behavior:'smooth'
    })
});



buttonNext.addEventListener('click', () => {
    sliderContainer.scroll({
        left: sliderContainer.scrollLeft + 600,
        behavior:'smooth'
    })
});