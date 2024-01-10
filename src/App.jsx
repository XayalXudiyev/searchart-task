import React from 'react'
import Sector from './components/Sector'
import Country from './components/Country'
import Subsector from './components/Subsector'
import Indicator from './components/Indicator'
import Rank from './components/Rank'
import Year from './components/Year'

export default function App() {


  return (
    <div className='App bg-[#051124] h-screen'>
      <div className='px-5 flex justify-between mx-auto pt-4'>
        <Country />
        <Year />
        <Sector />
        <Subsector />
        <Indicator />
        <Rank />
      </div>
    </div>
  )
}
