const element = document.querySelector(".mydiv")

const rect = element.getClientRects();
const style = getComputedStyle(element)

console.log(rect)
console.log(style["left"])