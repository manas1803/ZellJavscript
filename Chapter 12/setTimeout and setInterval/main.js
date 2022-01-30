// const callback = (...superheros)=>{
//     superheros.forEach(hero=>{
//         console.log(`${hero} arrives!`)
//     })
// }

// setTimeout(callback,1000,"Iron Man","Batman","Spiderman")
// console.log("Hello World")


// const id = setTimeout((...villans)=>{
//     villans.forEach(villain=>{
//         console.log(`${villain} is back`)
//     })
// },2000,"Joker","Deathstroke","Thanos")

// clearTimeout(id)
let count=0;
const intervalId = setInterval((...numbers)=>{
    console.log(++count)
},1000)

console.log(`${intervalId} is the interval id`)

setTimeout(()=>{
    clearInterval(intervalId)
},8000)