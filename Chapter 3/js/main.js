const siteContainerBtn = document.querySelector(".site-container-button")
const body = document.querySelector("body")
const callback = (e)=>{
    body.classList.toggle("offsite-is-open")
}


siteContainerBtn.addEventListener('click',callback)