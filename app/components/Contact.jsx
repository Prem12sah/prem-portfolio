
import Image from 'next/image'
import { assets } from '../../assets/assets'
import React, { useState} from 'react'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b8dbac5-9ea2-4f44-b365-70fe56f63d52");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='contact'  
    className='w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl'></div>
      <div className='absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-2xl'></div>
      
      <motion.h4 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className='text-center mb-2 text-lg font-Ovo gradient-text'
      >
        Connect with me
      </motion.h4>

      <motion.h2 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.5, duration:0.5}}
      className='text-center text-5xl font-bold mb-4'
      >
        Get in touch
      </motion.h2>
      
      <motion.p 
      initial={{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{delay:0.7, duration:0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-16 text-lg text-gray-600 dark:text-gray-300 leading-relaxed'
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form 
      initial={{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{delay:0.9, duration:0.5}}
      onSubmit={onSubmit} 
      className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-auto gap-6 mb-8'>
          <motion.input
            initial={{x:-50, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{delay:1.1, duration:0.6}}
            type="text" 
            placeholder='Enter your name' 
            required
            className='flex-1 p-4 outline-none border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-purple-500 dark:focus:border-purple-400 smooth-transition text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' 
            name='name' 
          />
          
          <motion.input
            initial={{x:50, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{delay:1.2, duration:0.6}}
            type="email" 
            placeholder='Enter your email' 
            required
            className='flex-1 p-4 outline-none border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-purple-500 dark:focus:border-purple-400 smooth-transition text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' 
            name='email'
          />
        </div>

        <motion.textarea
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{delay:1.3, duration:0.6}}
          rows='6' 
          placeholder='Enter your message' 
          required
          className='w-full p-4 outline-none border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-purple-500 dark:focus:border-purple-400 smooth-transition text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none' 
          name='message'
        />
        
        <motion.button 
          whileHover={{scale:1.05, y: -2}}
          whileTap={{scale:0.95}}
          type='submit' 
          className='py-4 px-12 w-max flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mx-auto mt-8 hover:shadow-glow smooth-transition font-semibold'
        >
          Submit now 
          <Image src={assets.right_arrow_white} alt='Submit' className='w-5'/>
        </motion.button>
        
        {result && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-6 text-center text-sm text-gray-600 dark:text-gray-300'
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact
