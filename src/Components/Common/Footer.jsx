import React from 'react'
import {useState} from 'react';

function Footer() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <React.Fragment>
    <footer id="main-footer" className="bg-primary light-typo">
        <div className="container text-center">
            <ul className="social-links">
                <li><a href="https://github.com/Andrea-vicari" target='_blank'><i className="fs-1 bi bi-github fa-fw"></i></a></li>
                <li><a href="https://www.linkedin.com/in/andreavicaridev/" target='_blank'><i className="fs-1 bi bi-linkedin fa-fw"></i></a></li>
            </ul>
            <hr></hr>
            <p className='text-black'>&copy;2024 Andrea Vicari || Site developed with <a  href='https://omsel-portfolio.vercel.app/' target='_blank'><span className='text-white'> Omsel </span></a>  React theme</p>
        </div>
        <button id="myBtn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='btn btn-sm btn-warning'>
            <i className="bi bi-arrow-bar-up"></i>
          </button>
    </footer>
    </React.Fragment>
  )
}

export default Footer