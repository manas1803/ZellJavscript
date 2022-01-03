const calculator = document.querySelector(".calculator")
const calculatorKeys = calculator.querySelector(".calculator__keys")

calculatorKeys.addEventListener('click', (e) => {
  if (e.target.matches("button")) {
    const operators = [...calculatorKeys.children].filter(e => e.dataset.buttonType === "operator")
    const button = e.target
    const { key: buttonValue, buttonType } = button.dataset
    const { previousButtonType } = calculator.dataset
    const displayScreen = calculator.querySelector(".calculator__display")
    const result = displayScreen.textContent
    const acButton = calculator.querySelector("[data-button-type='clear']")
    operators.forEach(operator => operator.classList.remove("is-pressed"))

    if (buttonType !== "clear") {
      acButton.textContent = "CE"
    }
    if (buttonType === "number") {
      if (result !== '0')
        displayScreen.textContent = result + buttonValue
      else
        displayScreen.textContent = buttonValue
      operators.forEach(e => e.classList.remove("is-pressed"))
      if (previousButtonType === 'operator') {
        displayScreen.textContent = buttonValue
      }
      if (previousButtonType === 'equal') {
        delete calculator.dataset.firstValue
        delete calculator.dataset.operator
        delete calculator.dataset.previousButtonType
        delete calculator.dataset.modifierValue
        calculator.querySelector(`[data-key="clear"]`).textContent = "CE"
        displayScreen.textContent = buttonValue
      }
    }
    else if (buttonType === "operator") {
      const firstValue = parseFloat(calculator.dataset.firstValue)
      const operator = calculator.dataset.operator
      const secondValue = parseFloat(result)
      if (typeof firstValue==="number" && operator && previousButtonType!=="operator" &&  previousButtonType !== 'equal') {
        let newResult
        if (operator === "plus") newResult = firstValue + secondValue
        else if (operator === "minus") newResult = firstValue - secondValue
        else if (operator === "times") newResult = firstValue * secondValue
        else newResult = firstValue / secondValue
        displayScreen.textContent = newResult
        calculator.dataset.firstValue = newResult
      }
      if (previousButtonType === "decimal"){
        displayScreen.textContent = parseFloat(displayScreen.textContent) * 1
        calculator.dataset.firstValue = result
      }
      calculator.dataset.firstValue = result
      calculator.dataset.operator = buttonValue
    }
    else if (buttonType === "equal") {
      const firstValue = parseFloat(calculator.dataset.firstValue)
      const operator = calculator.dataset.operator
      const modifierValue = parseFloat(calculator.dataset.modifierValue)
      const secondValue = modifierValue || parseFloat(result)
      if (typeof firstValue==="number" && operator) {
        let newResult
        if (operator === "plus") newResult = firstValue + secondValue
        else if (operator === "minus") newResult = firstValue - secondValue
        else if (operator === "times") newResult = firstValue * secondValue
        else newResult = firstValue / secondValue
        displayScreen.textContent = newResult
        calculator.dataset.firstValue=newResult
        calculator.dataset.modifierValue = secondValue
      }
      if (previousButtonType === "decimal")
        displayScreen.textContent = parseFloat(displayScreen.textContent) * 1
    }
    else if (buttonType === "decimal") {
      if (!result.includes('.')) {
        displayScreen.textContent = result + '.'
      }
  
      if (previousButtonType === 'equal') {
        delete calculator.dataset.firstValue
        delete calculator.dataset.operator
        delete calculator.dataset.previousButtonType
        delete calculator.dataset.modifierValue
        display.textContent = '0.'
      }
      if (previousButtonType === 'operator') {
        display.textContent = '0.'
      }
    }
    else if (buttonType === "clear") {
      if (previousButtonType === "clear") {
        delete calculator.dataset.firstValue
        delete calculator.dataset.operator
        delete calculator.dataset.previousButtonType
        delete calculator.dataset.modifierValue
      }
      displayScreen.textContent = "0"
      acButton.textContent = "AC"
    }
    calculator.dataset.previousButtonType = buttonType
  }
})