import React from 'react'
import { useState } from 'react'

//Array MAp Function
const studemtsData = [
  { id: 1, Name: "Saqib ali", degree: "BSCS" },
  { id: 2, Name: "Aqib ali", degree: "BSCS" },
  { id: 3, Name: "Tamoor Saqib", degree: "BSCS" },
]
const newData = studemtsData.map((allValue) => {
  return `My name is: ${allValue.Name}. My degree ${allValue.degree}`;
  <br></br>
})
//Ternary Operator in React JS

let num = 10
let num2 = 5;




export function Login() {
  const [userName, setuserName] = useState("")

  const handleButton = () => {
    alert(userName);

  }
  const [name, setName] = useState("");
  const inputEvent = (event) => {
    setName(event.target.value);

  }
  const [userNameS, setuserNameS] = useState("")
  const onSubmit = () => {
    setuserNameS(name);

  }
  //login form
  const [lName, setlName] = useState("");
  const [lPas, setPas] = useState("");
  const [onText, setOnText] = useState("");

  const InPutText = (e) => {
    setlName(e.target.value);
  }
  const InPutPas = (e) => {
    setPas(e.target.value);
  }
  const onSubmits = (event) => {
    event.preventDefault();

    setOnText("Name: " + lName + " " + "Password: " + lPas)

  }

  // onliny one used useState  method 3 

  const [mname, setMname] = useState({
    name: "",
    password: "",
    email: " ",
    number: " "
  });

  const InPutEvent = (e) => {
    console.log(e.target.value);

    const {name , value } = e.target;
    setMname((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      }
    })
   
  }

  const onSubmitss = (e) => {
    e.preventDefault();
    alert("Form Submit");
    setMname({
      name: "",
    password: "",
    email: " ",
    number: " "
    })
    
  }
  return (
    <div className='profile'>

      <h1>Login</h1>
      <h6>Hello {userName} </h6>
      <form>
        <input type="text" placeholder="User Name" onChange={(e) => { setuserName(e.target.value) }} />
      </form>
      <button onClick={handleButton}>Click ME</button>



      {/* submit button form ki coding  */}

      <div className='mainS'>
        <h6>Hello {userNameS} </h6>
        <input className='input_text' type='text' placeholder='Enter Your Name' onChange={inputEvent} />
        <button onClick={onSubmit}>sUBMIT</button>
      </div>



      {/* login Form  */}
      {/* <h2>{lName}</h2>
<h2>{lPas}</h2> */}
      <h2>{onText}</h2>

      <form onSubmit={onSubmits} >
        <input type='text' placeholder=' Enter Name' onChange={InPutText} />
        <input type='password' placeholder=' Enter Password' onChange={InPutPas} />
      </form>


      <button onClick={onSubmits}>Submit</button>



      {/* onliny on used useState  */}
      <h1>just 2 lines to Complete Our Login Form in React</h1>
      <h1><b>Name:</b>{mname.name}  <b>Password:</b>{mname.password} <b>
      email:</b>{mname.email} <b>PhoneNo. </b>{mname.number}</h1>
      <form onSubmit={onSubmitss} >
        <input type='text'
          placeholder=' Enter Name'
          name='name'
          value={mname.name}
          required
          onChange={InPutEvent} />


        <input type='password'
          placeholder=' Enter Password'
          name='password'
          value={mname.password}
          required
          onChange={InPutEvent} />

        <input type='email'
          placeholder=' Enter email'
          name='email'
          value={mname.email}
          required
          onChange={InPutEvent} />
        <input type='number'
          placeholder=' Enter number'
          name='number'
          value={mname.number}
          required
          onChange={InPutEvent} />

      </form>

      <button onClick={onSubmitss}>Submit</button>












      <h1>React js Array Map Method </h1>
      <p>{newData}</p>

      <h1>Ternary Operator in React JS</h1>
      <p>Condition ? True : False</p>
      <span>{num < num2 ? " True " : "false"}</span>
      <br />
      <hr />
      <span>{num > num2 ? " True " : "Number Greater Then 5"}</span>
    </div>
  )
}
