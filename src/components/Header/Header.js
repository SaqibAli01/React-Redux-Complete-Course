import React from 'react'
import { Link } from 'react-router-dom';






export  function Header() {


  return <>
     <nav className='nav_headerss'>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      
      <ul class="right hide-on-med-and-down">
        <li><Link to='/'   >Home</Link></li>
        <li><Link to='/Header2'>Hooks</Link></li>
       
        <li><Link to='/Hooks'>Create</Link></li>
        <li><Link to='/MyAccordion'>API</Link></li>
        <li><Link to='/CloneApp'>CloneApp</Link></li>
        {/* <li><Link to='/UseEffect'>UseEffect</Link></li> */}
        <li><Link to='/UseContext'>UseContext</Link></li>
        
        <li><Link to='/Login'   >Login</Link></li>
        <li><Link to='/Profile'  >Profile</Link></li>
        <li><Link to='/Logins'  >Logins</Link></li>
        <li><Link to='/Profile'  >Profile</Link></li>
        <li><Link to='/MainHTML'  >Redux</Link></li>
              <li><Link to='/Challange'  >Challange</Link></li>
        <li><Link to='/ProjectHeader'>Projects</Link></li>
      </ul>
    </div>
  </nav>

  </>
}
