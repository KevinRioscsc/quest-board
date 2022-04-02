import React from 'react'
import './Hero.css'
import hero from '../Images/purp2.svg'
import list from '../Images/purp.svg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="web">
      <div className='hero '>
          <div className="quest-hero">
            <div className="text">
              <h2 className='hero-title white'>Quest helps YOU move work forward.</h2>
              <p className='hero-text white'>Collaborate, manage projects, and reach new productivity peaks. 
              From high rises to the home office, the way you work is unique—accomplish it all with quest.</p>
              <Link to={'/signin'} className='black' >
                <div className="signin-btn hero-btn">
                    Start Your Quest
                </div>
           </Link>
            </div>
            <div className="photo">
              <img src={hero} className = 'resp' alt="" height={450} />
            </div>
          </div>

          <div className="mid-section">
              <h1 className='mid-text white'>It’s more than work. It’s a way of working with yourself.</h1>
              <p className='mid-p white'>Start with a Quest board, lists, and cards. Customize and expand with
               more features as yourself grows. Manage projects, organize tasks, and build confidence and spirit—
               all in one place.</p>
              <img className='mid-photo' src={list} alt="" />
              <p className='join white'>Join over 1,000,000 individuals worldwide that are using Quest to get more done.</p>
          </div>
      </div>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 mt-5 px-xl-5 purp2">
      
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