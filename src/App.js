import { useReducer } from 'react'
import DigitButton from './DigitButton'
import OperationButton from "./DigitButton"
import "./index.css"

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR:'clear',
  CHOOSE_OPERATION: 'choose-operation',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer(state, { type, playload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (playload.digit === "0" && 
      state.currentOperand === "0" ) {
        return state
      }
      if (playload.digit === "." && 
      state.currentNumber.includes('.')) {
        return state
      }

      return {
        ...state,
        currentOperand: '${state.currentOperand || ""}${playload.digit}',
      }
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand == null && 
          state.previousOperand == null) {
          return state
        }

        if (state.currentOperand == null && 
          state.previousOperand != null) {
          
          }
      case ACTIONS.CLEAR:
        return {}
      
  }
}
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
  {}
)

  dispatch({ type: ACTIONS.ADD_DIGIT, playload: { digit: '1' } })
  return (
    <body>
      <div className="calculator-grid">
        <div className="output">
          <div className="previus-operand">{previousOperand} {operation}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button className="span-two" onClick={ () => dispatch({ type: ACTIONS.CLICK})}>AC</button>
        <button>DEL</button>
        <OperationDigitButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationDigitButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationDigitButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationDigitButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two">=</button>
    </div>
  </body>
  )
}

export default App;
// npm start