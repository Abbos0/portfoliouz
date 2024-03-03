import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'

const Main = () => {
  return (
    <div style={{scrollBehavior:"smooth"}}>
      
      <Navbar/>
      <Header/>
      <Skills/>   
      <Works/>
      <Contact/>

    </div>
  )
}

export default Main
