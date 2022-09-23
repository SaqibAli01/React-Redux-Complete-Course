import React from 'react';
import { useReducer } from 'react';


// is me state or action 2 hoti ha

const initialState = 0;


const reducer = (state, action) => {

  // console.log("state", state);
  // console.log("action", action);
  
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state
  }
}



export function UseReducer() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>UseReducer</h1>
      <h2 className='center'>{state}</h2>
      <div className='center'>
      <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>INCREMENT</button>
      <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>DECREMENT</button>
      <button onClick={() => { dispatch({ type: "RESET" }) }}>RESET</button>
</div>

    </div>
  )
}
