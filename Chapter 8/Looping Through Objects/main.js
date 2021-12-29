const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }

const keys = Object.keys(fruits)
console.log(keys)

const values = Object.values(fruits)
console.log(values)

const entries = Object.entries(fruits)
console.log(entries)

entries.forEach(e=>{
    const[fruit,count] = e;
    console.log(`The fruits is :- ${fruit} and its count is ${count}`)
})