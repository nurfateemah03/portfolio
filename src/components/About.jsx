import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#040228] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className=' sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff8482]'>About</p>
                </div>
                <div>  </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className=' sm:text-right text-4xl font-bold '>
                    <p>Hi. Please take a look around</p>
            
                </div>
                <div>
                    <p>  My academic journey has exposed me to a variety of programming languages, algorithms, and mathematical theories, allowing me to develop a strong foundation in the field.

Outside of the classroom, I am a creative individual with a love for photography and graphic design. I also actively participate in community service projects and am dedicated to giving back to my community.

I am eager to continue my professional development and make a meaningful contribution to the tech industry. Looking for opportunities to work with innovative companies and individuals who are shaping the future.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About