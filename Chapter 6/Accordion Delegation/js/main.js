const accordions = Array.from(document.querySelectorAll('.accordion'))
const accordionContainer = document.querySelector(".accordion-container")
accordionContainer.addEventListener('click',(e)=>{
  const accordionHeader = e.target.closest(".accordion__header")
  if(accordionHeader){
    const accordion = accordionHeader.parentElement
    accordion.classList.add("is-open")
  }
})