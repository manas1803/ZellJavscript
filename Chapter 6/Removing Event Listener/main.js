const button = document.querySelector(".btn")
const callback = e=>{
    console.log(e)
    button.removeEventListener('click',callback)
}
button.addEventListener('click',callback)

let clicked=0;
const newBtn = document.querySelector(".fiveClick")
const newCallback = e=>{
    clicked++;
    console.log("Clicked!!")
    if(clicked>=5){
        newBtn.removeEventListener('click',newCallback)
    }
}

newBtn.addEventListener('click',newCallback)