import React from 'react'
import { BsSoundwave } from 'react-icons/bs'

export default function Song() {
  return (
    <div className='mx-10 bg-white flex items-center justify-between rounded-lg px-4 py-4 mb-5  cursor-pointer hover:bg-primary-600 hover:text-white'>
        <div className='flex items-center justify-between'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-primary-200 mr-5 font-bold text-white text-md'>
                58
            </div>
            <div className='self-center font-bold text-md'>Only one yell</div>
        </div>
        <BsSoundwave 
            className='text-3xl'
        />
    </div>
  )
}
