import React,{useContext} from 'react'
import ChildsC from './ChildsC'

import { FirstName, lastName } from './ContextApp'


export default function ChildsB() {

  const  fName = useContext(FirstName);
  const  lName = useContext(lastName);

  return (


    <div>
     <h1>Method One used : usedContext</h1>
      <h2>My  First Name  <b> {fName}</b> </h2>
      <h2>My  Last Name  <b>{lName}</b> </h2>
      <h2>My  Name is <b>   {fName} {lName} </b></h2>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    <ChildsC/>
    </div>
  )
}
