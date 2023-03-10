import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { details } from '../data'
import Stars from './Stars'
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'
import NameSlide from './NameSlide'

const Main = () => {
  const [index, setIndex] = useState(0)
  const [sliders, setSlider] = useState(details)
  console.log(sliders)

  useEffect(() => {
    const lastIndex = sliders.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [sliders, index])
  console.log(sliders)
  return (
    <main className='main-container'>
      <div className='bg-wrapper'>
        <div className='dot-circle'>
          <div className='smal-img-wrapper'>
            {sliders.map((sl, ind) => {
              return (
                <div key={ind} className={`pag-img ${ind === index ? 'active-pag' : ''}`}>
                  <img src={sl.img} alt={sl.name} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {sliders.map((slide, slideIndex) => {
        const { rate, content, img, name, position, id } = slide
        let pos = 'slider'
        if (slideIndex === index) {
          pos = 'active-Slide'
        }
        return (
          <section key={id} className={`slide-wrapper ${pos}`}>
            <article className='left'>
              <div className='left-wrapper'>
                <p className='rate'>{rate}</p>
                <div className='stars'>
                  <Stars rate={rate} />
                </div>
                <h1 className='name'>{name}</h1>
                <h2 className='position'>{position}</h2>
                <p className='content'>{content}</p>
                <a href='/' className='book'>
                  Book a session
                </a>
              </div>
            </article>
            <article className='right'>
              <div className='right-wrapper'>
                <button
                  className='nav-btn'
                  onClick={() => {
                    setIndex(index - 1)
                  }}
                >
                  <ArrowIcon className='icon' />
                </button>

                <div className='img-wrapper'>
                  <img className='img' src={img} alt='' />
                </div>

                <button
                  className={`nav-btn `}
                  onClick={() => {
                    setIndex(index + 1)
                  }}
                >
                  <ArrowIcon className='icon' />
                </button>
              </div>
              <NameSlide index={index} />
            </article>
          </section>
        )
      })}
    </main>
  )
}

export default Main
