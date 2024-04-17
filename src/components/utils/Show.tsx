interface ShowProps {
  when: any
  fallback?: React.ReactNode
  children: React.ReactNode
}

export function Show(props: ShowProps) {
  return Boolean(props.when) ? props.children : props.fallback ? props.fallback : <></>
}
