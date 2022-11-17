import React from 'react'
import './home.css'
import Nav from "./Nav"
import About from  "./about/About"
import Projects from '../project/Projects'
import Contact from '../contact/Contact'
import Footer from '../Footer'

function Home() {
  return (
    <div className='home'>
      
        <Nav/>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home