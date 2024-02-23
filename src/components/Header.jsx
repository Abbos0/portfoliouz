import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#EDF2F8]  w-full h-[100vh] flex items-center'>
        <div className='flex flex-col gap-6 md:gap-10 items-center md:items-end w-full max-w-[400px]'>
            <div className='flex justify-center items-center bg-[white] gap-10 w-full max-w-[350px] p-3 rounded-[10px] shadow-lg'>
                <p className='text-[40px]'>👋</p>
                <p className='flex flex-col ' >
                    <span className='text-slate-400 text-[20px]'>Hello, I am</span>
                    <span className='font-bold text-[30px]'>Abbos</span>
                </p>
            </div>
            <div className=' bg-[white] w-full max-w-[300px] p-3  text-slate-400 text-[20px] rounded-[10px] shadow-lg'>FRONTEND/REACT DEVELOPER</div>
            
            <button type="button" className='text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Downlaod CV</button>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Header
