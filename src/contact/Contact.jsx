import React from 'react'
import './contact.css'
import { useState } from 'react'
function Contact() {
    const [x , setX] =useState('')

    const d = (e)=>{
        e.preventDefault();
        setX('');
    }
    const c =(e)=>{
        setX(e.target.value)
    }
  return (
    <div className='contact'>
        <div className='title'>
            <h1>Contact <span className="sp">Me</span></h1>
        </div>
        
        <div className='yes'>
            <form className='cardd' onSubmit={d}>
            <textarea name="sdf" id="dsadf" cols="30" rows="10" placeholder='Please Write your reviews' value={x} onChange={c}></textarea>
            <div><button className='btn' onClick={d}>Submit</button></div>
      
            </form>
        </div>
        
    </div>
  )
}

export default Contact