import React from 'react'

import './Grid.css'

import dumpsterFire from './assets/img/dumpster-fire.svg'
import twitter from './assets/img/twitter.svg'
import youtube from './assets/img/youtube.svg'
import codepen from './assets/img/codepen.svg'

export default function Grid() {
  return (
    <>
      <nav data-toggled='false' data-transitionable='false'>
        <div id='nav-logo-section' className='nav-section'>
          <a href='#'>
            <img src={dumpsterFire} alt="Dumpster Fire Icon" />
          </a>
        </div>
        {/* <div id='nav-mobile-section'> */}
          <div id='nav-link-section' className='nav-section'>
            <a href='#'>ABOUT</a>
            <a href='#'>WORK</a>
          </div>
          <div id='nav-social-section' className='nav-section'>
            <a href='#'>
              <img src={twitter} alt="Twitter Icon" />
            </a>
            <a href='#'>
              <img src={youtube} alt="YouTube Icon" />
            </a>
            <a href='#'>
              <img src={codepen} alt="Codepen Icon" />
            </a>
          </div>
          <div id='nav-contact-section' className='nav-section'>
            <a href='#'>GET IN TOUCH</a>
          </div>
        {/* </div> */}
        {/* <button id="nav-toggle-button" type="button" onclick="handleNavToggle()">
          <span>Menu</span>
          <i class="fa-solid fa-bars"></i>
        </button> */}
      </nav>
  
      <main>
        <article data-index='0' data-status='active'>
          <div className='article-image-section article-section'>
          </div>
          <div className='article-description-section article-section'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, omnis alias, exercitationem modi ipsum dolorem minus ratione sequi autem odit animi, labore laboriosam consequatur facilis delectus molestias.</p>
          </div>
          <div className='article-title-section article-section'>
            <h2>sed velit dignissim</h2>
          </div>
          <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick()">
              <i class="fa-light fa-arrow-left-long"></i>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick()">
              <i class="fa-light fa-arrow-right-long"></i>
            </button>
          </div>
        </article>
        <article data-index="1" data-status="inactive">    
          <div class="article-image-section article-section"></div>
          <div class="article-description-section article-section">
            <p>A place where books hang out waiting to be grabbed. But don't be too grabby now, ya hear.</p>
          </div>
          <div class="article-title-section article-section">
              <h2>Wicked Cool Library Shelves</h2>
            <i class="fa-light fa-plus-large"></i>
          </div>
          <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick()">
              <i class="fa-light fa-arrow-left-long"></i>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick()">
              <i class="fa-light fa-arrow-right-long"></i>
            </button>
          </div>
        </article>
        <article data-index="2" data-status="inactive">    
          <div class="article-image-section article-section"></div>
          <div class="article-description-section article-section">
            <p>The neatest lighthouse you ever saw. Ehh, actually it's kind of messy. But that's why the pic is of the outside.</p>
          </div>
          <div class="article-title-section article-section">
            <h2>Neato Toledo Lighthouse</h2>
            <i class="fa-light fa-plus-large"></i>
          </div>
          <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick()">
              <i class="fa-light fa-arrow-left-long"></i>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick()">
              <i class="fa-light fa-arrow-right-long"></i>
            </button>
          </div>
        </article>
        <article data-index="3" data-status="inactive">    
          <div class="article-image-section article-section"></div>
          <div class="article-description-section article-section">
            <p>
              The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn't really a heart, per se.
            </p>
          </div>
          <div class="article-title-section article-section">
            <h2>Super Space Blob</h2>
            <i class="fa-light fa-plus-large"></i>
          </div>
          <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick()">
              <i class="fa-light fa-arrow-left-long"></i>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick()">
              <i class="fa-light fa-arrow-right-long"></i>
            </button>
          </div>
        </article>
      </main>
    </>
  )
}