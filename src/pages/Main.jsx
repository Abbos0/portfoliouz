import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'

const Main = () => {
  return (
    <div style={{scrollBehavior:"smooth"}}>
      
    <Navbar/>
    <Header/>
    <Skills/>
    </div>
  )
}

export default Main
