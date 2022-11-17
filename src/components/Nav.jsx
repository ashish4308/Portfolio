import React from 'react'
import "./home.css"
import Body from './pages/Body'
function Nav() {
  return (
    <div className='sidebar'>
      <div className='top'>
          <div className='heading'>
              <h1>Port<span className='sp'>folio</span></h1>
          </div>
        <div className='items'>
           <p>Home</p>
           <p>About</p>
           <p>Projects</p>
           <p>Contact</p>
        </div>
      </div>
      <Body />
    </div>
  )
}

export default Nav