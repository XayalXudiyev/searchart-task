import React from 'react'
import Country from './selections/Country'
import Year from './selections/Year'
import Sector from './selections/Sector'
import Subsector from './selections/Subsector'
import Indicator from './selections/Indicator'
import Rank from './selections/Rank'

const Selection = () => {
  return (
    <div className=' flex justify-between mx-auto '>
      <Country />
      <Year />
      <Sector />
      <Subsector />
      <Indicator />
      <Rank />
    </div>
  )
}

export default Selection