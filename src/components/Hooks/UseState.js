import React, { useState } from 'react'

export function UseState() {
    //part 1
    let [name, setName] = useState("");

    const handleonChange = () => {
        alert(name)
    }

    //Part 2

    let [colors, setColors] = useState("Green")

    //end

    //part 3

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "Blue" }
        })
        alert("Red into change Blue Color")
    }

    //end
    //part 5

    let [count, setCount] =useState(0);
  
    const increMent = ()=>{
        setCount(count+1);
    }
    
    const derctMent = ()=>{
        count>0 && setCount(count-1);
    }

    return (
        <div>

            <h1>React useState Hook</h1>
 {/* part 5  */}
 <h6>{count}</h6>
        <div className='center'>
        <button onClick={increMent}>+</button>
        <button onClick={derctMent}>-</button>
        {/* reset button  */}
        <button onClick={()=>{setCount(0)}}>Reset</button>
        </div>
            <hr/>
            <hr/>
            {/* part 1  */}
            <h2>Initialize useState</h2>
            <p>My name is: {name}</p>
            <h6 onClick={handleonChange}>{name}</h6>
            <button onClick={() => setName("SAQIB")} >Firest Name</button>
            <button onClick={() => setName("Ali")}>Last Name</button>
            <button onClick={() => setName("Saqib Ali")}> Full Name</button>

            <hr />
            <hr />
            {/* //Part 2  */}
            <h2>Read State</h2>
            <h1>We can now include our state anywhere in our component.</h1>
            <p>Use the state variable in the rendered component.</p>

            <p>My favorite color is {colors}</p>

            <hr />
            <hr />
            {/* part 3  */}
            <h2>Update State</h2>
            <p>To update our state, we use our state updater function.</p>
            <p><b>Notes: </b> We should never directly update state. Ex: color = "red" is not allowed.</p>

            <h6>My {car.brand}</h6>
            <p>It is  <b> {car.color} </b>a <b> {car.model}  </b>from <b>{car.year}</b> </p>
            <div className='center'>
            <button 
                type="button"
                onClick={updateColor}
            >Blue</button>
            </div>
        <hr/>
        <hr/>
       
        </div>
    )
}

