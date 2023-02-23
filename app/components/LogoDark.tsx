'use client'

import React from 'react'
import { Sofia_Sans } from '@next/font/google'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'

import { useAtom } from 'jotai'
import sidebarAtom from '../states/sidebarAtom'

const opensans = Sofia_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sofiasans'
})

export default function LogoDark() {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom)
  return (
    <div className={`${opensans.variable} font-mono font-semibold flex align-middle mt-8 mx-10`} onClick={() => setIsOpen(!isOpen)}>
      <button className='cursor-pointer'>
        <HiMenu className='text-3xl mr-4 mt-[8px] text-primary-200'/>
      </button>
      <Link href='/' className='relative'>
      <div className='relative z-0'>
        <div className='w-12 h-12 bg-primary-100 rounded-full absolute top-0 left-0'></div>
        <div className='w-12 h-12 bg-primary-100 rounded-full absolute top-1 left-3'></div>
      </div>
      <div className='absolute left-6 top-[8px]'>
        <div className='font-normal text-3xl text-dark-900'>Reisanka</div>
      </div>
      </Link>
    </div>
  )
}
