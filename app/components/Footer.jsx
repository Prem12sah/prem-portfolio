import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { motion } from 'motion/react'

const Footer = ({isDarkMode}) => {
  return (
    <footer className='mt-20 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl'></div>
      <div className='absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-2xl'></div>
      
      <div className='text-center relative z-10'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='inline-block'
        >
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt='Logo' 
            className='w-32 sm:w-36 md:w-40 mx-auto mb-0'
          />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className='w-max flex items-center gap-1 mx-auto p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 smooth-transition'
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email' className='w-6'/>
          <span className='text-gray-700 dark:text-gray-300 font-medium'>sah400prem@gmail.com</span>
        </motion.div>
      </div>
      
      <div className='text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mx-[10%] mt-12 py-8'>
        <p className='text-gray-600 dark:text-gray-400 mb-4 sm:mb-0'>
          © 2025 Prem Kumar Sah. All rights reserved
        </p>
        
        <ul className='flex items-center gap-8 justify-center'>
          {[
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prem-sah-b317b6230' },
            { name: 'GitHub', href: 'https://github.com/Prem12sah' },
            { name: 'Twitter', href: 'https://www.linkedin.com/feed/' }
          ].map((social, index) => (
            <motion.li key={index}>
              <motion.a 
                target='_blank' 
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium smooth-transition'
              >
                {social.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
