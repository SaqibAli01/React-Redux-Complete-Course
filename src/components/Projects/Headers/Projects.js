import React from 'react'
import { Link } from 'react-router-dom'



export  function ProjectHeader() {
  return <>
  <nav className='nav_w'>
   <div class="nav-wrapper" >
     
     <ul id="nav-mobile" class="right hide-on-med-and-down">
     <li><Link to='/NetflixApp'>Netflix App</Link></li>
       <li><Link to='/ToDoApp'>ToDoApp</Link></li>
       <li><Link to='/UseContext'>UseContext</Link></li>
       <li><Link to='/UseRefs'>UseRef</Link></li>
       <li><Link to='/UseReducer'>UseReducer</Link></li>
       <li><Link to='/UseCallback'>UseCallback</Link></li>
       <li><Link to='/UseMemo'>UseMemo</Link></li> 

     </ul>
   </div>
 </nav>

  </>
}
