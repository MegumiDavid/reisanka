import Library from './components/Library'
import Nav from './components/Nav'
import SongPlayer from './components/SongPlayer'

export default function Home() {
  return (
    <div className='relative'>
      <Nav />
      <Library />
      <SongPlayer />
      <div className='bg-slate-200'></div>
    </div>
  )
}
