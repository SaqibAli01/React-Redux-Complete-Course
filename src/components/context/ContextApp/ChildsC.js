import React from 'react'
import { FirstName, lastName } from './ContextApp'

export default function ChildsC() {
  return (
    <div>
      {/* <h3></h3>ChildsC */}
      <FirstName.Consumer>
        {
          (fName) => {
            return (
              <lastName.Consumer>{
                (lName) => {
                  return <div>
                  <h1>Method Two Used: Consumer</h1>
                  <p>My  First Name  <b> {fName}</b> </p>
                  <p>My  Last Name  <b>{lName}</b> </p>
                  <p>My  Name is <b>   {fName} {lName} </b></p>
                  </div>
                }
              }</lastName.Consumer>

            );
            {/* <p>My Name is {fName}</p> */ }
          }
        }
      </FirstName.Consumer>


    </div>
  )
}
