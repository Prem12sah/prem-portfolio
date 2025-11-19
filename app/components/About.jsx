import Image from 'next/image'
import {assets, infoList, toolsData} from '@/assets/assets'
import React from 'react'
import {motion} from "motion/react"

const About = ({isDarkMode}) => {
   return (
    <motion.div id='about' className ='w-full px-[12%] py-20 scroll-mt-20 relative'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
      {/* Background decorative elements */}
      <div className='absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl'></div>
      <div className='absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-2xl'></div>
      
      <motion.h4 
       initial={{opacity:0, y:-20}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.5, delay:0.3}}
       className='text-center mb-2 text-lg font-Ovo gradient-text'
      > 
        Introduction
      </motion.h4>
      
      <motion.h2
       initial={{opacity:0, y:-20}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.5, delay:0.5}} 
       className='text-center text-5xl font-bold mb-4'
      >
        About me
      </motion.h2>

    <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:0.8}} 
     className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
    >
        <motion.div
         initial={{opacity:0, scale:0.9}}
         whileInView={{opacity:1, scale:1}}
         transition={{duration:0.6}} 
         className='relative'
        > 
          <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-lg opacity-30'></div>
          <Image 
            src={assets.user_image} 
            alt="user" 
            className='w-64 sm:w-80 rounded-3xl relative z-10 shadow-glow dark:shadow-glow-dark' 
          />
        </motion.div>
        
        <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6, delay:0.8}}  
         className='flex-1'
        >
          <p className='mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
            I'm a passionate Full Stack Web Developer with a strong focus on building responsive, user-friendly websites and powerful backend systems. From designing sleek interfaces to developing robust server-side logic, I create complete web solutions that are fast, functional, and scalable. Let's turn ideas into interactive digital experiences.
          </p>
          
          <motion.ul 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.8, delay:1}} 
           className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-8'
          >
            {infoList.map(({icon, iconDark, title , description},index)=>(
                <motion.li 
                  whileHover={{scale:1.05, y: -5}}
                  className='glass dark:glass-dark rounded-xl p-6 cursor-pointer hover:shadow-glow dark:hover:shadow-glow-dark smooth-transition border border-gray-200 dark:border-gray-700' 
                  key={index}
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4'>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6'/>
                  </div>
                  <h3 className='mb-3 font-semibold text-gray-800 dark:text-white text-lg'>{title}</h3>
                  <p className='text-gray-600 text-sm dark:text-gray-300 leading-relaxed'>{description}</p>
                </motion.li>
              ))}
          </motion.ul>
          
          <motion.h4
           initial={{y:0, opacity:0}}
           whileInView={{y:0, opacity:1}}
           transition={{delay:1.3, duration:0.5}} 
           className='mb-6 text-xl font-semibold text-gray-800 dark:text-white'
          >
            Tools I use
          </motion.h4>
          
          <motion.ul 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.6, delay:1.5}} 
           className='flex items-center gap-4 sm:gap-6 flex-wrap'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1, y: -3 }}
                className='relative w-14 h-14 sm:w-16 sm:h-16 glass dark:glass-dark rounded-xl flex items-center justify-center cursor-pointer hover:shadow-glow dark:hover:shadow-glow-dark smooth-transition border border-gray-200 dark:border-gray-700 group'
                key={index}
              >
                <Image src={tool.img} alt={tool.name} className='w-6 sm:w-8' />
                <span className='absolute left-1/2 -translate-x-1/2 bottom-[-2.2rem] px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20'>
                  {tool.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default About 