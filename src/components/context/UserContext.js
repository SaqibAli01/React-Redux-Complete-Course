import React from 'react'
import { createContext } from 'react'


export const UserContext = createContext();

export default function UserContextProvider(props) {
 const name = "Saqib Ali";
 const age = 25;
    return (
    <UserContext.Provider value={{name,age}}>
    {props.children}
    </UserContext.Provider>
  )
}

//ye file hooks me useContext me used ki ha
