//Questions
// 1. Add 20 days to 28 June 2019 with the timestamp method

const date = new Date(2019,5,28)
const timeStampDate = date.getTime()

const timeStampForOneDay = 1000*60*60*24
const newDate = new Date(timeStampDate + (timeStampForOneDay*20))
console.log(newDate)

// 2. Subtract 30 days from 28 June 2019 with the timestamp method

const newDate2 = new Date(timeStampDate - (timeStampForOneDay*30))
console.log(newDate2)

// 3. Add 20 days to 28 June 2019 by creating a new date with arguments

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const newDate3 = new Date(year,month,day+20)
console.log(newDate3)

// 4. Subtract 30 days from 28 June 2019 by creating a new date with arguments

const newDate4 = new Date(year,month,day-30)
console.log(newDate4)

// 5. Add 20 days to 28 June 2019 with setDate

const tempDate = new Date(date)
const tempDate2 = new Date(date)

const newDate5 = new Date(tempDate.setDate(tempDate.getDate()+20))
console.log(newDate5)

// 6. Subtract 30 days from 28 June 2019 with setDate

const newDate6 = new Date(tempDate2.setDate(tempDate2.getDate()-30))
console.log(newDate6)