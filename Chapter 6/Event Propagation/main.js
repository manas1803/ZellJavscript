const grandparent = document.querySelector("#grandparent")
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

const grandparents = document.querySelector("#grandparents")
const parents = document.querySelector("#parents")
const childs = document.querySelector("#childs")


// Event Bubbling
grandparent.addEventListener('click',(e)=>{
    console.log("Grandparent clicked")
})

parent.addEventListener('click',(e)=>{
    console.log("Parent clicked")
})

child.addEventListener('click',(e)=>{
    console.log("Child clicked")
})

// Event Capturing
grandparents.addEventListener('click',(e)=>{
    console.log("Grandparent clicked")
},true)

parents.addEventListener('click',(e)=>{
    console.log("Parent clicked")
},true)

childs.addEventListener('click',(e)=>{
    console.log("Child clicked")
},true)