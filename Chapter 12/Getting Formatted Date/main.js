// Built in Formats for Date

const date = new Date()

// toString
console.log(date.toString())

// toDateString
console.log(date.toDateString())

// toLocaleString
console.log(date.toLocaleString())

// toLocaleDateString
console.log(date.toLocaleDateString())

// Methods to reterieve Date 


const utcday = date.getUTCDate()
const utcyear = date.getUTCFullYear()
const utcmonthIndex = date.getUTCMonth()
const utcweekIndex = date.getUTCDay()

console.log(date)
console.log(utcday)
console.log(utcyear)
console.log(utcmonthIndex)
console.log(utcweekIndex)


// Questions
const monthsRep = [
    {shortName:"Jan",longName:"January",numeric:"01"},
    {shortName:"Feb",longName:"Feburary",numeric:"02"},
    {shortName:"Mar",longName:"March",numeric:"03"},
    {shortName:"Apr",longName:"April",numeric:"04"},
    {shortName:"May",longName:"May",numeric:"05"},
    {shortName:"Jun",longName:"June",numeric:"06"},
    {shortName:"Jul",longName:"July",numeric:"07"},
    {shortName:"Aug",longName:"August",numeric:"08"},
    {shortName:"Sep",longName:"September",numeric:"09"},
    {shortName:"Oct",longName:"October",numeric:"10"},
    {shortName:"Nov",longName:"November",numeric:"11"},
    {shortName:"Dec",longName:"December",numeric:"12"},
]
const daysRep = [
    {shortName:"Sun",longName:"Sunday"},
    {shortName:"Mon",longName:"Monday"},
    {shortName:"Tues",longName:"Tuesday"},
    {shortName:"Wed",longName:"Wednesday"},
    {shortName:"Thur",longName:"Thursday"},
    {shortName:"Fri",longName:"Friday"},
    {shortName:"Sat",longName:"Saturday"},
]
const dateSuffix = [
    {1:"st"},
    {2:"nd"},
    {3:"rd"},
    {4:"th"},
    {5:"th"},
    {6:"th"},
    {7:"th"},
    {8:"th"},
    {9:"th"},
    {10:"th"},
    {11:"th"},
    {12:"th"},
    {13:"th"},
    {14:"th"},
    {15:"th"},
    {16:"th"},
    {17:"th"},
    {18:"th"},
    {19:"th"},
    {20:"th"},
    {21:"st"},
    {22:"nd"},
    {23:"rd"},
    {24:"th"},
    {25:"th"},
    {26:"th"},
    {27:"th"},
    {28:"th"},
    {29:"th"},
    {30:"th"},
    {31:"st"},
]
// 1. 23/01/2019

const day = (date.getDate()<10)? `0${date.getDate()}` : date.getDate()
const monthIndex = date.getMonth()
const month = monthsRep[monthIndex].numeric
const year = date.getFullYear()
console.log(`${day}/${month}/${year}`)

// 2. 01/23/2019

console.log(`${month}/${day}/${year}`)

// 3. 23 Jan, 2019

const monthShortName = monthsRep[monthIndex].shortName
console.log(`${day} ${monthShortName}, ${year}`)

// 4. 23 Jan, Wed
const weekIndex = date.getDay()
const dayName = daysRep[weekIndex].shortName

console.log(`${day} ${monthShortName}, ${dayName}`)

// Time Format

const hour = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const milliseconds = date.getMilliseconds()

console.log(`${hour}:${minutes}:${seconds}:${milliseconds}`)

const formattedTime = (hour>12)?`${hour}:${minutes}pm` : `${hour}:${minutes}am`

console.log(formattedTime)