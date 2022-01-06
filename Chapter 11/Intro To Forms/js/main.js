const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    console.log("Do changes here")

    form.submit()
})