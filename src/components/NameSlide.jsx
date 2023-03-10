import React from 'react'
import { details } from '../data'

const NameSlide = ({index}) => {
  return (
    <div className='names-wrapper'>
      {details.map((sl, i) => {
        return (
          <div
            className={`name-btn ${index === i ? 'active-name' : ''}`}
            style={{transform:`translateX(${100 * (i - index)}%)`}}
          >
            <p>{sl.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default NameSlide