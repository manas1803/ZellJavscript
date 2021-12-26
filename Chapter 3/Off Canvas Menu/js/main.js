const button = document.querySelector(".main-section__menu-btn")
button.addEventListener('click',function(e){
    const mainContent = document.querySelector(".main-content")
    mainContent.classList.toggle("aside-close")
})
