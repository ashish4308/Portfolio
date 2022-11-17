import React from 'react'
import './body.css'
import Tf from 'typewriter-effect'


function Body() {
  return (
    <div className='body'>
        <div>
          <div className='name'> <h1>Ashish <span className='sp'>Rawat</span></h1></div>
          <div className='intro'> 
          <span className='sp'>Welcome to </span>
            my portfolio
            <div className='type'>I am a 
              <span className='spp'>
              <Tf 
                    options={
                        {
                            autoStart: true,
                            loop:true,
                            delay:30,
                            strings: [
                                " student !",
                                " developer!",
                                " friend !",
                            ]
                        }
                    }
                />
              </span>
            </div>
            

          </div>
        </div>
    </div>
  )
}

export default Body