import React from 'react'
import { useLocation } from 'react-router-dom'
import { CharacterInfo } from '../components/CharacterInfo/CharacterInfo'
import { Navback } from '../components/Navback/Navback'

export const Details = () => {
  const location = useLocation()
  const { id } = location.state

  return (
    <>
      <Navback />
      <CharacterInfo id={id} />
    </>
  )
}
