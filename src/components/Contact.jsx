import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#040228] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/012b67ef-e1ef-4d38-88ab-716f10191dee' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff8482] text-white'>Contact</p>
            <p className='text-white py-4'> Submit form below or give me an email nurfateemah03@gmail.com</p>
        </div>
        <input className='bg-[#b7b2c42f] text-white' type="text" placeholder=' Name' name='name'/>
        <input className='my-4 p-2 bg-[#b7b2c42f]' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#b7b2c42f]' name="message" rows="10" placeholder=' Message'></textarea>
        <button className='text-white border-2 hover:bg-[#ff8482] hover:border-[#ff8482] px-4 py-3 my-8 mx-auto flex items-center'> Message</button>

      </form>
    </div>
  )
}

export default Contact