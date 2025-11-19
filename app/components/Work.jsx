import { workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-20 scroll-mt-20 relative'
    >
      {/* Background decorative elements */}
      <div className='absolute top-20 left-20 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl'></div>
      <div className='absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-2xl'></div>
      
      <motion.h4 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className='text-center mb-2 text-lg font-Ovo gradient-text'
      >
        My portfolio
      </motion.h4>

      <motion.h2 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className='text-center text-5xl font-bold mb-4'
      >
        My Latest Work
      </motion.h2>
      
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7, duration:0.5}}
      className='text-center max-w-3xl mx-auto mt-5 mb-16 text-lg text-gray-600 dark:text-gray-300 leading-relaxed'
      >
        A showcase of my latest full stack creation — blending clean design, responsive layouts, and efficient backend architecture to deliver a complete web solution.
        </motion.p>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9, duration:0.6}}
      className='grid grid-cols-auto my-10 gap-8'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{scale:1.02, y: -5}}
            transition={{duration:0.3}}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-lg hover:shadow-glow dark:hover:shadow-glow-dark smooth-transition'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition'></div>
            
            {/* Project info card */}
            <div className='glass dark:glass-dark w-11/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-6 flex items-center justify-between duration-500 transition-all group-hover:bottom-7 group-hover:scale-105'>
              <div className='flex-1'>
                <h2 className='font-semibold text-gray-800 dark:text-white text-lg mb-1'>{project.title}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-300'>{project.description}</p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow smooth-transition'
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.a 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:1.1, duration:0.5}}
      whileHover={{ scale: 1.05, y: -2 }}
      href="" 
      className='w-max flex items-center justify-center gap-3 text-gray-700 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full py-4 px-12 mx-auto my-20 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 smooth-transition font-semibold'
      >
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-5'/>
      </motion.a>
    </motion.div>
  )
}

export default Work;
