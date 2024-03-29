import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import { Autoriz } from '../autoriz/autoriz.jsx'

export default function Header() {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);

    function scroll() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };
  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };
  return (
    
    <>
    <div className="header">
      <div>
        <a href='/'>
       <div className="logo">
      <img src="./src/assets/photo/logo.svg" alt="" className='main-logo'/>
    </div>
    </a>

    <div className="navbar">
    <button id="scrollToTop"  className="header-button"  onClick={scrollToTop}>
              Home
            </button>
            <NavLink to='manage'>
            <button className = "header-button">
              Manage
            </button>
            </NavLink>

            <button className="header-button" onClick={() => scrollToElement(document.getElementById('about'), 1000)}>
              About us
            </button>
            <button  className="header-button" onClick={() => scrollToElement(document.getElementById('comments'), 1000)}>
              Comments
            </button>
            <Autoriz/>
            
          </div>
          </div>
          </div>
    </>
  )
}
