
const previousBtn = document.querySelector(".carousel__left")
const nextBtn = document.querySelector(".carousel__right")

const carousel = document.querySelector(".carousel")
const slides = Array.from(carousel.querySelectorAll(".carousel__slide"))

function updateSlider(){
    const carouselContent = document.querySelector(".carousel__content")
    const currentSlide = carouselContent.querySelector(".is-selected")
    if(currentSlide.previousElementSibling===null){
        previousBtn.classList.add("DN")
    }
    else if(currentSlide.nextElementSibling===null){
        nextBtn.classList.add("DN")
    }
    else{
        previousBtn.classList.remove("DN")
        nextBtn.classList.remove("DN")
    } 
}

updateSlider()
nextBtn.addEventListener('click',function(e){
    const carouselContent = document.querySelector(".carousel__content")
    const carouselDots = document.querySelector(".carousel__dots")

    const currentSlide = carouselContent.querySelector(".is-selected")
    const nextSlide = currentSlide.nextElementSibling

    const currentDot = carouselDots.querySelector(".is-button-selected")
    const nextDot = currentDot.nextElementSibling

    const destinationLeft = ((-1)* parseInt(getComputedStyle(nextSlide)["left"])) + parseInt(getComputedStyle(nextSlide)["inlineSize"])
    slides.forEach(e=>{
        e.style.left = '-' + destinationLeft  + 'px';
    })

    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')
    
    currentDot.classList.remove("is-button-selected")
    nextDot.classList.add("is-button-selected")

    updateSlider()
})
previousBtn.addEventListener('click',function(e){
    const carouselContent = document.querySelector(".carousel__content")
    const carouselDots = document.querySelector(".carousel__dots")

    const currentSlide = carouselContent.querySelector(".is-selected")
    const previousSlide = currentSlide.previousElementSibling
    
    const currentDot = carouselDots.querySelector(".is-button-selected")
    const previousDot = currentDot.previousElementSibling
    
    const destinationLeft = parseInt(getComputedStyle(previousSlide)["left"]) + parseInt(getComputedStyle(previousSlide)["inlineSize"])
    slides.forEach(e=>{
        e.style.left = destinationLeft  + 'px';
    })

    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')

    currentDot.classList.remove("is-button-selected")
    previousDot.classList.add("is-button-selected")
    updateSlider()
})
