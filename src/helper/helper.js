export function isNotNumber(input) {
  return input === '+' || input === '-' || input === 'x' || input === '/' || input === '+/-';
}

export function isNumber(input) {
  return !isNotNumber(input);
}

export function isOperator(input) {
  return input === '+' || input === '-' || input === 'x' || input === '/' ;
}