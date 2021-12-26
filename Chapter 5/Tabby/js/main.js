const tabbyHeaders = Array.from(document.querySelectorAll(".tabs-header-heading"))
const tabbyContent = Array.from(document.querySelectorAll(".tabs-content-container"));
const tabby = document.querySelector(".tabby")
tabbyHeaders.forEach(e=>{
    e.addEventListener('click',function(event){
        const target = event.currentTarget
        const targetContent = tabby.querySelector("#" + target.getAttribute("data-theme"))
        tabbyHeaders.forEach(e=>e.classList.remove("is-selected"))
        tabbyContent.forEach(e=>e.classList.remove("is-selected"))
        target.classList.add("is-selected")
        targetContent.classList.add("is-selected")
    })
})