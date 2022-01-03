const calculatorKeys = document.querySelector(".calculator__keys")
const displayScreen = document.querySelector(".calculator__display")
const calculator = document.querySelector(".calculator")

const calculate = (firstValue,secondValue,operator)=>{
    firstValue=parseFloat(firstValue)
    secondValue=parseFloat(secondValue)
    if(operator==="plus") return firstValue+secondValue
    else if(operator==="times") return firstValue*secondValue
    else if(operator==="minus") return firstValue-secondValue
    else return firstValue/secondValue
}
calculatorKeys.addEventListener("click",(e)=>{
    if(e.target.matches("button")){
        const button = e.target
        const operators = [...calculatorKeys.querySelectorAll("button")].filter(e=>e.dataset.buttonType==="operator")
        const {buttonType,key:buttonValue}=e.target.dataset
        const displayValue = displayScreen.textContent
        const { previousButtonType } = calculator.dataset
        if (buttonType !== 'clear') {
            const clearButton = calculator.querySelector('[data-button-type=clear]')
            clearButton.textContent = 'CE'
        }

        // Clear key
        if(buttonType==='clear'){
            displayScreen.textContent='0'
            button.textContent="AC"
            if(previousButtonType==="clear"){
                delete calculator.dataset.firstValue
                delete calculator.dataset.operator
                delete calculator.dataset.modifierValue
                delete calculator.dataset.previousButtonType
            }
        }
        // Number keys
        else if(buttonType==='number'){
            if(displayValue!=='0')
                displayScreen.textContent = displayValue+buttonValue
            else
                displayScreen.textContent = buttonValue
            operators.forEach(e=>e.classList.remove("is-pressed"))
            if(previousButtonType==='operator'){
                displayScreen.textContent = buttonValue
            }
            if(previousButtonType==='equal'){
                resetCalculator()
                calculator.querySelector(`[data-key="clear"]`).textContent = "CE"
                displayScreen.textContent = buttonValue
            }

        }
        // Decimal key
        else if(buttonType==='decimal' && !(displayScreen.textContent.includes("."))){
            if(previousButtonType==='equal'){
                resetCalculator()
                calculator.querySelector(`[data-key="clear"]`).textContent = "CE"
                displayScreen.textContent = '0.'
            }
            else if(previousButtonType==='operator'){
                displayScreen.textContent = '0.'
            }
            else{
                displayScreen.textContent = displayScreen.textContent+'.'
            }
        }
        // Operator keys
        else if(buttonType==='operator'){
            const {firstValue,operator} = calculator.dataset
            const secondValue = displayValue
            if(firstValue && operator && previousButtonType!=="operator" && previousButtonType !== 'equal'){
                const result = calculate(firstValue,secondValue,operator)    
                displayScreen.textContent=result
                calculator.dataset.firstValue=result
            }
            else{
                displayScreen.textContent = displayValue * 1
                calculator.dataset.firstValue = displayValue
            }
            calculator.dataset.operator = buttonValue
        }
        // Equal key
        else if(buttonType==='equal'){
            const {firstValue,operator,modifierValue} = calculator.dataset
            const secondValue = (modifierValue)? modifierValue:displayValue
            if(firstValue && operator){
                const result = calculate(firstValue,secondValue,operator)

                displayScreen.textContent=result

                calculator.dataset.firstValue=result
                calculator.dataset.modifierValue=secondValue
                
            }
            else{
                displayScreen.textContent = displayValue * 1
            }
        }
        calculator.dataset.previousButtonType = buttonType
    }
})

// Testing part here

/**
 * Clicked key is initialized
 * @param {HTMLElements} key The key that is pressed 
 */
const pressKey = (key)=>{
    calculator.querySelector(`[data-key="${key}"]`).click()
}

/**
 * Looping through each key and selecting it
 * @param  {...HTMLElement} keys Array of Keys 
 */
const pressKeys = (...keys)=>{
    keys.forEach(k=>pressKey(k))
}

/**
 * Getting the display value from screen
 * @returns {String} The screen value
 */
const getDisplayValue = ()=>{
    return calculator.querySelector('.calculator__display').textContent
}

/**
 * Clicking on reset twice 
 */
const resetCalculator = () => {
    pressKeys('clear','clear')
    console.assert(getDisplayValue() === '0', 'Calculator cleared')
    console.assert(!calculator.dataset.firstValue, 'No first value')
    console.assert(!calculator.dataset.operator, 'No operator value')
}

/**
 * Running the test cases
 * @param {Object} test Contains the keys pressed, message and result 
 */
const runTest = (test)=>{
    pressKeys(...test.keys)
    console.assert(getDisplayValue()===test.result,test.message)
    resetCalculator()
}

/**
 * When the reset key is clicked once
 */
const testClearKey = ()=>{
    // before calculation
    pressKeys("5","clear")
    const clearKeyText = calculator.querySelector("[data-key='clear']").textContent
    console.assert(getDisplayValue()==="0","clear before")
    console.assert(clearKeyText==="AC","clear once,should show ac")
    resetCalculator()

    // after calculation
    pressKeys("5","times","4","equal","clear")
    const {firstValue,operator} = calculator.dataset

    console.assert(firstValue,"Clear Once Should have first Value")
    console.assert(operator,"clear once should have operator value")
    resetCalculator()
}


const tests = [
    {
        message : 'Number Key',
        keys : ['2'],
        result : '2'
    },
    {
        message : 'Number Number',
        keys : ['3','5'],
        result : '35'
    },
    {
        message: 'Number Decimal',
        keys: ['4', 'decimal'],
        result: '4.'
      },
      {
        message: 'Number Decimal Number',
        keys: ['4', 'decimal', '5'],
        result: '4.5'
      },
      {
          message : "Addition of Numbers",
          keys : ['5','plus','4','equal'],
          result : '9'
      },
      {
          message : "Subtraction of Numbers",
          keys : ['4','minus','5','equal'],
          result : '-1'
      },
      {
          message : "Multiplication of Numbers",
          keys : ['4','times','5','equal'],
          result : '20'
      },
      {
        message : "Multiplication of Numbers",
        keys : ['4','divide','4','equal'],
        result : '1'
      },
      {
          message:"Number after equals",
          keys : ["5","equal"],
          result : "5"
      },
      {
        message: 'Decimal key',
        keys: ['decimal'],
        result: '0.'
      },
      {
        message: 'Decimal Decimal key',
        keys: ['decimal','decimal'],
        result: '0.'
      },
      {
        message: 'Decimal Number Decimal',
        keys: ['2', 'decimal', '5', 'decimal', '5'],
        result: '2.55'
      },
      {
        message: 'Number Decimal',
        keys: ['2', 'decimal', 'equal'],
        result: '2'
      },
      {
        message: 'Equal',
        keys: ['equal'],
        result: '0'
      },
    {
        message: 'Equal Number',
        keys: ['equal', '3'],
        result: '3'
      },
      {
        message: 'Number Equal Number',
        keys: ['5', 'equal', '3'],
        result: '3'
      },
    {
        message: 'Number Equal Decimal',
        keys: ['5', 'equal', 'decimal'],
        result: '0.'
    },
    {
        message : "Key Decimal",
        keys : ['plus','decimal'],
        result : '0.'
    },
    {
        message : "Number Key Decimal",
        keys : ['5','plus',"decimal"],
        result : "0."
    },
    {
        message: 'Operator calculation',
        keys: ['9', 'minus', '5', 'minus'],
        result: '4'
    },
    {
        message: 'Number Operator Operator',
        keys: ['9', 'times', 'divide'],
        result: '9'
    },
      {
        message: 'Number Operator Equal Equal',
        keys: ['9', 'minus', 'equal', 'equal'],
        result: '-9'
      }, 
      {
        message: 'Number Operator Number Equal Equal',
        keys: ['8', 'minus', '5', 'equal', 'equal'],
        result: '-2'
      },
      {
        message: 'Operator follow-up calculation',
        keys: ['1', 'plus', '2', 'plus', '3', 'plus', '4', 'plus', '5', 'plus'],
        result: '15'
      },
      {
        message: 'Calculation + Operator',
        keys: ['1', 'plus', '1', 'equal', 'plus', '1', 'equal'],
        result: '3'
      }
]

tests.forEach(test=>runTest(test))
testClearKey()
