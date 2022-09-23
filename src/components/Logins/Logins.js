import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Logins() {

    // object sy useState bani ha 
    // const [state,setState] =useState({
    //     firstName: "",
    //  lastName : "",
    //  password : "",
    //  email : "",
    // })


    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    // let firstName ="";
    // let lastName ="";
    // let password ="";
    // let email ="";
    const handleLogin = () => {
        // console.log(state);


        // console.log(e);
        // console.log("Login button working");
        // console.log(firstName);
        // console.log(lastName);
        // console.log(password);
        // console.log(email);
        alert(firstName + " " + lastName + " " + password + " " + email);
     // reset krny k lia 
     setfirstName("");
     setlastName("");
     setpassword("");
     setemail("");

    }
    const resetBtn = () => {
        // reset krny k lia 
        setfirstName("");
        setlastName("");
        setpassword("");
        setemail("");
    }

    // const resets =(e)=>{
    //     let firstName ="";
    //     let lastName ="";
    //     let password ="";
    //     let email ="";
    // }


//chalange 2

let name ="Saqib Ali"
const currDate =new Date().toDateString();
const currTime = new Date().toLocaleTimeString();

    return <>
        <h1>Login</h1>
        {/* <p>First_Name :{firstName + " Last_Name :"+ lastName + " Password: " +password+ "Email : " + email}</p> */}
        <p>First_Name :<span>{firstName}</span> lastName: <span>{lastName}</span> Password: <span>{password}</span> Email: <span>{email}</span></p>
        {/* <p>Last_Name:{lastName}</p>
        <p>Password:{password}</p>
        <p>Email:{email}</p> */}
        <div class="row">
            <form onSubmit={handleLogin} class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        {/* <input onChange={(e)=>{firstName =e.target.value}} placeholder="Placeholder" id="first_name" type="text" class="validate" /> */}
                        <input onChange={(e) => { setfirstName(e.target.value) }} placeholder="Placeholder" id="first_name" type="text" class="validate" />
                        {/* <input onChange={(e)=>{setState({...state,firstName: e.target.value})}} placeholder="Placeholder" id="first_name" type="text" class="validate" /> */}
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        {/* <input onChange={(e)=>{lastName =e.target.value}} id="last_name" type="text" class="validate" /> */}
                        <input onChange={(e) => { setlastName(e.target.value) }} id="last_name" type="text" class="validate" />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        {/* <input onChange={(e)=>{password =e.target.value}} id="password" type="password" class="validate" /> */}
                        <input onChange={(e) => { setpassword(e.target.value) }} id="password" type="password" class="validate" />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        {/* <input onChange={(e)=>{email =e.target.value}} id="email" type="email" class="validate" /> */}
                        <input onChange={(e) => { setemail(e.target.value) }} id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>

            </form>
            <div>
            <button className='l_btns' onClick={handleLogin} class="btn waves-effect waves-light" type="submit" name="action">Submit</button>

            <button className='l_btns' onClick={resetBtn} class="btn waves-effect waves-light" type="submit" name="action">Resets </button>
</div>
           
        </div>
        <div>
        <h1>Challenge</h1>
        <h2>My Name is {name}</h2>
       
        <p>Current Date is ={currDate}</p>
        <p>Current Date is ={currTime}</p>
        <p> </p>
        </div>
    </>
}
