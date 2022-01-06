const form = document.querySelector("form")
const inputText = document.querySelector("[type='text']")
const inputCheckboxs = [...document.querySelectorAll("[type='checkbox']")]
const inputRadioBtn = [...document.querySelectorAll("[type='radio']")]
const textArea = document.querySelector("textarea")

inputText.addEventListener("focusin",(e)=>{
    console.log("On focus in value is " + e.currentTarget.value)
})

inputText.addEventListener("focusout",(e)=>{
    console.log("On focus out value is " + e.currentTarget.value)
})

inputText.addEventListener("input",(e)=>{
    console.log(e.currentTarget.value)
})

textArea.addEventListener("input",(e)=>{
    console.log(`On input the value in text area is ${e.currentTarget.value}`)
})
textArea.addEventListener("focusin",(e)=>{
    console.log(`On focus in the value in text area is ${e.currentTarget.value}`)
})
textArea.addEventListener("focusout",(e)=>{
    console.log(`On focus out the value in text area is ${e.currentTarget.value}`)
})
const preSelectedCheckboxes = inputCheckboxs.filter(checkbox=>checkbox.checked)
console.log(preSelectedCheckboxes)
form.addEventListener("change",(e)=>{
    if(!e.target.closest(".checkbox")) return
    const selectedCheckboxes = inputCheckboxs.filter(checkbox=>checkbox.checked)
    console.log(selectedCheckboxes)
})

form.addEventListener("change",(e)=>{
    if(!e.target.closest(".radio")) return
    const selectedRadioButton = inputRadioBtn.filter(radio=>radio.checked)
    console.log(selectedRadioButton)

    const value = e.target.value
    console.log(value)
})