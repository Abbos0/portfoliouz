import React from 'react'

import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Social = () => {
  return (
    <div className='absolute left-[20px] bottom-[20px] md:block hidden'>
        <a href='https://t.me/boss0_002' target='blank' className='   text-[#6b7688]  bg-[white] w-[50px] h-[50px] flex justify-center items-center rounded-full text-[25px] transition-all hover:text-[white] hover:bg-[#313bac] mb-2'>
            <FaTelegram />
        </a>
        <a href='https://t.me/boss0_002' target='blank' className=' text-[#6b7688] bg-[white] w-[50px] h-[50px] flex justify-center items-center rounded-full text-[25px] transition-all hover:text-[white] hover:bg-[#313bac]'>
            <FaLinkedinIn />
        </a>
   </div>
  )
}

export default Social
