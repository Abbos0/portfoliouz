import React, { useState } from 'react'
import { HiMiniBars2 } from "react-icons/hi2";
import { MdOutlineCancel } from "react-icons/md";
import Symbole from "../assets/symbole.png"
import { Fade, Zoom } from 'react-reveal'

import Translate from '../utils/Translate';

import { setLanguage } from '../redux/navbarSlice'
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {


    // const language =useSelector(state=> state.Navbar) shu yerdfa e'tiborli bo'ling navbar kickkina
    // console.log(language);

    const {language} = useSelector(state=> state.navbar)
    console.log(language);
    const dispatch = useDispatch()
    const [toggle,setToggle] = useState(false)
  return (
    <nav className='containerr z-10 fixed w-full h-[80px] backdrop-blur flex justify-between items-center'>
      <div className='flex'> 
        <Zoom>
            <p className='font-bold md:text-[25px] text-[20px]'>Abbos</p>
            <img src={Symbole} alt="Symbole" className='md:w-[35px] w-[20px]' />
        </Zoom>
      </div>
        <Fade center>
          <ul className={`flex md:flex-row flex-col gap-6 text-[#6b7688] font-[600] uppercase md:bg-[transparent] md:w-auto md:static bg-[white]  w-[80%] ${toggle ? 'right-0' : 'right-[-100%]'} top-[80px] md:h-auto  absolute transition-[1s] md:p-0 p-10 text-[14px]`}>
          <li><a href="#home" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'ГЛАВНАЯ',en:'Home'}}/></a></li>
                <li><a href="#skills" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'НАВЫКИ',en:'Skills'}}/></a></li>
                <li><a href="#works" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'МОИ РАБОТЫ',en:'My Works'}}/></a></li>
                <li><a href="#contact" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'КОНТАКТЫ',en:'Contact'}}/></a></li>  
          </ul>
        </Fade>
        <div className='flex md:gap-5 gap-2 text-[18px]   md:text-[12px]'>
            <div onClick={()=>dispatch(setLanguage('ru'))} className={`cursor-pointer ${language === 'ru' ? 'text-[blue] ': 'text-[#6b7688] '}`}>RU</div>
            <div onClick={()=>dispatch(setLanguage('en'))} className={`cursor-pointer ${language === 'en' ? 'text-[blue] ': 'text-[#6b7688] '}`}>ENG</div>
        </div>

        {/* bars  */}
        <div className='p-1 bg-[#313bac] text-[white] rounded-full md:text-[25px] md:hidden block' onClick={()=>setToggle(!toggle)}>
            {toggle ? <MdOutlineCancel /> : <HiMiniBars2/>} 
        </div>
    </nav>
  )
}

export default Navbar













//   import React, {  useState } from 'react'

// // icons 
// import { HiMiniBars2 } from "react-icons/hi2";
// import { MdOutlineCancel } from "react-icons/md";
// import Symbole from "../assets/symbole.png"
// const Navbar = () => {

//     const [toggle,setToggle] = useState(false)
//     console.log(toggle);

//     const [onclick,setOnclick] = useState(true)

//     return (
//       <nav className='z-10 containerr fixed w-full h-[80px] backdrop-blur flex justify-between items-center'>
//         <div className=' font-bold flex'>
//             Abbos
//             <img src={Symbole} alt="Symbole" className='w-[25px]' />
//         </div>

//             <ul className={`flex md:flex-row flex-col gap-6 text-[#6b7688] font-[600] uppercase md:bg-[transparent] md:w-auto md:static bg-[white]  w-[80%] ${toggle ? 'right-0' : 'right-[-100%]'} top-[80px] md:h-auto h-[100vh] absolute transition-[1s] md:p-0 p-10`}>
//                 <li  onClick={()=>setOnclick(true)}><a href="#home" className='links'>Home</a></li>
//                 <li onClick={()=>setOnclick(true)}><a href="#Skills" className='links'>Skills</a></li>
//                 <li onClick={()=>setOnclick(true)}><a href="#Works" className='links'>My Works</a></li>
//                 <li onClick={()=>setOnclick(true)}><a href="#Contact" className='links'>Contact</a></li>
//             </ul>

//         <div className='flex gap-5 '>
//             <div>RU</div>
//             <div>ENG</div>
//         </div>

//         {/* bars  */}
//         <div className='p-1 bg-[#313bac] text-[white] rounded-full text-[25px] md:hidden block' onClick={()=>setToggle(!toggle)}>
//             {toggle ? <MdOutlineCancel /> : <HiMiniBars2/>} 
//         </div>
//     </nav>
//   )
// }

// export default Navbar


