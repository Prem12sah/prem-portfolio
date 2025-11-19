import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="services" className ='w-full px-[12%] py-20 scroll-mt-20 relative'
    >
      {/* Background decorative elements */}
      <div className='absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl'></div>
      <div className='absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-2xl'></div>

      <motion.h4 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className='text-center mb-2 text-lg font-Ovo gradient-text'
      > 
        What I offer
      </motion.h4>

      <motion.h2 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.5, duration:0.5}}
      className='text-center text-5xl font-bold mb-4'
      >
        My Services
      </motion.h2>

      <motion.p 
      initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7, duration:0.5}}
      className='text-center max-w-3xl mx-auto mt-5 mb-16 text-lg text-gray-600 dark:text-gray-300 leading-relaxed'
      >
        I am a Web Developer, Passionate and detail-oriented Web Developer with expertise in Java, JavaScript, React, HTML, CSS, and C++.
      </motion.p>
      
      <motion.div 
      initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9, duration:0.6}}
      className='grid grid-cols-auto gap-8 my-10'
      >
             {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                  whileHover={{scale:1.05, y: -10}}
                  className='glass dark:glass-dark rounded-2xl p-8 hover:shadow-glow dark:hover:shadow-glow-dark cursor-pointer smooth-transition border border-gray-200 dark:border-gray-700 relative overflow-hidden group' 
                  key={index}
                > 
                   <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 smooth-transition'></div>
                   
                   <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6'>
                     <Image src={icon} alt="" className='w-8'/>
                   </div>
                   
                   <h3 className='text-xl mb-4 text-gray-800 dark:text-white font-semibold'>{title}</h3>
                   <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>{description}</p>
                   
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     className='flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 smooth-transition cursor-pointer'
                     onClick={() => {
                       // You can add specific actions for each service here
                       // For now, it will scroll to contact section
                       document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                     }}
                   >
                    Read more 
                    <Image alt='' src={assets.right_arrow} className='w-4'/>
                   </motion.button>
                </motion.div>
           ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
