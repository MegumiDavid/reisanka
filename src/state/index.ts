import { create } from 'zustand'
import { hymns, type HymnType } from './hymns'

export * from './hymns'

interface HymnStore {
  currentHymn: HymnType
  selectHymn: (id: string) => void
}

export const useHymnStore = create<HymnStore>(set => ({
  currentHymn: hymns[0],
  selectHymn: id => {
    set(() => {
      const selectedHymnIdx = hymns.findIndex(hymn => hymn.id === id)
      return { currentHymn: hymns[selectedHymnIdx] }
    })
  }
}))

export interface TabOpenStore {
  isOpen: boolean
  toggleIsOpen: () => void
}

export const useTabOpenStore = create<TabOpenStore>(set => ({
  isOpen: false,
  toggleIsOpen: () => set(state => ({ isOpen: !state.isOpen }))
}))
