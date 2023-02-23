import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'


export default function SearchForm() {
  return (
    <form className='mt-20 mx-10 flex'>
        <input 
          type="text" 
          className='w-5/6 bg-transparent border-4 border-dark-600 py-3 px-5 rounded-tl-lg rounded-bl-lg text-white font-medium outline-none placeholder-white' 
        />
        <button 
          type="submit" 
          className='w-1/6 rounded-tr-lg rounded-br-lg bg-dark-600 cursor-pointer'
        >
            <BiSearchAlt2 className='mx-auto text-white text-xl' />
        </button>
    </form>
  )
}
