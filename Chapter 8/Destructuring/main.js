const person = {
    firstName:"Manas",
    lastName:"Pant"
}
const {firstName,lastName} = person

const name = "Zell Liew"
const course = {name:"Learn Javascript"}

const {name:courseName}=course

const numbers = [1,2,3,4,5,6,7,8,9]
const[firstNumber,...secondNumber] = numbers;

console.log(firstNumber)
console.log(secondNumber)

console.log(courseName)
console.log(`${firstName} ${lastName}`)

const posts = [{
    id: 800,
    title: 'This is 💩'
  }, {
    id: 801,
    title: 'Pooing is a natural thing.'
  }, {
    id: 802,
    title: 'Poo jokes are getting irritating'
  }]

const[firstPost,secondPost] = posts

const {id:firstPostId,title:firstPostTitle,description="Nothing is better than leaving the description empty"} = firstPost
console.log(firstPostId)
console.log(firstPostTitle)
console.log(description)