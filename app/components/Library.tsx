'use client'
import { useAtom } from 'jotai';
import React from 'react'
import Logo from './Logo'
import SearchForm from './SearchForm'
import SongList from './SongList'
import sidebarAtom from '../states/sidebarAtom'

import { motion } from 'framer-motion'

// box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 8px 0px 16px rgba(0, 0, 0, 0.08);

export default function Library() {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom)
  
  const sidebarAnime = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100%" },
  }

  return (
    <motion.div 
      variants={sidebarAnime} 
      animate={`${isOpen ? 'open' : 'closed'}`}  
      transition={{ duration: 0.7, default: { ease: "linear" } }}
      className={`fixed top-0 h-full lg:w-96 md:w-[95%] w-[95%] bg-gradient-to-bl from-primary-200 to-primary-300 shadow-2xl`}>
        <Logo />
        <SearchForm />
        <SongList />
    </motion.div>
  )
}

// TODO: scrollba