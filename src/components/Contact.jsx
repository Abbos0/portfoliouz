import React from 'react'
import Telegram from "../assets/telegramP.png"
import LinkedIn from "../assets/LinkedInP.png"
import PhoneP from "../assets/PhoneP.png"
import { Zoom } from 'react-reveal'
import Inputs from './Inputs'

import Translate from '../utils/Translate'

const Contact = () => {
  return (
    <div id='contact'>
        <div className='text-[35px] my-10 md:text-[44px] text-center font-bold'><Translate dictionary={{ru:'Контакты',en:'Contact Me'}}/></div>
        <div className='max-w-[700px] w-full m-auto'>
           <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 my-5'>
              <Zoom>
                <a href='https://www.linkedin.com/in/abbos-norqulov-5953992b7/' target='blank' className='flex min-w-[300px] h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                    <img src={LinkedIn} alt="Telegram" className='w-[50px]' />
                    <span className='text-[#5e6064]'><Translate dictionary={{ru:'in/Аббос ',en:'in/Abbos '}}/></span>
                </a>
                <a href='https://t.me/boss0_002' target='blank' className='flex min-w-[300px] h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                    <img src={Telegram} alt="Telegram" className='w-[50px]' />
                    <span className='text-[#5e6064]'><Translate dictionary={{ru:'in/босс0_002 ',en:'t.me/boss0_002'}}/></span>
                </a>
                <a href='tel:+998936665593' target='blank' className='flex min-w-[300px] h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                    <img src={PhoneP} alt="Telegram" className='w-[20px]' />
                    <span className='text-[#5e6064]'>  +(998) 93 666 55 93</span>
                </a>
              </Zoom>
           </div>
           <Inputs/>
        </div>
    </div>
  )
}

export default Contact