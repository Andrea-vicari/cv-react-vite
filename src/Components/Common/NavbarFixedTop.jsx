import React from 'react'
import DarkSelector from '../Common/SwitchDark'
import { useSelector, useDispatch } from 'react-redux'

function NavbarFixedTop() {
      // Dark theme logics
  const count = useSelector((state) => state.counter.value)
  return (
    <>
        <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme={count}>
        <div className="container">
            <a className="navbar-brand d-flex" href='#intro'>
            <span className='fs-1 fw-bolder'>A<span className='text-primary'>V</span><span className='fs-4'> DEVELOPER</span></span>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <a className="nav-link fs-5" aria-current="page" href='#intro'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5"href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#timeline">Biography</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#contact">Contact</a>
              </li>

            </ul>
          <DarkSelector />
            </div>
        </div>
        </nav>
    </>
  )
}

export default NavbarFixedTop