import React from 'react'
import MultiRangeSlider from './MultiRangeSlider'

const Rank = () => {
  return (
    <div className="  w-[24.688rem]  ">
      <h1 className='text-[#A7B4CA] my-2 px-2'>Rank</h1>
      <MultiRangeSlider  min={0}
      max={243}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
    </div>
  )
}

export default Rank
