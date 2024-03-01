import React from 'react'

const Inputs = () => {
  return (
    <div className='my-20 flex flex-col gap-5 required justify-center items-center m-5 '>
      <input type="text" placeholder='Your Name' className='w-full  capitalize font-semibold border-none outline-none px-[13px] py-[15px] rounded-[10px] bg-[#edf2f8] hover:shadow-lg'/>
      <input type="email" placeholder='Your Email' className='w-full font-medium border-none outline-none px-[13px] py-[15px] rounded-[10px] bg-[#edf2f8] hover:shadow-lg'/>
      <textarea  placeholder='Your Message' className='w-full h-40 md:h-150 font-medium italic  capitalize border-none outline-none px-[13px] py-[15px] rounded-[10px] bg-[#edf2f8] hover:shadow-lg ' ></textarea>
      <button  type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Message</button>
    </div>
  )
}

export default Inputs
