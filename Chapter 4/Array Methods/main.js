// indexOf vs findIndex
const arr1 = ["Apple","Pomegranate","Banana","Orange","Guava"]
const indexOfOrange = arr1.indexOf("Orange")
const findIndexOrange = arr1.findIndex(e=>e==="Orange")

console.log(indexOfOrange)
console.log(findIndexOrange)


const arr2 = [
    {id:1,fruit:"Apple",price:50},
    {id:2,fruit:"Pomegranate",price:150},
    {id:3,fruit:"Banana",price:20},
    {id:4,fruit:"Orange",price:40},
    {id:5,fruit:"Guava",price:60}
]

const index2OfOrange = "Not Possible"
const find2IndexOfOrange = arr2.findIndex(e=>{
    return e.fruit==="Orange"
})

console.log(index2OfOrange)
console.log(find2IndexOfOrange)

