export const isNotNumber = (input) => {
  return input === '+' || input === '-' || input === 'x' || input === '/' || input === '+/-'
}

export const isNumber = (input) => {
  return !isNotNumber(input)
}

export const isOperator = (input) => {
  return input === '+' || input === '-' || input === 'x' || input === '/'
}

export const evaluate = (formula) => {
  return evaluateFormula(formulaFormatter(formula))
}

const getPriority = (input) => {
  if (input === '+' || input === '-') return 1
  else if (input === 'x' || input === '/') return 2
  return 0
}

const formulaFormatter = (formula) => {
  let result = [], stack = []

  formula.forEach(item => {
    if (isNumber(item)) {
      result.push(item)
    } else if (isOperator(item)) {
      while (stack.length > 0) {
        const peekedItem = stack[stack.length - 1]

        if (isOperator(peekedItem) && getPriority(peekedItem) >= getPriority(item)) {
          result.push(peekedItem)
          stack.pop()
        } else break
      }
      stack.push(item)

    } else {
      alert('Error: the format of the formula is incorrect')
    }
  })

  while (stack.length > 0) {
    result.push(stack.pop())
  }
  return result
}

const getResult = (num1, num2, op) => {
  switch (op) {
    case '+':
      return parseFloat(num2) + parseFloat(num1)
    case '-':
      return  parseFloat(num2) - parseFloat(num1)
    case 'x':
      return  parseFloat(num2) * parseFloat(num1)
    case '/':
      return  parseFloat(num2) / parseFloat(num1)
    default:
      alert(`Error: character ${op} is not recognized`)
  }
}

const evaluateFormula = (formula) => {
  let stack = []
  formula.forEach(item => {
    if (isNumber(item)) {
      stack.push(item)
    } else if (isOperator(item)) {
      const num1 = Number.parseFloat(stack.pop())
      const num2 = Number.parseFloat(stack.pop())

      const result = getResult(num1, num2, item)
      
      stack.push(result.toFixed(4))
    } else {
      alert('Error: there is an unexpected character in the formula')
    }
  })

  return Number.parseFloat(stack[0])
}