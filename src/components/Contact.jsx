import React from 'react'
import LinkedIn from "../assets/LinkedInP.png"
// import Telegram from "../assets/telegramP.png"
const Contact = () => {
  return (
    <div>
      <div className='text-[35px] my-10 md:text-[45px] font-bold text-center  '>Contact Me</div>
      <div className='max-w-[700px] w-full m-auto'>
        <div className='flex flex-wrap justify-center items-center gap-10'>
            <a href="" className='flex max-w-[300px] h-[70px]'  >
                <img src={LinkedIn} alt="LinkedIn" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
