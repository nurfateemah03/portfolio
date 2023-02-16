import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';



const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#040228]'>
            {/*containter */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ff8482] font-bold'>Hi! I am </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#738ab5de]'>Nur Fateemah,</h1>

                <h2 className='text-4xl sm:text-4xl font-bold text-[#c3d3f2de]'>a Computer Science Student at WPI</h2>
                <p className='text-[#ffffff] py-4 max-w-[700px]'> I am an aspiring software engineer and data scientist with a passion for solving complex
                 problems and creating impactful technology. 
                 </p>

                <div>``
                    <button className='text-[white] group border-2 px-6 py-3 my-2  flex items-center hover:bg-[#ff8482] hover:border-[#ff8482] hover:text-[#ffffff]'> <Link  to='work'  smooth={true} duration={500} >
           View Work
        </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                     </button>
                </div>
            </div>
    </div>
  )
}

export default Home