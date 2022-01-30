const date = new Date(2019,0,3)

const weekday = {weekday:"short"}
const options = {
    day : "2-digit",
    month : "2-digit",
    year : "numeric"
}
const weekDay = date.toLocaleDateString("en-IN",weekday)
const formattedDate = date.toLocaleDateString("en-IN",options)
const result = `${weekDay}, ${formattedDate}`
console.log(result)