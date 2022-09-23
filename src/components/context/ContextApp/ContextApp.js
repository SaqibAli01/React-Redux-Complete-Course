import React, { createContext } from 'react'
import ChildsA from './ChildsA'


const FirstName = createContext();
const lastName = createContext();

export default function ContextApp() {
  return (
    <div>

      <FirstName.Provider value={'Saqib'}>
        <lastName.Provider value={"Ali"}>

          <h1>Context API in React JS</h1>
          <ChildsA />

        </lastName.Provider>
      </FirstName.Provider>




    </div>
  )
}

export { FirstName,lastName };