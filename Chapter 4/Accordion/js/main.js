const accordions = Array.from(document.querySelectorAll('.accordion'))

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion__header')

  accordionHeader.addEventListener('click', event => {
    accordion.classList.toggle('is-open')
  })
})
