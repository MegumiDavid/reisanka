'use client'

import React from 'react'
import SongDisc from './SongDisc'
import SongController from './SongController'
import SongTime from './SongTime'

import { useAtom } from 'jotai'
import sidebarAtom from '../states/sidebarAtom'

import { motion } from 'framer-motion'

export default function SongPlayer() {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom)

  return (
    <div 
      className={`${isOpen ? 'ml-[24rem]' :'ml-0'} ease-out duration-800`}
    >
      <div className='w-[80%] mx-auto min-h-[60vh] flex flex-col items-center justify-center'>
        <SongDisc />
      </div>
      <div className='w-[80%] mx-auto min-h-[30vh]'>
        <SongTime />
        <SongController />
      </div>
    </div>
  )
}


/*
min-height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
*/