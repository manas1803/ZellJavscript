const clickBtn = document.querySelector(".jsModalButton")
clickBtn.addEventListener('click',(e)=>{
    document.body.classList.add('modal-is-open')
})

const closeBtn = document.querySelector(".jsModalClose")
closeBtn.addEventListener('click',(e)=>{
    document.body.classList.remove('modal-is-open')
})
