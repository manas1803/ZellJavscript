const list = document.querySelector(".list")
list.addEventListener('click',(e)=>{
    if(e.target.matches("li"))
        console.log(e.target)
})