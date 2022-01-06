const generateUniqueString = (length)=>{
    return Math.random().toString(36).substring(2,2+length)
}

console.log(generateUniqueString(5))