import React from 'react'
import { SkillsData } from '../database/skills.db'
import Social from './Social';
const Skills = () => {

    console.log(SkillsData );

  return (
    <div className='p-10'>
      <div className='font-bold flex gap-2 text-[35px] md:text-[50px] md:my-16 my-10 justify-center '>
        <span>My</span>
        <span className='text-[#313bac]'>Skills</span>
      </div>
      <div className='flex flex-wrap gap-10 justify-center items-center w-[80%] md:w-[70%]  m-auto'>
        {SkillsData.map((item)=>(
            <div key={item.id}>
                <div className='w-[100px] h-[100px] rounded-full bg-[#fef4f5] flex justify-center items-center hover:shadow-lg'>
                     <img src={item.id} alt="img" className='w-[50px] h-[50px]'/>
                </div>
                   <div className='text-center mt-2 text-[14px]'>{item.title}</div>
            </div>
        ))}
      
      </div>
      <div className='relative '>
        <Social />
        <div className='text-[14px] text-right w-[90%] mt-5 '>@2024 ABBOS NORQULOV</div>
      </div>
                
    </div>
  )
}

export default Skills
