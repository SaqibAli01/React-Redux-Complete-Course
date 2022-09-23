import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
export  function Header2() {

  let [color, setColor] = useState("");
  const alert = () => {
    alert({ color })
  }

  return <>
   <nav className='nav_w'>
    <div class="nav-wrapper" >
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><Link to='/useState'>useState</Link></li>
        <li><Link to='/UseEffect'>UseEffect</Link></li>
        <li><Link to='/UseContext'>UseContext</Link></li>
        <li><Link to='/UseRefs'>UseRef</Link></li>
        <li><Link to='/UseReducer'>UseReducer</Link></li>
        <li><Link to='/UseCallback'>UseCallback</Link></li>
        <li><Link to='/UseMemo'>UseMemo</Link></li>

        {/* <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript ok</a></li> */}
      </ul>
    </div>
  </nav>

  <div className='Hooks'>
      <h1>What is a Hook?</h1>
      <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
      <h3>use jis k shat ho use Hooks use Hooks Khaty ha</h3>
      <span className='span_hooks'>1 .<b>useState</b></span> <br />
      <span className='span_hooks'>2 .<b>useEffect</b></span> <br />
      <span className='span_hooks'>3 .<b>useContext</b></span> <br />
      <span className='span_hooks'>4 .<b>useRef</b></span><br />
      <span className='span_hooks'>5 .<b>useReducer</b></span><br />
      <span className='span_hooks'>6 .<b>useCallback</b></span><br />
      <span className='span_hooks'>7 .<b>useMemo</b></span><br />
      <hr />

      <h1>My favorite color is {color}</h1>
      <h6>{color}</h6>
      <div className='btn_hooks'>
        <button onClick={() => setColor("Blue")}>Blue</button>
        <button onClick={() => setColor("Red")}>Red</button>
        <button onClick={() => setColor("Green")}>Green</button>
        <button onClick={() => setColor("Pink")}>Pink</button>

        <button onClick={() => setColor("Yellow")} >Yellow</button>
        <button onClick={() => setColor("Black")}>Black</button>
        <button onClick={() => setColor("Brown")}>Brown</button>
        <button onClick={() => setColor("Dark")}>Dark</button>

      </div>
    </div>
        </>
}
