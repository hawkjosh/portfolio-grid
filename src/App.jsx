import React from 'react'

import './assets/styles/App.css'

import dumpsterFire from './assets/images/dumpster-fire.svg'
import twitter from './assets/images/twitter.svg'
import youtube from './assets/images/youtube.svg'
import codepen from './assets/images/codepen.svg'
import rightArrow from './assets/images/right-arrow.svg'
import leftArrow from './assets/images/left-arrow.svg'

export default function App() {

  let activeIndex = 0

  const slides = document.getElementsByTagName("article")
  
  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)

    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
          
    currentSlide.dataset.status = "after"
    
    nextSlide.dataset.status = "becoming-active-from-before"
    
    setTimeout(() => {
      nextSlide.dataset.status = "active"
      activeIndex = nextIndex
    })
  }

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)

    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
    
    currentSlide.dataset.status = "before"
    
    nextSlide.dataset.status = "becoming-active-from-after"
    
    setTimeout(() => {
      nextSlide.dataset.status = "active"
      activeIndex = nextIndex
    })
  }
  
  return (
    <>
      <nav data-toggled='false' data-transitionable='false'>

        <div id='nav-logo-section' className='nav-section'>
          <a href='#'>
            <img src={dumpsterFire} alt='Dumpster Fire Icon' />
          </a>
        </div>

        <div id='nav-link-section' className='nav-section'>
          <a href='#'>ABOUT</a>
          <a href='#'>WORK</a>
        </div>

        <div id='nav-social-section' className='nav-section'>
          <a href='#'>
            <img src={twitter} alt='Twitter Icon' />
          </a>
          <a href='#'>
            <img src={youtube} alt='YouTube Icon' />
          </a>
          <a href='#'>
            <img src={codepen} alt='Codepen Icon' />
          </a>
        </div>

        <div id='nav-contact-section' className='nav-section'>
          <a href='#'>GET IN TOUCH</a>
        </div>

      </nav>
  
      <main>

        <article data-index='0' data-status='active'>
          <div className='article-image-section article-section' />
          <div className='article-info-section'>
            <div className='article-title-section article-section'>
              <h2>Slide 1</h2>
            </div>
            <div className='article-description-section article-section'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, omnis alias, exercitationem modi ipsum dolorem minus ratione sequi autem odit animi, labore laboriosam consequatur facilis delectus molestias.</p>
            </div>
            <div className='article-nav-section article-section'>
              <button className='article-nav-button' type='button' onClick={handleLeftClick}>
                <img src={leftArrow} alt='Left Arrow Icon' />
              </button>
              <button className='article-nav-button' type='button' onClick={handleRightClick}>
                <img src={rightArrow} alt='Right Arrow Icon' />
              </button>
            </div>
          </div>
        </article>

        <article data-index='1' data-status='inactive'>
          <div className='article-image-section article-section' />
          <div className='article-info-section'>
            <div className='article-title-section article-section'>
              <h2>Slide 2</h2>
            </div>
            <div className='article-description-section article-section'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, omnis alias, exercitationem modi ipsum dolorem minus ratione sequi autem odit animi, labore laboriosam consequatur facilis delectus molestias.</p>
            </div>
            <div className='article-nav-section article-section'>
              <button className='article-nav-button' type='button' onClick={handleLeftClick}>
                <img src={leftArrow} alt='Left Arrow Icon' />
              </button>
              <button className='article-nav-button' type='button' onClick={handleRightClick}>
                <img src={rightArrow} alt='Right Arrow Icon' />
              </button>
            </div>
          </div>
        </article>

        <article data-index='2' data-status='inactive'>    
          <div className='article-image-section article-section' />
          <div className='article-info-section'>
            <div className='article-title-section article-section'>
              <h2>Slide 3</h2>
            </div>
            <div className='article-description-section article-section'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, omnis alias, exercitationem modi ipsum dolorem minus ratione sequi autem odit animi, labore laboriosam consequatur facilis delectus molestias.</p>
            </div>
            <div className='article-nav-section article-section'>
              <button className='article-nav-button' type='button' onClick={handleLeftClick}>
                <img src={leftArrow} alt='Left Arrow Icon' />
              </button>
              <button className='article-nav-button' type='button' onClick={handleRightClick}>
                <img src={rightArrow} alt='Right Arrow Icon' />
              </button>
            </div>
          </div>
        </article>

        <article data-index='3' data-status='inactive'>    
          <div className='article-image-section article-section' />
          <div className='article-info-section'>
            <div className='article-title-section article-section'>
              <h2>Slide 4</h2>
            </div>
            <div className='article-description-section article-section'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, omnis alias, exercitationem modi ipsum dolorem minus ratione sequi autem odit animi, labore laboriosam consequatur facilis delectus molestias.</p>
            </div>
            <div className='article-nav-section article-section'>
              <button className='article-nav-button' type='button' onClick={handleLeftClick}>
                <img src={leftArrow} alt='Left Arrow Icon' />
              </button>
              <button className='article-nav-button' type='button' onClick={handleRightClick}>
                <img src={rightArrow} alt='Right Arrow Icon' />
              </button>
            </div>
          </div>
        </article>

      </main>
    </>
  )
}