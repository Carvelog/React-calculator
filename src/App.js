import './App.css';

import Container from './components/Container/Container';
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import ButtonContainer from './components/ButtonContainer/ButtonContainer'

const BUTTONS = ['C', '+/-', '/', '7', '8', '9', 'x', '4','5', '6', '-', '1', '2', '3', '+', '.', '0', '=']

function App() {

  const onDigit = () => {

  }

  const onDecimal = () => {

  }

  const onOperator = () => {
   
  }
  
  const onChangeSymb = () => {

  }

  const onClear = () => {

  }

  const onEqual = () => {
   
  }

  return (
    <div className="App">
      <Container>
        <Display result='4' formula='2+2'/>
        <ButtonContainer>
          {BUTTONS.map((btn, i) => { 
            return (
              <Button 
              key={i}
              onClick={
                btn === 'C'
                ? onClear
                : btn === "."
                ? onDecimal
                : btn === '+/-'
                ? onChangeSymb
                : btn === '/' || btn === 'x' || btn === '-' || btn === '+'
                ? onOperator
                : btn === '='
                ? onEqual
                : onDigit
              }
              value={btn}>{btn}
              </Button>
          )})}
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default App;

