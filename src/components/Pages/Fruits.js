import React from 'react'
export function Fruits(props) {
const {fruits} =props //ye destructure kia ha

let num1 = [1,2,3];
let num2 = [4,5,6];
let numCombined = [...num1, ...num2, ...fruits]; ///spread kr k combine kia ha
    return (
        <div>
           <h1> Fruits </h1>
           {/* //terniery operator */}
           {fruits.length > 0 ? "Fruits is available" : "Fruits is not available"}
            {
                fruits.map((fruit, index) => {
                    return <p key={index}>{fruit} Price 150 PKR</p>
                })
            }
            <p>spread kr k combined kia ha ={numCombined}</p>
        </div>
    )
}
