import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Cplus from '../assets/Cplus.png';
import python from '../assets/python.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/Java.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#040228] text-white'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff8482] '>Skills </p>
            <p className='py-4 font-bold text-2xl'> These are the technologies I have worked with. </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8'>
            <div className=' hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-5 font-bold'>HTML</p>
        </div>
        <div className=' hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                <p className='my-5 font-bold'>CSS</p>
        </div>
        <div className=' hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon"/>
                <p className='my-5 font-bold'>JavaScript</p>
        </div>
        <div className=' hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Cplus} alt="C++ icon"/>
                <p className='my-5 font-bold'>C++, C#</p>
        </div>
        <div className=' hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={python} alt="python icon"/>
                <p className='my-5 font-bold'>Python</p>
        </div>
        <div className=' hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="java icon"/>
                <p className='my-5 font-bold'>Java</p>
        </div>
      
            
        </div>
        </div>
    </div>
  )
}

export default Skills