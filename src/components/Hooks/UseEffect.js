import React, { useEffect, useState } from 'react'

export function UseEffect() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  // part two 

  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter])
  // --------------------------------- 
  let [a, setA] = useState(0);

  useEffect(() => 
  {
      let timer =  setTimeout(() => 
      {
        setA((a) => a + 1);
      }, 1000);
         return ()=>clearTimeout(timer);
  },[])

  // __________________________ 
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000)
  }, []);


  //method 4
  const[nums, setNums] = useState(0);
  useEffect(()=>{
    alert("i am Clicked");
    // document.title=`Saqib ${nums}`
  },[nums])

  return (
    <div>

      <h6>{counter}</h6>
      <div className='center'>
        <button onClick={() => setCounter((c) => (c + 1))}>+</button>
        <br />
      </div>
      <h6>Calculation: {calculation}</h6>

      <hr />
      <hr />
<h1>Clean up the timer at the end of the useEffect Hook:</h1>
      <h6>{a}</h6>
      <hr/>
      <hr/>
<h6>{message}</h6>
      <h1>React useEffect Hooks
      </h1>
      <p>The useEffect Hook allows you to perform side effects in your components. <br />

        Some examples of side effects are: fetching data, directly updating the DOM, and timers.<br />

        useEffect accepts two arguments. The second argument is optional.<br />

        useEffect(function, dependency)</p>
      <h1>Let's use a timer as an example.</h1>
      <p>Use setTimeout() to count 1 second after initial render:</p>

      <h6>i have rendered {count} times!</h6>
<hr></hr>
<hr></hr>
<p>document.title= is sy title me show ho gi value</p>
<button onClick={()=>{setNums(nums+1)}}>Click Me {nums}</button>
    </div>
  )
}
