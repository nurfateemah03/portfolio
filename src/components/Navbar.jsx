import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import{BsFillPersonLinesFill} from 'react-icons/bs'
import  Logo from '../assets/logo1.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick =() => setNav (!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#040228] text-white '>
    

    {/*MEnu */}
        <ul className=' hidden md:flex'>
            <li>
            <Link  to='home' smooth={true} duration={500} className=' hover:text-[#ff8482] my-5 font-bold' >
          Home
        </Link>
            </li>
          
            <li>  <Link  to='about'  smooth={true} duration={500}  className='hover:text-[#ff8482] my-5 font-bold' >
          About
        </Link></li>
            <li>
            <Link  to='skills' smooth={true} duration={500} className='hover:text-[#ff8482] my-5 font-bold' >
          Skills
        </Link>
            </li>
            <li>  <Link  to='work'  smooth={true} duration={500}  className='hover:text-[#ff8482] my-5 font-bold'>
          Work
        </Link></li>
            <li>  <Link  to='contact'  smooth={true} duration={500}  className='hover:text-[#ff8482] my-5 font-bold'>
          Contact
        </Link></li>
        </ul>


    {/*HAmburger */}
    <div  onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars /> : <FaTimes/>}
    </div>

    {/*mobile*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#040228] flex flex-col justify-center items-center'}>
            <li  className="py-6 text-4xl">  <Link onClick ={handleClick}  to='home' smooth={true} duration={500} >
          Home
        </Link></li>
            <li className="py-6 text-4xl"> <Link onClick ={handleClick} to='about'  smooth={true} duration={500} >
          About
        </Link></li>
            <li className="py-6 text-4xl"><Link onClick ={handleClick}  to='skills' smooth={true} duration={500} >
          Skills
        </Link>
        </li>
            <li className="py-6 text-4xl"> <Link onClick ={handleClick} to='work'  smooth={true} duration={500} >
          Work
        </Link></li>
            <li className="py-6 text-4xl"> <Link onClick ={handleClick}  to='contact'  smooth={true} duration={500} >
          Contact
        </Link> </li>
    </ul>


    {/*socialaurger */}
    <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
        <a  className='flex justify-between items-center w-full text-white'
        href ="https://www.linkedin.com/in/nur-fateemah ">
            Linkedin <FaLinkedin size ={30}/>
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a  className='flex justify-between items-center w-full text-white'
        href ="https://github.com/nurfateemah03">
            Github <FaGithub size ={30}/>
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6f71d0]'>
        <a  className='flex justify-between items-center w-full text-white'
        href ="/">
           Email <HiOutlineMail size ={30}/>
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f69a7d]'>
        <a  className='flex justify-between items-center w-full text-white'
        href ="https://docs.google.com/document/d/1CJ9IUfK8l2OIo2pv_285rTgftXUnA1Z4vrXkEjeOjAU/edit?usp=sharing">
          Resume <BsFillPersonLinesFill size ={30}/>
        </a>
    </li>
    
</ul>
    </div>

    </div>
  )
}

export default Navbar
