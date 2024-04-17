import { LogoMenu, Hymn, Tab } from './components'

export default function App() {
  return (
    <div className="m-0 p-0">
      <Tab />
      <div className="px-5 pt-5">
        <nav className="flex flex-row justify-between">
          <LogoMenu isTabOpen={false} />
        </nav>
        <Hymn />
      </div>
    </div>
  )
}
