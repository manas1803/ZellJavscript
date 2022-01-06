/**
 * To create a unique string
 * @param {Number} length The length of the string wanted to generate 
 * @returns {String} unique string of given length
 */
const generateUniqueString = (length)=>{
  return Math.random().toString(36).substring(2,2+length)
}

/**
 * To create the popover dynamically
 * @param {HTMLElement} popOverTrigger The trigger button of popover
 * @returns {HtmlElement} created popover
 */
const createPopOver = (popOverTrigger)=>{
    const popOver = document.createElement("div")
    const uniqueId = generateUniqueString(5)
    popOver.id = uniqueId
    popOverTrigger.dataset.target = uniqueId
    popOver.classList.add("popover")
    popOver.dataset.position = popOverTrigger.dataset.popoverPosition
    
    const p = document.createElement("p")
    p.textContent = popOverTrigger.dataset.content
    popOver.appendChild(p)
    document.body.appendChild(popOver)
    return popOver
}

/**
 * Returns the popover
 * @param {HTMLElement} popOverTrigger The trigger button of popover 
 * @returns {HtmlElement} the popover
 */
const getPopover = popoverTrigger => {
  return document.querySelector(`#${popoverTrigger.dataset.target}`)
}

/**
 * Calculate the position of the popover
 * @param {HTMLElement} popOverTrigger The trigger for popup
 * @param {HTMLElement} popOver The popup element
 * @returns {Object} Object of numbers containing left and top value
 */

const calculatePosition = (popOverTrigger, popOver) => {
  const { left: popOverTriggerLeft, top: popOverTriggerTop, right: popOverTriggerRight, bottom: popOverTriggerBottom} = popOverTrigger.getBoundingClientRect()
  const { width: popOverWidth, height: popOverHeight } = popOver.getBoundingClientRect()
  const { position } = popOver.dataset
  const space = 10
  if (position === "top") return {
    top: popOverTriggerTop - popOverHeight - space,
    left: (popOverTriggerLeft + popOverTriggerRight) / 2 - popOverWidth / 2
  }
  else if (position === "left") return {
    top: (popOverTriggerTop + popOverTriggerBottom) / 2 - popOverHeight / 2,
    left: popOverTriggerLeft - popOverWidth - space
  }
  else if (position === "right") return {
    top: (popOverTriggerTop + popOverTriggerBottom) / 2 - popOverHeight / 2,
    left: popOverTriggerRight + space
  }
  else if (position === "bottom") return {
    top: popOverTriggerBottom + space,
    left: (popOverTriggerLeft + popOverTriggerRight) / 2 - popOverWidth / 2
  }
}

const popOverTriggers = [...document.querySelectorAll(".popover-trigger")]

popOverTriggers.forEach((popOverTrigger) => {
  const popOver = getPopover(popOverTrigger) || createPopOver(popOverTrigger)
  const leftPosition = `${calculatePosition(popOverTrigger, popOver).left}px`
  const topPosition = `${calculatePosition(popOverTrigger, popOver).top}px`
  popOver.style.left = leftPosition
  popOver.style.top = topPosition
  popOver.setAttribute("hidden",true)
})

document.addEventListener('click',(event)=>{
  const popOverTrigger = event.target.closest('.popover-trigger')
  if (!popOverTrigger) return
  const popOver = getPopover(popOverTrigger)
  if(popOver.hasAttribute("hidden")){
    popOver.removeAttribute("hidden")
  }
  else{
    popOver.setAttribute("hidden",true)
  }
})

// Hides popover user clicks something other than trigger or popover
document.addEventListener('click', event => {
  if (!event.target.closest('.popover') && !event.target.closest('.popover-trigger')) {
    const popOvers = [...document.querySelectorAll('.popover')]
    popOvers.forEach(popOver => popOver.setAttribute('hidden', true))
  }
})
