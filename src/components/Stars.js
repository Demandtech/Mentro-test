import React from 'react'
import { ReactComponent as FullStarIcon } from '../assets/fullstar.svg'
import { ReactComponent as HalfStarIcon } from '../assets/halfstar.svg'


const Stars = ({rate}) => {
 const tempStar = Array.from({length:5}, (_,index)=>{
  const number = index + 0.5
  return (
   <span key={index}>
      {rate >= index + 1 ? <FullStarIcon className='icon'/> : rate >= number ? <HalfStarIcon className='icon'/> : null}
   </span>
  )
 })
  return (
    <div>{tempStar}</div>
  )
}

export default Stars