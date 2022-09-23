import React, { useState } from 'react'
import { UseState } from '../Hooks/UseState';
import { add, sub, mul, div } from './Calu';
//ye file data folder sy ly kr aia hon me
import Slomt from '../data/slotGameData';
import {Chtimes} from '../data/timeChallenge'





export function Challange() {

    let [goodMorning, setgoodMorning] = useState("");
    const time = new Date().toLocaleTimeString();
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();


    let c = h + ":" + m;



    let name = "";

    if (c >= "08:10" && c <= "12:00") {
        name = "Good Morning"
    }
    else if (c >= "12:00" && c <= "18:00") {
        name = "Good Evening"
    }
    else if (c >= "18:00" && c <= "24:00") {
        name = "Good Night"
    }
    else {
        name = "Good Night"
    }
//is coding ko data k folder me rhak dia ha ab me ny
    // game ki coding 
//     const Slomt = (props)=>{
//     // let x = ' 😄';
//     // let y = ' 😄';
//     // let z = ' 😍';
//     let x = props.x;
//     let y = props.y;
//     let z = props.z;
//     if (x === y && x === z) {
//         return (<>
//             <div className='slot_inner'>
//                 <h2>{x} {y} {z}</h2>
//                 <span>This is Matching.</span>
//                 <hr />
//             </div>
//         </>)
        
//     }
//     else{
//         return (<>
//             <div className='slot_inner'>
//                 <h2>{x} {y} {z}</h2>
//                 <span>This is Not Matching.</span>
//                 <hr/>
//             </div>
//         </>)
//     }
// }
//game end

//time coding

    return (
        <>
            <h1>Challenge # 3</h1>

            <p>{time}</p> <br />
            <div className='center'>
                <span>Good Morning Time Set <b>08:30:00 AM to 12 PM</b> </span>
                <span>Good Evening Time Set <b>12:00:00 AM to 06 PM</b> </span>
                <span>Good Nighr Time Set <b>06:30:00 AM  to 12 AM</b> </span>
            </div>
            <div className='center'>
                <h2>Hello Saqib,<b>{name}</b> </h2>
            </div>
            <hr />
            <hr />

            <h1>Challenge # 3  Simple Calculator</h1>
            <ul className="order_list">
                <li>The Sum of two no is : {add(45, 5)}</li>
                <li>The Sub of two no is : {sub(45, 5)}</li>
                <li>The Mul of two no is : {mul(45, 5)}</li>
                <li>The Div of two no is : {div(45, 5)}</li>
            </ul>

            <hr />
            <h1>Challenge # 4 Slot Machine Game in React JS</h1>
            <h2 className='center'> 🎰Welcome to <b> Slot Machine Game</b> 🎰</h2>
            <div className='sltt'>
            <Slomt x=" 😄 " y=" 😄 " z=" 😄 "/>
            <hr/>
            <Slomt x=" 😄 " y=" ❤️ " z=" 🐤 "/>
            <hr/>
            <Slomt x=" 🍎 " y=" 🍌 " z=" 😄 "/>
            <hr/>
            

            </div>
            <hr/>
            <hr/>
            <hr/>
            <h1> React Hooks Challenge #6: Get Time on Refreshing and Clicking Button using useState Hook </h1>
        <h2 className='center'><b>Times</b></h2>
        <Chtimes/>

        
        
        
        </>
    )
}
