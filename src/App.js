import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useEffect } from "react";
import {Header} from './components/Header/Header'
import { Home } from "./components/Pages/Home";
import { Profile } from './components/Pages/Profile';
import {Login} from './components/Pages/Login';
import {Challange} from './components/Pages/Challange'
import { Fruits } from "./components/Pages/Fruits";
import {Header2} from './components/Header/Header2'
import {Footer} from './components/Footer/Footer';
import {Logins} from './components/Logins/Logins';

import {Hooks} from './components/Hooks/Hooks';
import {UseState} from "./components/Hooks/UseState";
import {UseEffect} from './components/Hooks/UseEffect';
import {UseContext} from './components/Hooks/UseContext';
import {UseRefs} from './components/Hooks/UseRef';
import {UseReducer} from './components/Hooks/UseReducer';
import {UseCallback} from './components/Hooks/UseCallback';
import {UseMemo} from './components/Hooks/UseMemo';
import {ProjectHeader} from './components/Projects/Headers/Projects'
import {NetflixApp} from './components/Projects/Project1/NetflixApp'
import {MainHTML} from './components/Reduxs/MainHTML'
import UserContextProvider from "./components/context/UserContext";
import { CountContextProvider } from "./components/context/CountContext";
import ToDoApp from './components/Projects/Project2/ToDoApp';
import MyAccordion from './components/Api/MyAccordion';
import CloneApp from './components/GoogleApp/CloneApp';

// //redux
// import store from './Store'
// store.subscribe(()=>console.log(store.getState()));

function App() 
{

  // const [user , setUser] = useState("SAQIB ALi");
  // setUser("Value Change asy kr skty ha user ki");

  const [userfirstName , setuserfirstName] = useState("");
  const [userlastName , setuserlastName] = useState("");
  const [userfulName , setuserfulName] = useState("");
  useEffect(()=>{
    setuserfirstName("Saqib");
    setuserlastName("Ali")
    setuserfulName("Saqib Ali")
  },[])
  // [] i is ko blank chor dia h ais ki value  ak dfa chaly gu ab 

  return <>
  <CountContextProvider>
<UserContextProvider>

 <BrowserRouter>
  <Header></Header>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/Header2" element={<Header2 />} />
          <Route path="/MyAccordion" element={<MyAccordion />} />      
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect/>} />
          <Route path="/UseContext" element={<UseContext/>} />
          <Route path="/UseRefs" element={<UseRefs/>} />
          <Route path="/UseReducer" element={<UseReducer/>} />
          <Route path="/UseCallback" element={<UseCallback/>} />
          <Route path="/UseMemo" element={<UseMemo/>} />
          
          
          <Route path="Logins" element={<Logins />} />
          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Logins" element={<Logins />} />
          <Route path="Fruits" element={<Fruits />} />
  
          <Route path="Profile" element={ <Profile userfirstName={userfirstName} userlastName = {userlastName} userfulName={userfulName}></Profile>}>          </Route>
          <Route path="Challange" element={<Challange/>} />
          <Route path="ProjectHeader" element={<ProjectHeader/>} />
          <Route path="NetflixApp" element={<NetflixApp/>} />
          <Route path="MainHTML" element={<MainHTML/>} />
          <Route path="ToDoApp" element={<ToDoApp/>} />
         
          <Route path="CloneApp" element={<CloneApp/>} />
          

          
        
      </Routes>
    </BrowserRouter>
    

    

{/* <Fruits/> */}
  {/* <Logins></Logins> */}
   {/* <Home></Home> */}
   {/* <Profile user={user}></Profile> */}
  {/* <Login></Login> */}


</UserContextProvider>
</CountContextProvider>
<Footer></Footer> 
</>
}

export default App;
