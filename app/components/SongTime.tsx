import React from 'react'

export default function SongTime() {
  return (
    <div className='w-[90%] mx-auto min-h-[10vh]'>
        <div className='w-full flex items-center'>
            <p className='p-5'>0:00</p>
            <input type="range" className='w-full py-5 cursor-pointer'/>
            <p className='p-5'>2:32</p>
        </div>
    </div>
  )
}
