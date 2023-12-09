import logo_AV from './assets/logo_AV.png';
import CV from './assets/CV_AndreaVicari_DEC23_EN.pdf';

function Navbar() {

  const openMenu = () =>{
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
    }
   {/*This one below is to force close the menu when menu element is clicked*/}
  const closeMenu = () =>{
      document.querySelector('.offcanvas-collapse').classList.remove('open');
      }

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-0" aria-label="Main navigation">
    <div className="container py-0">
      <a className="navbar-brand" href="#">
      <img src={logo_AV} id="logo"/>
      </a>
      <button onClick={()=>openMenu()} className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse offcanvas-collapse">
        <ul className="navbar-nav col-lg-10 justify-content-evenly">
          <li className="nav-item">
            <a className="nav-link active fs-4" aria-current="page" onClick={()=>closeMenu()} href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-4" href="#Skills" onClick={()=>closeMenu()}>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-4" href="#Projects" onClick={()=>closeMenu()}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-4" href="#Contact" onClick={()=>closeMenu()}>Contact</a>
          </li>

        </ul>
        <div className="d-flex gap-2 justify-content-center py-5">
  <a href={CV} className="btn btn-primary btn-sm d-inline-flex align-items-center" target="_blank" type="button">
    Resume
    <i className="fa fa-download text-white small px-1"></i>
  </a>

</div>

      </div>
    </div>
  </nav>
  )
}

export {Navbar};
