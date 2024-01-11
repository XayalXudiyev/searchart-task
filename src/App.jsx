import React from 'react'
import RankDifference from './components/content/RankDifference'
import Selection from './components/Selection'

export default function App() {


  return (
    <div className='App bg-[#051124] h-screen  flex-row p-5'>
      <div >
        <Selection />
      </div>
      <RankDifference />
    </div>
  )
}
