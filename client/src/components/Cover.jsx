import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Cover = () => {
  return (
    //  p-4
    <div id='home' className='relative h-42 bg-[url(/bg.jpeg)] bg-no-repeat bg-center bg-cover mx-2 flex justify-center items-center rounded-lg'>
        <div className='flex flex-row w-full items-center p-8 m-3 gap-6 bg-opacity-50 backdrop-filter backdrop-blur-md justify-center border border-opacity-25 border-solid border-white rounded-md'>
            <img src="/dp.jpg" width={110} height={110} className='rounded-full w-32 h-32 object-cover border-4 border-amber-600' alt="" loading='lazy'/>
            <div className='sm:flex flex-row justify-between w-full text-white'>
                <div className=''>
                <h1 className='text-xl font-bold'>Sparsh Sharma</h1>  
                <p>Software Developer</p>
                <a href='https://study.iitm.ac.in/ds/index.html' target='_blank' className='font-bold text-md text-red-300 hover:text-red-400 duration-300'>Persuing Bachelors of Science from Indian Insitute of Technology, Madras</a>
                <div className='my-2'>
                  <a href="https://app.onlinedegree.iitm.ac.in/student/23F3003530" target='_blank'><button className='bg-red-400 py-1 px-2 rounded-md hover:bg-red-500 duration-300'>Go to my profile</button></a>
                </div>
                </div>
                <a href="https://www.linkedin.com/in/itssparshiii" target='_blank' className='items-center my-auto'><button className='bg-[#14131A] p-3 rounded-md hover:bg-lime-600 duration-300 '>Follow on LinkedIn<FontAwesomeIcon icon={faLinkedinIn} size="lg" className='mx-2 mt-[-2.8px]' /></button></a>
            </div>
        </div>
    </div>
  )
}

export default Cover
