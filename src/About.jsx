import profilePic from './assets/profile-pic.png';
function About() {

  return (

    <section id="about" className="about py-5">
    <div className="container">

      <div className="row">
        <div className="col-lg-3 align-items-center d-flex justify-content-end">
          <img src={profilePic} alt="Andrea Vicari Web Developer" id="profile-pic"/>
        </div>
        <div className="col-lg-9 pt-4 pt-lg-0 mt-3">
          <h3 className="text-primary">Nice to meet you</h3>
          <p className='text-white fs-6'>I'm Andrea, a front-end web developer with a passion for creating user-friendly and visually stunning websites. I specialize in using React, Bootstrap, and other cutting-edge technologies to bring your online presence to life. With over 4 years of experience in the field, I possess a strong foundation in HTML, CSS, and JavaScript, and have experience in modern front-end frameworks such as React and Bootstrap. I'm always looking to learn and grow, and I'm excited to connect with you and bring your web development dreams to life! 😊</p>
          <div className="row">
            <div className="col-lg-8 text-white">
              <div className="contact-links_footer mt-3">

                <a id="profile-link" href="https://github.com/Andrea-vicari" target="_blank" className="btn text-white" ><i className="fab fa-github text-primary fs-2"></i> GitHub</a >
                <a href="https://codepen.io/AndreDedeVic" target="_blank" className="btn text-white" ><i className="fab fa-linkedin text-primary fs-2"></i> Linkedin</a>
                <a href="https://codepen.io/AndreDedeVic" target="_blank" className="btn text-white" ><i className="fab fa-codepen text-primary fs-2"></i> Codepen</a>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>

  )
}

export {About};
