const popOverTrigger = document.querySelector('.popover-trigger')
const popOver = document.querySelector('.popover')

const {left:popOverTriggerLeft,right:popOverTriggerRight,top:popOverTriggerTop} = popOverTrigger.getBoundingClientRect()
const {width:popOverWidth,height:popOverHeight} = popOver.getBoundingClientRect()
const space = 5

const leftPositionPopOver = `${((popOverTriggerLeft + popOverTriggerRight)/2) - (popOverWidth/2)}px`
const topPositionPopOver = `${popOverTriggerTop-popOverHeight-space}px`
// Position Popover
popOver.style.left = leftPositionPopOver
popOver.style.top = topPositionPopOver
popOver.setAttribute('hidden',true) 

popOverTrigger.addEventListener('click',(e)=>{
    if(popOver.hasAttribute('hidden'))
        popOver.removeAttribute('hidden')
    else
        popOver.setAttribute('hidden',true)
})

document.addEventListener('click',(e)=>{
    if(e.target.closest(".popover-trigger") || e.target.closest(".popover")) return
        popOver.setAttribute('hidden',true)
})
