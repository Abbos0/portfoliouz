// import React from 'react'
// import { SkillsData } from '../database/skills.db'
// // import Social from './Social';
// const Skills = () => {

//     console.log(SkillsData );

//   return (
//     <div className='p-10'>
//       <div className='font-bold flex gap-2 text-[35px] md:text-[50px] md:my-16 my-10 justify-center '>
//         <span>My</span>
//         <span className='text-[#313bac]'>Skills</span>
//       </div>
//       <div className='flex flex-wrap gap-10 justify-center items-center w-[80%] md:w-[70%]  m-auto'>
//         {SkillsData.map((item)=>(
//             <div key={item.id}>
//                 <div className='w-[100px] h-[100px] rounded-full bg-[#fef4f5] flex justify-center items-center hover:shadow-lg'>
//                      <img src={item.img} alt="img" className='w-[50px] h-[50px]'/>
//                 </div>
//                    <div className='text-center mt-2 text-[14px]'>{item.title}</div>
//             </div>
//         ))}
      
//       </div>
//       <div >
//         <div className='text-[14px] text-right w-[90%] mt-5 '>@2024 ABBOS NORQULOV</div>
//       </div>
                
//     </div>
//   )
// }

// export default Skills

import React from 'react'
import { SkillsData } from '../database/skills.db'
import { Fade } from 'react-reveal'

const Skills = () => {

  return (
    <div className='h-auto md:h-[100vh] relative'>
        <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 md:my-16 justify-center'>
            <span>My</span>
            <span className='text-[#313bac]'>Skills</span>
        </div>
        <div className='flex flex-wrap gap-5 md:gap-10  py-10 justify-center items-center w-[90%] md:w-[70%] m-auto'>
            {SkillsData.map((item)=>(
        <Fade bottom>
        <div key={item.id}>
            <div className='w-[70px] h-[70px]  md:w-[100px] md:h-[100px] rounded-full bg-[#fef4f5] flex justify-center items-center hover:shadow-lg'>
                <img src={item.img} alt="reactIcon" className='w-[50px] h-[50px] p-1' />
            </div>
            <div className='text-center mt-2 text-[14px]'>{item.title}</div>
        </div>
        </Fade>
            ))}
        </div>
        <div className='text-[14px] py-5 text-right w-[90%] md:absolute bottom-[20px] right-[40px]'>@2024 JAMSHID ZAYNIYEV</div>
    </div>
  )
}

export default Skills
