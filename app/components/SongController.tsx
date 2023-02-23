import React from 'react'

import { GiLoveSong } from 'react-icons/gi'
import { BsFillVolumeUpFill } from 'react-icons/bs'
import { BsPlayFill } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import { RiArrowLeftSLine } from 'react-icons/ri'

export default function SongController() {
  return (
    <div className='min-h-[10vh] w-[80%] mx-auto flex items-center justify-between'>
    <button>
      <GiLoveSong className='text-4xl' />
    </button>
    <div className='flex items-center'>
      <button>
        <RiArrowLeftSLine className='text-4xl' />
      </button>
      <button>
        <BsPlayFill className='text-4xl 2xl:mx-[5rem] lg:mx-[2rem] md:mx-[1rem]' />
      </button>
      <button>
        <RiArrowRightSLine className='text-4xl' />
      </button>
    </div>
    <button>
      <BsFillVolumeUpFill className='text-4xl' />
    </button>
  </div>
  )
}
