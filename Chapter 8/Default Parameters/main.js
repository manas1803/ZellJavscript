const calculateTaxes = (money,interest=0.3)=>{
    console.log(`The value is ${money*interest}`)
}

calculateTaxes(2000)

const createUser= (user)=>{
    const {firstName,lastName,email,hobbies,location="India"} = user
    console.log(`${firstName} ${lastName} ${email} ${hobbies} ${location} are the values`)
}
createUser({
    email:"manasmonupant@gmail.com",
    firstName:"Manas",
    lastName:"Pant",
    hobbies : "Playing chess and csgo"
})
