import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Works from '../components/Works'

const Main = () => {
  return (
    <div style={{scrollBehavior:"smooth"}}>
      
      <Navbar/>
      <Header/>
      <Skills/>
      <Works/>

    </div>
  )
}

export default Main
