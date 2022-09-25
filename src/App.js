import './App.css'

import Container from './components/Container/Container'
import Display from './components/Display/Display'
import Button from './components/Button/Button'
import ButtonContainer from './components/ButtonContainer/ButtonContainer'
import { useState } from 'react'

import * as CalculatorHelper from './helper/helper'

const BUTTONS = ['C', '+/-', '/', '7', '8', '9', 'x', '4','5', '6', '-', '1', '2', '3', '+', '.', '0', '=']

function App() {

  const [formula, setFormula] = useState([])
  const [input, setInput] = useState(0)
  const [afterCalculation, setAfterCalculation] = useState(false)
  const [result, setResult] = useState(0)

  const onDigit = (e) => {
    const digit = e.target.value

    if(input.toString().length < 16 ){
      if (afterCalculation) {
        setInput(digit)
        setAfterCalculation(false)
      } else if (input === 0) {
        setInput(digit)
      } else if (CalculatorHelper.isNotNumber(input)) {
        setInput(digit)
        setFormula(formula.concat(input))
      } else {
        setInput(input.concat(digit))
      }
    }
  }

  const onDecimal = (e) => {
    const decimal = e.target.value

    if (afterCalculation) {
      setInput(`0${decimal}`)
      setAfterCalculation(false)
    } else if (CalculatorHelper.isNotNumber(input)) {
      setInput(`0${decimal}`)
      setFormula(formula.concat(input))
    } else if (!input.includes(decimal)) {
      setInput(input.concat(decimal))
    }
  }

  const onOperator = (e) => {
    const operator = e.target.value

    if (CalculatorHelper.isOperator(input)) {
      setInput(operator)
      setAfterCalculation(false)
    } else {
      setFormula(formula.concat(input))
      setInput(operator)
      setAfterCalculation(false)
    }
  }
  
  const onChangeSymb = () => {
    setInput(input*-1)
  }

  const onClear = () => {
    setFormula([])
    setInput(0)
    setAfterCalculation(false)
    setResult(0)
  }

  const onEqual = () => {
    const finalFormula = formula.concat(input)
    const result = CalculatorHelper.evaluate(finalFormula)

    if (!Number.isNaN(result)) {
      setResult({
        formula: finalFormula,
        result: result
      })

      setInput(result)
      setFormula([])
      setAfterCalculation(true)
    }
  }

  return (
    <div className="App">
      <Container>
        <Display result={result} formula={formula + input}/>
        <ButtonContainer>
          {BUTTONS.map((btn, i) => { 
            return (
              <Button 
              key={i}
              onClick={
                btn === "C"
                  ? onClear
                  : btn === "+/-"
                  ? onChangeSymb
                  : btn === "="
                  ? onEqual
                  : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                  ? onOperator
                  : btn === "."
                  ? onDecimal
                  : onDigit
              }
              className={btn === '=' ? 'equal' : btn === 'C' ? 'clear' : ''}
              value={btn}>{btn}
              </Button>
          )})}
        </ButtonContainer>
      </Container>
    </div>
  )
}

export default App

