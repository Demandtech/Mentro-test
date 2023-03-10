import React from 'react'
import styled from 'styled-components'


const Slide = ({
  name,
  position,
  rate,
  content,
  img,
  index,
  slideIndex,
  setIndex,
}) => {
  let slideImg = 'img'
  if (slideIndex == index) {
    slideImg = 'active-img'
  }
  return (
    <section className='slide-wrapper'>
      
    </section>
  )
}

const Wrapper = styled.article`
  background: white;
`

export default Slide
