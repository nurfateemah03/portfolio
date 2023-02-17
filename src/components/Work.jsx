import React from 'react'
import { Route } from 'react-router-dom';
import WorkDetails from './WorkDetails';
import work from '../assets/Work.jpg'
import code1 from '../assets/maxresdefault.jpg'
import code3 from '../assets/R.jpeg'
import code2 from '../assets/OIP.jpeg'
import {Link} from 'react-scroll';



const Work = () => {
  return (
    <div name='work' className='w-full  md:h-screen text-white bg-[#040228]'>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-[#ff8482]'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{ backgroundImage: `url(${code3})` }} 
                className='shadow-lg shadow-[#010c16] group container rounde-md flex justify-center items-center mx-auto content-div'> 
                   
                   
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                    Battleship
                        </span>
                        <div className='pt-8 text-center'>
                       {/* <a href="/">
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg text-center'>Details</button>
                        </a>     */}
                        <a href="https://github.com/nurfateemah03/NimGame">
                        <button  className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg text-center'>Code</button>
                        </a>  
                        </div>
                    </div>
                </div>


                <div 
                style={{ backgroundImage: `url(${code2})` }} 
                className='shadow-lg shadow-[#010c16] group container rounde-md flex justify-center items-center mx-auto content-div'> 
                   
                   
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                    Voting Simulation
                        </span>
                        <div className='pt-8 text-center'>
                     {/* <Link to= '/WorkDetails' className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg text-center'>
                  Details
                  </Link> */}
                          
                        <a href="https://github.com/nurfateemah03/Voting-Election">
                        <button  className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg text-center'>Code</button>
                        </a>  
                        </div>
                    </div>
                </div>
                <div 
                style={{ backgroundImage: `url(${code1})` }} 
                className='shadow-lg shadow-[#010c16] group container rounde-md flex justify-center items-center mx-auto content-div'> 
                   
                   
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                   Nim Game
                        </span>
                        <div className='pt-8 text-center'>
                       {/* <a href="/">
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg text-center'>Details</button>
                        </a>     */}
                        <a href="https://github.com/nurfateemah03/BattleShip">
                        <button  className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg text-center'>Code</button>
                        </a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work