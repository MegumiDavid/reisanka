import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import LogoDark from './LogoDark'

export default function Nav() {
  return (
    <div className='h-15 w-full min-h-[10vh]'>
        <div className='flex items-center justify-between'>
            <LogoDark />
            <div className='flex items-center mx-10 mt-8'>
                    {/* <button>
                        <IoMdSettings className="text-2xl" />
                    </button> */}
                <div 
                    className='ml-8 w-12 h-12 rounded-full bg-profile bg-no-repeat bg-cover bg-center'>    
                </div>
            </div>
        </div>
    </div>
  )
}
