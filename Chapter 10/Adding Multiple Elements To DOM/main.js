// Using Update inner html
const dev= ['Addy Osmani','Vitaly Friedman','Chris Coyier']

const button = document.querySelector("button")

// button.addEventListener('click',(e)=>{
//     const listContainer = document.querySelector("ol")
//     const string = dev.map(de=>`<li>${de}</li>`).join("")
//     listContainer.innerHTML = listContainer.innerHTML + string
// })

// Using document fragment

const fragment = document.createDocumentFragment()
dev.forEach(dev=>{
    const li = document.createElement("li")
    li.innerHTML = dev
    fragment.appendChild(li)
})

button.addEventListener('click',(e)=>{
    const listContainer = document.querySelector("ol")
    listContainer.appendChild(fragment)
})

