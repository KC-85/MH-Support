import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteFocus() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))

      if (target) {
        target.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [hash, pathname])

  return null
}

export default RouteFocus
