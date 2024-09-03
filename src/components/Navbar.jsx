import React,{useState} from 'react'
import logo from "../assets/logo.png"
// import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const navItems = [
        { name: 'Home', path: 'home' },
        { name: 'Thrift Book', path: 'home' },
        { name: 'Request Book', path: 'request_book' },
        { name: 'About Us', path: 'about' },
        { name: 'Contact Us', path: 'contact' }
    ]
    const [isMenuOpen,setIsMenuOpen] = useState (false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-black fixed top-0 right-0 left-0'> 
        <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-14 items-center '>
            <a href='' className='text-2xl font-semibold flex  items-center space-x-3 text-dark'>
                <img src={logo} alt='' className=""/>
            </a>
            {/* Showing the navitem using map */}
            <ul className='md:flex space-x-12 hidden '>
                {
                navItems.map(({name,path}) => <a key= {name} href={path} className="block hover:text-gray-300 mt-4s">{name}</a>
                )}
            </ul>
          </div>
            {/* icons and signup */}
            <div className='space-x-12 hidden md:flex items-center'>
                <button className='bg-white border border-dark py-2 px-4 text-black hidden lg:flex items-center hover:text-white hover:bg-black duration-300 transition-all rounded-xl  '>Sign In</button>
                <button className='bg-black border border-dark text-white border-xl py-2 px-4 transition-all duration-300 hover:bg-white hover:text-black rounded-xl'>Create Account</button>
            </div>
            {/* Menu btn only on mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300  " >
                    {
                    isMenuOpen ? (<FaXmark className='w-7 h-7 text-dark'/>): (<FaBars className='w-7 h-7 text-dark'/>)
                    }

                </button>
            </div>
            {/* navitems container */}
            <div className={`space-y-16 px-40 pt-10 pb-10 bg-quaternary mt-8 rounded-lg text-lg  ${ isMenuOpen ? "block fixed top-[72px] right-0 left-0 " : "hidden"}`}>
                    {
                    navItems.map(({name,path}) => <a key ={name} href={path} className='block hover:text-gray-300'>{name} </a>)
                    }
             </div>
        </div>
    </nav>
  )
}

export default Navbar
