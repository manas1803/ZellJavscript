const listContainer = document.querySelector(".humans")
listContainer.addEventListener('click',(e)=>{
    if(e.target.matches("li")){
        const removedElement = listContainer.removeChild(e.target)
        const lists = document.querySelectorAll("li")
        const firstHuman = lists[0]
        listContainer.insertBefore(removedElement,firstHuman)
    }
})
