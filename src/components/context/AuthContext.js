import React,{createContext, useState} from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

export const AuthContext= createContext();

export default function AuthContextProvider(prpo) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (

    <AuthContext.Provider value={ {isAuthenticated, setIsAuthenticated} }>
    {props.children}
    </AuthContext.Provider>

  
  )
}
