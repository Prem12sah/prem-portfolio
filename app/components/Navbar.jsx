import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'motion/react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsSchroll] = useState(false)
    const sideMenuRef = useRef();
    
    const openMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (scrollY > 50){
               setIsSchroll(true)
            } else{
                setIsSchroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full' />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        isScroll 
          ? "glass shadow-lg dark:glass-dark" 
          : "bg-transparent"
      }`}>
        <a href="#top" className='hover:scale-105 smooth-transition'>
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo}  
            alt='Logo' 
            className='w-28 sm:w-32 cursor-pointer mr-8 sm:mr-14' 
          />
        </a>
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
          isScroll 
            ? "glass dark:glass-dark" 
            : "bg-white/80 shadow-lg backdrop-blur-sm dark:bg-black/20 dark:border dark:border-white/20"
        }`}>
            {[
              { href: "#top", label: "Home" },
              { href: "#about", label: "About me" },
              { href: "#services", label: "Services" },
              { href: "#work", label: "My Work" },
              { href: "#contact", label: "Contact me" }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  className='font-Ovo hover:text-purple-600 dark:hover:text-purple-400 smooth-transition relative group' 
                  href={item.href}
                >
                  {item.label}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full smooth-transition'></span>
                </a>
              </li>
            ))}
        </ul>
        
        <div className='flex items-center gap-4'>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={()=> setIsDarkMode(prev=>!prev)}
              className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 smooth-transition'
            >
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme toggle" className='w-6'/>
            </motion.button>
            
            <a 
              href="#contact" 
              className='hidden lg:flex items-center gap-3 px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full ml-4 font-Ovo hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 smooth-transition'
            >
              Contact 
              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
            </a>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 smooth-transition' 
              onClick={openMenu}
            >
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className='w-6'/>
            </motion.button>
        </div>
        
        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen glass dark:glass-dark transition-all duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className='w-5 cursor-pointer hover:scale-110 smooth-transition'/>
            </div>
            {[
              { href: "#top", label: "Home" },
              { href: "#about", label: "About me" },
              { href: "#services", label: "Services" },
              { href: "#work", label: "My Work" },
              { href: "#contact", label: "Contact me" }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  className='font-Ovo text-lg hover:text-purple-600 dark:hover:text-purple-400 smooth-transition block py-2' 
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
