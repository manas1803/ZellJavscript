const element1 = document.querySelector(".ele1")
const element2 = document.querySelector(".ele2")
const element3 = document.querySelector(".ele3")
const element4 = document.querySelector(".ele4")

element1.setAttribute("data-color","red")
element1.setAttribute("data-id","2")
element1.setAttribute("data-name","John")
element1.setAttribute("data-movie","Skyfall")

const datasetForEle1 = element1.dataset


console.log(datasetForEle1);
console.log(element2);
console.log(element3);
console.log(element4);