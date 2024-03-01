import React from 'react'
import  { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inputs = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [messagetext, setMessagetext] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email, messagetext);
    const text = `%0A 👦 Username: ${username}  %0A 📩Email:  ${email} %0A  📝 Message: ${messagetext}  `;
    const chatId = -1002128588085;
    const token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsername('');
        setEmail('');
        setMessagetext('');
        toast.success(" Please wait a moment!!!")
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };
  return (
    <div >
      <ToastContainer style={{ width: "400px", height:"20px" }} />
      <form onSubmit={handleSubmit}  className='my-20 flex flex-col gap-5  justify-center items-center m-5 '>
          <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Your Name' className='w-full  capitalize font-semibold border-none outline-none px-[13px] py-[15px] rounded-[10px] bg-[#edf2f8] hover:shadow-lg'/>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' className='w-full font-medium border-none outline-none px-[13px] py-[15px] rounded-[10px] bg-[#edf2f8] hover:shadow-lg'/>
          <textarea value={messagetext}  required onChange={(e) => setMessagetext(e.target.value)}  placeholder='Your Message' className='w-full h-40 md:h-150 font-medium italic  capitalize border-none outline-none px-[13px] py-[15px] rounded-[10px] bg-[#edf2f8] hover:shadow-lg ' ></textarea>
          <button  type="submit" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Message</button>
      </form>
    </div>
  );
};
export default Inputs;