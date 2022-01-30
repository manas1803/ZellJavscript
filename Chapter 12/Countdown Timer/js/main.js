const toMilliseconds = (unit) => {
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    if (unit === 'seconds') return seconds
    if (unit === 'minutes') return minutes
    if (unit === 'hours') return hours
    if (unit === 'days') return days
}
const toTimeStamp = (date) => {
    return date.getTime()
}
const getCountDown = (endDate, startDate) => {
    const startTimeStamp = toTimeStamp(startDate)
    const endTimeStamp = toTimeStamp(endDate)
    const difference = endTimeStamp - startTimeStamp
    const days = Math.floor(difference / toMilliseconds('days'))
    const hours = Math.floor(difference % toMilliseconds('days') / toMilliseconds('hours'))
    const minutes = Math.floor(difference % toMilliseconds('hours') / toMilliseconds('minutes'))
    const seconds = Math.floor(difference % toMilliseconds('minutes') / toMilliseconds('seconds'))
    return {
        days,
        hours,
        minutes,
        seconds
    }
}

const updateTimer = (endDate)=>{
    const now = new Date()
    const values = getCountDown(endDate, now)
    const boxes = [...document.querySelectorAll(".timer__box")]
    boxes.forEach(box => {
        const unit = box.dataset.unit
        const value = values[unit]

        box.firstElementChild.textContent = value
    })
}

const setTargetTimer = (endDate)=>{
    const countdownTimer = document.querySelector(".countdown")
    const targetTimer = countdownTimer.querySelector(".countdown__target")
    const dateTime = endDate.toLocaleString("en-IN",{year:"numeric"}) + '-' + endDate.toLocaleString("en-IN",{month:"2-digit"}) + '-' + endDate.toLocaleString("en-IN",{day:"2-digit"})
    const targetDate = endDate.toLocaleString("en-IN",
    {
        day:"numeric",
        month:"long",
        year:"numeric"
    })
    targetTimer.innerHTML = `Time to <time datetime="${dateTime}">${targetDate}</time>`
}

const now = new Date()
const endDate = new Date(now.getFullYear(),now.getMonth()+1,1)
setTargetTimer(endDate)
updateTimer(endDate)
setInterval(updateTimer,1000,endDate)