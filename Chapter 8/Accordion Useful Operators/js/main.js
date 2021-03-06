const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', event => {
  const accordionHeader = event.target.closest('.accordion__header')
  if (!accordionHeader) return

  const accordion = accordionHeader.parentElement
  const accordionContent = accordionHeader.nextElementSibling
  const accordionInner = accordionContent.children[0]
  const height = accordion.classList.contains('is-open')
    ? 0
    : accordionInner.getBoundingClientRect().height

  accordion.classList.toggle('is-open')
  accordionContent.style.height = `${height}px`
})
