import miniPic from './assets/pic-mini.png';
import CV from './assets/CV_AndreaVicari_FEB24_ITA.pdf';

function ContactSection() {

  return (
    <div className="container-fluid bg-space" id="Contact">
      <div className="container-fluid col-xl-10 col-xxl-8 px-4 py-3">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center">
            <h2 className="text-center display-4 fw-bold lh-1 text-primary mb-3">Get in touch!</h2>
            <div className='col-6 mx-auto'>
              <p className="text-center fs-4">
              Thank you for taking the time to review my qualifications. I look forward to sharing more about my skills and experiences.
              </p>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">

          <div className="bg-dark card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
          <img src={miniPic}></img>
          </div>
          <div className="card-body text-white">

               <div className="mt-3">

              <ul className="list-unstyled">
              <li><a id="profile-link" href="mailto:andrea.vicari77@gmail.com" target="_blank" className="btn text-white" ><i className="fa fa-globe text-primary small"></i> Milan, Italy</a ></li>
              <li><a id="profile-link" href="mailto:andrea.vicari77@gmail.com" target="_blank" className="btn text-white" ><i className="fa fa-envelope text-primary small"></i> andrea.vicari77@gmail.com</a ></li>
                <li><a id="profile-link" href="telto:+31 3518902159" target="_blank" className="btn text-white" ><i className="fa fa-phone text-primary small"></i> +31 3518902159</a></li>
                <li><a href="https://www.linkedin.com/in/andreavicaridev/" target="_blank" className="btn text-white" ><i className="fab fa-linkedin text-primary small"></i> Linkedin</a></li>
                <a id="profile-link" href="https://github.com/Andrea-vicari" target="_blank" className="btn text-white" ><i className="fab fa-github text-primary small"></i> GitHub</a >
              </ul>

            </div>
            <div className="py-3 border-top border-black">
              <a href={CV} className="btn btn-outline-primary btn-sm d-inline-flex align-items-center" target="_blank" type="button">
                Resume
                <i className="fa fa-download text-primary small px-1"></i>
              </a>
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>
  </div>
  )
}

export {ContactSection};
