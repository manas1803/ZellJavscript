// SPREAD OPERATOR

const names = ["Bruce","Clark","Barry"]
const logNames = (first,second,third)=>{
    console.log(first)
    console.log(second)
    console.log(third)
}

logNames(...names)

const firstArray = [1,2,3,4,5]
const secondArray = [14,25,65,23]

const thirdArray = [...firstArray,...secondArray]
console.log(thirdArray)

// REST OPERATOR

const logNaming = (...names)=>{
    names.forEach(e=>console.log(e))
}

logNaming('Zell', 'Thomas', 'Jacin', 'Vincy', 'Jing', 'Soares', 'Gabrielle', 'Justin')


// OBJECT SPREAD
const obj1 = {
    firstName : "Manas",
    lastName : "Pant"
}
const obj2 = {
    location : "India",
    ...obj1
}
console.log(obj1)
console.log(obj2)


// OBJECT REST
const fruitBlender = {
    blendKiwi: true,
    blendMango: true,
    blendOrange: true,
    blendPapaya: true
}
const {blendKiwi,...otherprops} = fruitBlender
console.log(otherprops)