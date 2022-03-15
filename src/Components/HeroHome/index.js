import React from 'react'
import './Hero.css'
import hero from '../Images/purp2.svg'
import list from '../Images/purp.svg'
const Hero = () => {
  return (
    <div className="web">
      <div className='hero'>
          <div className="quest-hero">
            <div className="text">
              <h2 className='hero-title'>Quest helps teams move work forward.</h2>
              <p className='hero-text'>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with quest.</p>
            </div>
            <div className="photo">
              <img src={hero} alt="" height={450} />
            </div>
          </div>

          <div className="mid-section">
              <h1 className='mid-text'>It’s more than work. It’s a way of working together.</h1>
              <p className='mid-p'>Start with a Quest board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
              <img className='mid-photo' src={list} alt="" />
              <p className='join'>Join over 1,000,000 teams worldwide that are using Quest to get more done.</p>
          </div>
      </div>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 mt-5 px-xl-5 purp">
      
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      
      <div>
        <a href="#!" class="text-white me-4" >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
      </div>
      
    </div>
    </div>
  )
}

export default Hero