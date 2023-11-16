import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Cover = () => {
  return (
    //  p-4
    <div id='home' className='relative h-42 bg-[url(/bg.jpeg)] bg-no-repeat bg-center bg-cover mx-2 flex justify-center items-center rounded-lg'>
        <div className='flex flex-row w-full items-center p-8 m-3 gap-6 bg-opacity-50 backdrop-filter backdrop-blur-sm justify-center border border-opacity-25 border-solid border-white rounded-md'>
            <img src="/dp.jpg" width={110} height={110} className='rounded-full w-32 h-32 object-cover border-4 border-amber-600' alt="" loading='lazy'/>
            <div className='sm:flex flex-row justify-between w-full text-white '>
                <div>
                <h1 className='text-xl font-bold'>Sparsh Sharma</h1>
                <p>Software Developer</p>
                </div>
                <button className='bg-[#14131A] p-3 rounded-md hover:bg-lime-600 duration-300'>Follow on LinkedIn<FontAwesomeIcon icon={faLinkedinIn} size="lg" className='mx-2 mt-[-2.8px]' /></button>
            </div>
        </div>
    </div>
  )
}

export default Cover