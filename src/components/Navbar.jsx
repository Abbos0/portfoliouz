import React from 'react'

const Navbar = () => {
  return (
    <div className='containerr  fixed w-full h-[80px] backdrop-blur text-[60px] flex justify-between items-center'>
      <div className='text-[30px] font-bold'>
        Abbos
      </div>
      <div >
          <ul className='flex gap-5 text-[#6b7688] bg-[orange] font-bold  uppercase'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">My works</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className='flex gap-5'>
        <div>RU</div>   
        <div>ENG</div>
      </div>
    </div>
  )
}

export default Navbar
