import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavBar } from '../components/NavBar/NavBar'
import { NavBarPc } from '../components/NavBarPc/NavBarPc'

export const NavBarResponsive = () => {
  const screen = useMediaQuery({ query: '(min-width: 800px)' })

  return (
    <>
        {
            screen?
                <NavBarPc />
            :
                <NavBar />
        }
    </>
  )
}
