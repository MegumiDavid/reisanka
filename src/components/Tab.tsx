import { FiSearch } from 'react-icons/fi'
import { LogoMenu } from './Logo'
import { twMerge } from 'tailwind-merge'
import { hymns, useHymnStore, useTabOpenStore } from '../state'
import { useEffect, useRef, useState } from 'react'

export function Tab() {
  const tabRef = useRef(null)

  const { isOpen, toggleIsOpen } = useTabOpenStore(state => ({
    isOpen: state.isOpen,
    toggleIsOpen: state.toggleIsOpen
  }))

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (tabRef.current && !(tabRef.current as Node).contains(e.target as Node)) {
        toggleIsOpen()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const [search, setSearch] = useState('')
  const filteredHymns = search
    ? hymns.filter(
        hymn => hymn.number.toString().includes(search) || hymn.title.toLowerCase().includes(search.toLowerCase())
      )
    : hymns

  return (
    <div
      ref={tabRef}
      className={twMerge(
        'fixed top-0 bottom-0 w-96 bg-primary-400 px-5 pt-5 rounded-e-xl transition-all duration-500',
        isOpen ? 'left-0' : '-left-[120vw]'
      )}
    >
      <LogoMenu isTabOpen={true} />
      <Input state={search} setState={setSearch} />

      <div className="flex flex-col gap-3 mt-3 h-[82.5vh] overflow-y-auto scrollbar-hide rounded-lg">
        {filteredHymns.map(hymn => (
          <HymnCard key={hymn.id} id={hymn.id} number={hymn.number} title={hymn.title} />
        ))}
      </div>
    </div>
  )
}

interface InputProps {
  state: string
  setState: (value: string) => void
}

export function Input(props: InputProps) {
  return (
    <div className="flex flex-row h-12 mt-8">
      <input
        value={props.state}
        onChange={e => {
          props.setState(e.target.value)
        }}
        className="w-[87.5%] rounded-s-md bg-transparent border-4 border-primary-700 outline-none p-4 text-white font-medium"
      />
      <div className="w-[12.5%] rounded-e-lg flex items-center justify-center bg-primary-700 cursor-pointer">
        <FiSearch size={18} color="white" className="-translate-x-[1.5px]" />
      </div>
    </div>
  )
}

interface HymnCardProps {
  id: string
  number: number
  title: string
}

export function HymnCard(props: HymnCardProps) {
  const { currentHymn, selectHymn } = useHymnStore(state => ({
    currentHymn: state.currentHymn,
    selectHymn: state.selectHymn
  }))

  const { toggleIsOpen } = useTabOpenStore(state => ({
    toggleIsOpen: state.toggleIsOpen
  }))

  const isCurrHymn = currentHymn.id === props.id

  return (
    <div
      onClick={() => {
        toggleIsOpen()
        selectHymn(props.id)
      }}
      className={twMerge(
        'w-full px-4 py-3 rounded-lg flex items-center cursor-pointer transition-all duration-500',
        isCurrHymn ? 'bg-white' : 'bg-primary-700'
      )}
    >
      <div className="w-14 h-14 rounded-full bg-primary-400 flex items-center justify-center text-white font-semibold text-xl mr-5">
        {props.number}
      </div>
      <div
        className={twMerge(
          'text-lg font-semibold w-3/4 leading-6 transition-all duration-500',
          isCurrHymn ? 'text-black' : 'text-white'
        )}
      >
        {props.title}
      </div>
    </div>
  )
}
