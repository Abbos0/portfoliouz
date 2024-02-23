import React, { useState } from 'react'
import { HiBars2 } from "react-icons/hi2";
const Navbar = () => {


  const [toggle,setToggle] = useState(false)
  
  console.log(toggle);
  return (

    <nav className='containerr  fixed w-full h-[80px] backdrop-blur text-[20px] flex justify-between items-center'>
      
      <div className='text-[30px] font-bold'>
        Abbos
      </div>
      
          <ul className={`flex md:flex-row flex-col  gap-6 text-[#6b7688] font-bold  uppercase md:bg-[transparent] md:static bg-[white] md:w-auto  w-80% md:h-auto h-[100vh] ${toggle ? 'right-0' : 'right-[-100%]'} top-[80px] absolute transition-[0.8s] md:p-0 p-10`}>
            <li><a href="#"className='links' >Home</a></li>
            <li><a href="#" className='links' >Skills</a></li>
            <li><a href="#" className='links' >My works</a></li>
            <li><a href="#" className='links' >Contact</a></li>
        </ul>
     
      
      <div className='flex gap-5'>
        <div>RU</div>   
        <div>ENG</div>
      </div>
      <div className=' p-1 text-[25px] bg-[#313bac] rounded-full text-[white] md:hidden block 'onClick={()=>setToggle(!toggle)}>
          <HiBars2 />
      </div>
    </nav>
  )
}

export default Navbar
