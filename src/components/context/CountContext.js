import React, { Children } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const  countContext  = createContext();


export function CountContextProvider(props) {
    const [count, setCount] =useState(50);
    return (
        <countContext.Provider value={{ count,setCount }} >

            {props.children}
        </countContext.Provider>
    )
}
//ye file hooks me useContext me used ki ha
