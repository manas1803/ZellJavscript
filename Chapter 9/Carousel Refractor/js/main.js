const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')
const dotsContainer = carousel.querySelector('.carousel__dots')

const slides = [...carousel.querySelectorAll('.carousel__slide')]
const dots = [...carousel.querySelectorAll('.carousel__dot')]

/**
 * To position the slides in the carousel
 */
const setSlidePositions=()=>{
  const slideWidth = slides[0].getBoundingClientRect().width
  slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})
}

/**
 * Get the current slide that is selected
 * @returns {Number} Index of the current slide
 */
const getCurrentSlideIndex = ()=>{
  const currentSlide = contents.querySelector('.is-selected')
  return slides.findIndex(slide=>slide===currentSlide)
}
/**
 * Switch slides in carousel
 * @param {HTMLElement} currentSlide The current slide that we are seeing 
 * @param {HTMLElement} targetSlide The slide to which we want to move to
 */
const switchSlide = (currentSlideIndex,targetSlideIndex)=>{
  const currentSlide = slides[currentSlideIndex]
  const targetSlide = slides[targetSlideIndex]
  const destination = getComputedStyle(targetSlide).left

  contents.style.transform = `translateX(-${destination})`
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
}

/**
 * Highlight the dots according to the slide selected
 * @param {HTMLElment} currentDot The current dot in carousel that is highlighted 
 * @param {HTMLElement} targetDot The dot to which we want to switch to 
 */
const highlightDot = (currentDotIndex,targetDotIndex)=>{
  const currentDot = dots[currentDotIndex]
  const targetDot = dots[targetDotIndex]
  currentDot.classList.remove('is-selected')
  targetDot.classList.add('is-selected')
}

/**
 * To show and hide the left and right arrow in carousel
 * @param {HTMLElement} clickedDotIndex The dot's index that is being clicked
 */
const showHideArrowButtons = (targetSlideIndex)=>{
  if (targetSlideIndex === 0) {
    previousButton.setAttribute('hidden', true)
    nextButton.removeAttribute('hidden')
  } else if (targetSlideIndex === dots.length - 1) {
    previousButton.removeAttribute('hidden')
    nextButton.setAttribute('hidden', true)
  } else {
    previousButton.removeAttribute('hidden')
    nextButton.removeAttribute('hidden')
  }
}

setSlidePositions()

nextButton.addEventListener('click', event => {
  const currentSlideIndex = getCurrentSlideIndex()
  const nextSlideIndex = currentSlideIndex+1;
  
  switchSlide(currentSlideIndex,nextSlideIndex)
  showHideArrowButtons(nextSlideIndex)
  highlightDot(currentSlideIndex,nextSlideIndex)
})

previousButton.addEventListener('click', event => {
  const currentSlideIndex = getCurrentSlideIndex()
  const previousSlideIndex = currentSlideIndex-1

  switchSlide(currentSlideIndex,previousSlideIndex)
  showHideArrowButtons(previousSlideIndex)
  highlightDot(currentSlideIndex,previousSlideIndex)
})

dotsContainer.addEventListener('click', event => {
  const dot = event.target.closest('button')
  if (!dot) return
  const currentSlide = contents.querySelector(".is-selected")
  const currentSlideIndex = slides.findIndex(slide=>slide===currentSlide)
  const targetSlideIndex = dots.findIndex(d=>d===dot)

  switchSlide(currentSlideIndex,targetSlideIndex)
  highlightDot(currentSlideIndex,targetSlideIndex)
  showHideArrowButtons(targetSlideIndex)
})
