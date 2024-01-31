const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderContainer = document.querySelector('.review-list');
const prevBtn = document.querySelector('.review-prev-btn');
const nextBtn = document.querySelector('.review-next-btn');
const slideWidth = sliderContainer.firstElementChild.getBoundingClientRect().width;
const slideGap = parseInt(getComputedStyle(sliderContainer).gridColumnGap);

prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

let slideCounter = 0;
let totalSliderLength = sliderContainer.children.length * slideWidth + ((sliderContainer.children.length - 1) * slideGap)
console.log(totalSliderLength)


function onPrevBtnClick() {
    slideCounter -= slideWidth + slideGap; 
    if (slideCounter <= 0) {
        if (!prevBtn.classList.contains('disabled')) {
    prevBtn.classList.add('disabled')
    }
        }
        if(totalSliderLength - slideCounter > sliderContainer.getBoundingClientRect().width)
    {
                
        if (nextBtn.classList.contains('disabled')) {
            nextBtn.classList.remove('disabled')  
    }
    }
    sliderContainer.style.transform = `translateX(-${slideCounter}px)` 
}

function onNextBtnClick() {
    slideCounter += slideWidth + slideGap; 
           if (slideCounter > 0) {
        prevBtn.classList.remove('disabled')
           }
    if (totalSliderLength - slideCounter === sliderContainer.getBoundingClientRect().width) {
        nextBtn.classList.add('disabled')
    }
    sliderContainer.style.transform = `translateX(-${slideCounter}px)` 
    console.log(slideCounter)
}

