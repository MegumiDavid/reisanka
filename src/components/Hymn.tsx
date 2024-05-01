import { StanzaType, useHymnStore } from '../state'
import { Show } from './utils'

export function Hymn() {
  const { currentHymn } = useHymnStore(state => ({
    currentHymn: state.currentHymn
  }))

  return (
    <main className="max-w-[800px] mt-14 pb-12 mx-auto px-5 scroll-auto">
      <h1 className="text-3xl font-semibold text-center">
        {currentHymn.number} - {currentHymn.title}
      </h1>
      <div className="mt-8 sm:max-w-[400px] sm:mx-auto">
        {currentHymn.stanzas.map(stanza => (
          <Stanza key={Math.random().toString(36)} title={stanza.title} lyric={stanza.lyric} />
        ))}
      </div>
    </main>
  )
}

interface StanzaProps extends StanzaType {}

export function Stanza(props: StanzaProps) {
  return (
    <div className="mb-8">
      <Show when={props.title}>
        <p className="italic text-gray-500 font-light mb-1">({props.title!})</p>
      </Show>
      {props.lyric.map((line, index) => (
        <p key={`${index}`}>{line}</p>
      ))}
    </div>
  )
}
