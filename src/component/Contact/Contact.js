import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
  return (
    <div id='Contact' className=' text-white font-nav p-7'>
      <div className=' flex ms-4 justify-between max-md:flex-col'>
        <div className='flex-col'>
        <h1 className='text-4xl'>Contact us</h1>
         <div className='flex mt-3'>

          <img src='/instagram.png' className='w-6 me-2'/>
          <img src='/facebook.png' className='w-6 me-2'/>
          <img src='/youtube.png' className='w-6 me-2'/>
         </div>
        </div>
        <div className='me-4 w-1/4 text-right max-md:w-full max-md:text-left max-md:mt-5'>
          <h1>Dapatkan hadiah menarik dan kebanggaan menjadi juara di turnamen Mobile Legends kami.</h1>
        </div>
      </div>
      <div className='flex justify-center max-md:mt-5'>
        <h1 className='flex'>Copyright <FontAwesomeIcon className='w-6 mx-1' icon={faCopyright}/> 2023 by PilipsCode</h1>
      </div>
    </div>
  )
}

export default Contact