import React from 'react'
import "./about.css"
function About() {
  return (
    <div className='about'>
        <div className='container'>
            <div className='about-main'>
                <h1>About <span className='s'>Me</span></h1>
                <div className='content'>
                    <div className='hi'>
                    Hi! I am a CSE student with the urge to learn new tecnology everyday! 
                    </div>
                    
                    <div className='others'>
                        getting my hand dirty on C++ , Java , python , HTML, CSS,Javascript ans ReactJs.
                    </div>
                    <div className='others'>
                        Currently working on NodeJs for backend dev.
                    </div>

                    
                </div>
                
                <div>
                    <button className='btn'>Download</button>
                    <div className='btn-d'>Download Cv</div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default About