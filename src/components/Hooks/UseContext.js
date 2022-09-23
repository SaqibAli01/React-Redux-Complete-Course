//useContext serf ak dafa he used hona 
import React, { useContext } from 'react'
//ye 2no provider lag sy import hon gy
import { UserContext } from '../context/UserContext'
import { countContext } from '../context/CountContext';


export function UseContext() {

  const {name,age} = useContext(UserContext);
  const {count,setCount} = useContext(countContext);
  return (
    <div>
    <h1> UseContext </h1>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h2 className='center'><b>{count}</b></h2>
    <div className='center'>
    <button onClick={()=>setCount(count + 1)}>Increment</button>
    <button onClick={()=>setCount(count - 1)}>Decrement</button>
    </div>
    </div>
  )
}
