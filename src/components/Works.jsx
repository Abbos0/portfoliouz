import React from 'react'

const Works = () => {
  return (
    <div>
      <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 md:my-16 justify-center'>
            <span>My</span>
            <span className='text-[#313bac]'>Skills</span>
        </div>
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <h1>StaffDocs - Personnel documents database and generator</h1>
                    <p>Apr - July 2024</p>
                    <p>An advanced service designed to automate the routine tasks of personnel records management. It enables the secure storage of employee data and streamlines the creation of documents in Word format. With its sophisticated automation features, the system effortlessly integrates current company information and individual employee details into documents, ensuring accuracy and efficiency. Moreover, it offers the flexibility to manage records for multiple organizations, making it an indispensable tool for businesses looking to optimize their human resources processes."</p>
                    <b>Stack:</b>
                    <p>React, TypeScript, Redux Toolkit, Ant Design, Node.js, Express, Sequelize, PostgreSQL, AWS</p>
                    <button  type='button'  class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Downlaod CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works
