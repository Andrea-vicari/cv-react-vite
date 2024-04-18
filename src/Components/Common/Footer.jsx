import React from 'react'
import { useEffect } from 'react'

function Footer() {

  // Scroll to top function
  useEffect(() => {
    const element = document.getElementById('myBtn');
    element.style.display = "block";
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
        <button id="myBtn" onClick={topFunction} className='btn btn-sm btn-outline-secondary'>
          <i className='bi bi-arrow-up-square-fill'></i>
        </button>
    </footer>
    </React.Fragment>
  )
}

export default Footer