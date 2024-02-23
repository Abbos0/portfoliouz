import React from 'react'

import Gif from "../assets/dev.gif"
import ReactImg from "../assets/react.png"
import Redux from "../assets/redux.png"
import Sass from "../assets/sass.png"



const Header = () => {
  return (
    <div className='pt-[200px] lg:pt-0 bg-[#EDF2F8]  w-full lg:h-[100vh] flex  lg:flex-row flex-col items-center justify-center gap-10'>
        <div className='flex flex-col gap-6 md:gap-10 items-center md:items-end w-full max-w-[400px]'>
            <div className='flex justify-center items-center bg-[white] gap-10 w-full max-w-[350px] p-3 rounded-[10px] shadow-lg'>
                <p className='text-[40px]'>👋</p>
                <p className='flex flex-col ' >
                    <span className='text-slate-400 text-[20px]'>Hello, I am</span>
                    <span className='font-bold text-[30px]'>Abbos</span>
                </p>
            </div>
            <div className=' bg-[white] w-full max-w-[300px] p-3  text-slate-400 text-[20px] rounded-[10px] shadow-lg'>FRONTEND/REACT DEVELOPER</div>
            
            <a href='rezume.pdf' download type="button" className='text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Downlaod CV</a>
        </div>

        <div>
          <img src={Gif} alt="gif" />
        </div>
        <div className='flex  lg:pt-[120px] lg:flex-col gap-10' >
            <div className='w-[75px] h-[75px] lg:w-[150px] lg:h-[150px] rounded-full bg-[white] shadow-2xl flex justify-center items-center'>
              <img src={Redux} className='w-[70%]' alt="Redux" />
            </div>
            <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full bg-[white] shadow-2xl flex justify-center items-center'>
            <img src={ReactImg} className='w-[100%]' alt="ReactImg" />
            </div>
            <div className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full bg-[white] shadow-2xl flex justify-center items-center'>
            <img src={Sass} className='w-[80%]' alt="Sass" />
            </div>
        </div>
    </div>
  )
}

export default Header
