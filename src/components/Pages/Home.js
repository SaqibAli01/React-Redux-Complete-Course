import React from 'react'
import { Fruits } from './Fruits';
import { useState } from 'react';
import  { names , age , city , country } from '../data/Data'
// import { Link } from 'react-router-dom';

{/* <Link to='/'> Home</Link> */}

export function Home() {


  const fruits = ["Apple", "Orange", "Banna"];
  let name = "Saqib ali";

  let x = 5;
  let y = 5;
  if (x < 10) {
    name = "Saqib Ali";
  }


  //object ka methods
  const car =
  {
    brand: 'Ford',
    Model: 'Mustang',
    color: 'red',
  }
  const updateCar =
  {
    type: 'Car',
    Year: '2022',
    color: 'Yellow',
  }

  const myUpdateCar = { ...car, ...updateCar, year: 2022 };
  console.log(myUpdateCar)


  // if conditon used

  let userNAme;
  let un =6
// if (un > 5) {
//   userNAme="Saqib"
// }
// else{
//   userNAme= "Ali"
// }

//times coding 
let times = new Date().toLocaleTimeString();
  //home digital clock times

  const [cTime, setCTime] = useState(times);
    
  const UpDateTimes = () => {
     times = new Date().toLocaleTimeString();
     setCTime(times);
  }

  // setInterval(UpDateTimes,1000);

  // setInterval(() => {
  //   UpDateTimes 
  // }, 1000);

  // color change 
  // #ddd
  const [Name, setName]= useState("Click ME");
  const [Name1, setName1]= useState("Click ME");
  const [Name2, setName2]= useState("Click ME");
  const [Name3, setName3]= useState("Click ME");
  const [Name4, setName4]= useState("Click ME");
  const [Name5, setName5]= useState("Click ME");
  const [Name6, setName6]= useState("Click ME");
  const [Name7, setName7]= useState("Click ME");
  const [Name8, setName8]= useState("Click ME");
  

  let Orange = '#ddd';
  const[bg, setBg] = useState(Orange);

  const UpBg =()=>{
    let newBg = "#fdb813"
    setBg(newBg);
    setName("BG Color Change");

  }
  const UpBg1 =()=>{
    let newBg = "#ee3322"
    setBg(newBg);
    setName1("BuzzFeed ");

  }

  const UpBg2 =()=>{
    let newBg = "#ee3322"
    setBg(newBg);
    setName2("Gannett");

  }
  const UpBg3 =()=>{
    let newBg = "#ed1c16"
    setBg(newBg);
    setName3("Bynder");

  }
  const UpBg4 =()=>{
    let newBg = "#da5a47"
    setBg(newBg);
    setName4("Coca-Cola");

  }
  const UpBg5 =()=>{
    let newBg = "#0a0a0a"
    setBg(newBg);
    setName5("Craft CMS");

  }
  const UpBg6 =()=>{
    let newBg = "#c9c9c9"
    setBg(newBg);
    setName6("Dev");
  }

  const UpBg7 =()=>{
    let newBg = "#96172e"
    setBg(newBg);
    setName7("DHL");

  }

  const UpBg8 =()=>{
    let newBg = "#009bff"
    setBg(newBg);
    setName8("Fiat");

  }

 const BgBackColor =()=>{
  let bgColor = "#ddd";
  setBg(bgColor);
    setName8("Click ME");
}

  return (
    <>
      <h1>Home Page</h1>

    <h1>Handling Events in ReactJS</h1>
    <div style={{backgroundColor :bg}} >
      <button onClick={UpBg}  >{Name}</button>
      <button onClick={UpBg1} >{Name1}</button>
      <button onClick={UpBg2} >{Name2}</button>
      <button onClick={UpBg3} >{Name3}</button>
      <button onClick={UpBg4} >{Name4}</button>
      <button onClick={UpBg5} >{Name5}</button>
      <button onClick={UpBg6} >{Name6}</button>
      <button onClick={UpBg7} onMouseEnter={UpBg7} onMouseLeave={BgBackColor}>{Name7}</button>
      <button onClick={UpBg8} onDoubleClick={BgBackColor}>{Name8}</button>



    <div className='div' style={{ padding: "1px 0", backgroundColor: {bg} }}>
     {/* <button onClick={UpDateTimes}>GetTime</button> */}

        <h2 className="center"><b>{cTime}</b></h2>
      <p>My Name is {name}</p>
      {/* <p>My Name is { x > 10 ? "ALi Saqib" :name}</p> */}
      <p>{name+" :"+ age+" :" + city+" :" +country}</p>
<p>{un> 5 ? userNAme="SAQIB": "ALi"}</p>

      <Fruits fruits={fruits}></Fruits>

      {/* {
  fruits.map((fruit,index)=>{
    return <p key={index}>{fruit}</p>
  })
} */}
{/* if condition used  */}

    </div>
</div></>
  )
}
