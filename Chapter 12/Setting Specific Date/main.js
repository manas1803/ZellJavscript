// Passing Date as argument

const date = new Date(Date.UTC(1994,11,19,12))
console.log(date)

// Passing Date as Timestamp

const timestampNow = Date.now()
console.log(timestampNow)

const dateTimeStamp = new Date(1994,11,19)
console.log(dateTimeStamp.getTime())

// Questions
// 1. With argument approach
    //Set date to 2015-08-28 and time to 12:30pm Local Time
    //Set date to 2015-05-20 and time to 4pm UTC

const date1 = new Date(2015,7,28,12,30)
const date2 = new Date(Date.UTC(2015,5,20,10,30))

console.log(date1)
console.log(date2)

// 2. With Timestamp approach
    //Get timestamp for 2015-04-30T04:30:33.555Z
    //Set date to 1548449765339. What’s this date?

const date3 = new Date("2015-04-30T04:30:33.555Z")
const date4 = new Date(1548449765339)
const timeStampValue = date3.getTime()
console.log(timeStampValue)
console.log(date4)