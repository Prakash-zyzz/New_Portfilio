import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-black bg-opacity-85 flex flex-col justify-center items-center'>
      <div className='flex justify-center py-20'>
        <h1 className='text-[30px] font-light font-Athiti text-white'><span className='font-extrabold'>C</span>ontact</h1>
      </div>
      <div className='max-w-[1200px] w-full grid sm:grid-cols-2  px-4'>
        <div className='flex justify-center'>
          <div>
            <h1 className='text-[25px] font-light font-Athiti text-white'>Get In Touch</h1>
            <form method='POST' action="https://getform.io/f/1ff721c4-0000-4e8f-aa68-1d74d53ace19" className='flex flex-col max-w-[600px] w-full sm:white-space:nowrap py-8'>
            {/* Add style to align placeholder text to the left */}
            <input className='bg-[#999999] w-[500px] px-2 py-2 rounded-sm ' type="text" placeholder='Name' name='name' style={{textAlign: 'left'}} />
            <input className='my-4 py-2 bg-[#999999] px-2 rounded-sm ' type="email" placeholder='Email' name='email' style={{textAlign: 'left'}} />
            <textarea className='bg-[#999999] px-2 py-2 border rounded-sm ' name="message" rows="10" placeholder='Message' style={{textAlign: 'left'}}></textarea>
            <div className='py-4'>
            <button className='px-6 py-4 bg-[#BAC964] rounded-full font-Athiti text-white' >SEND MESSAGE</button>
            </div>
            </form>
          </div>
        </div>
        <div className='flex justify-center text-center '>
          <div>
            <h1 className='text-[25px] font-light font-Athiti text-white'>My Contact Details</h1>
            <div className='py-8'>
              <div className='text-[16px] font-medium font-Athiti'>
              <p className='text-[#2C3E50]'>EMAIL</p>
              <p className='py-2 text-[#999999] font-light'>prakashganes08@gmail.com</p>
              </div>
              <div className='py-4 text-[16px] font-medium font-Athiti'>
              <p className='text-[#2C3E50]'>PHONE</p>
              <p className='py-2 text-[#999999] font-light'>+91-7904565947</p>
              </div>
              <div className='text-[16px] font-medium font-Athiti'>
              <p className='text-[#2C3E50]'>Address</p>
              <p className='pt-2 text-[#999999] font-light'>Thirumullaivoyal,Avadi</p>
              <p className='text-[#999999] font-light'>Chennai-62.</p>
              <p className='text-[#999999] font-light'>India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
