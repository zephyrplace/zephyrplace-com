import React from 'react'

// Native
import { useMediaQuery } from 'react-responsive'

// Private
import Desktop from './Desktop/Menu'
import Mobile from './Mobile/Menu'

export default function Menu () {
  const isMobile = useMediaQuery({ query: '(max-width: 1300px)' })

  return isMobile ? <Mobile /> : <Desktop />
}
