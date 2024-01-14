import logo from './assets/logo_AV.png';
import logoVite from './assets/vite.svg';

function Footer() {

  return (
    <div className="container-fluid bg-footer pt-lg-5">
      <footer id="footer">
        <div className="container">
          <img src={logo} id='logo_footer'></img>
            <p id="claim_footer" className="mt-3">Andrea Vicari || Front-End developer</p>
            <div className="contact-links_footer mt-3">

              <a id="profile-link" href="https://github.com/Andrea-vicari" target="_blank" className="btn text-white" ><i className="fab fa-github text-primary fs-2"></i> GitHub</a >
              <a href="https://www.linkedin.com/in/andreavicaridev/" target="_blank" className="btn text-white" ><i className="fab fa-linkedin text-primary fs-2"></i> Linkedin</a>


            </div>
        </div>
    </footer>
    <div className='col-3 mx-auto'>
      <hr></hr>
    </div>
    <img src={logoVite}></img>
    <p className='text-small text-white text-center'>Project Bootstrapped using Vite + React + Bootstrap5</p>
  </div>
  )
}

export {Footer};
