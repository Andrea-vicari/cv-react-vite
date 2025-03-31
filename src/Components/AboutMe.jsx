import React from 'react'
import { useSelector } from 'react-redux'

function Bio() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType, textColor;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"


    return (
        <>
            <section id="about" className={"about py-5 mt-5" + " " + bgType + " " + textType}>
                <div className="container px-3">

                    <div>
                        <h2 className="section-title">about</h2>
                        <p className='mb-5 text-center'>I'm Andrea, a front-end web developer with a passion for creating user-friendly websites.</p>
                    </div>

                    <div className="row">
                        <div className="image col-lg-3 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                        </div>
                        <div className="col-lg-9 d-flex flex-column align-items-stretch">
                            <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong>Name:</strong> <span>Andrea Vicari
                                            </span></li>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong>Email:</strong>
                                                <span id="small-mail">andrea.vicari77@gmail.com</span>
                                            </li>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong>Phone:</strong> <span>+39 3518902159</span></li>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong>City:</strong> <span>Monza,
                                                MB, Italy</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong><a href="https://github.com/Andrea-vicari">GitHub</a></strong></li>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong><a href="https://www.linkedin.com/in/andreavicaridev/">Linkedin</a></strong></li>
                                            <li><i className="bi bi-chevron-right text-primary"></i> <strong>Freelance:</strong>
                                                <span>Available</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr></hr>
                                <div className="mt-0">
                                    <p className='mb-0'>With over 4 years of experience in the field, I possess a strong foundation in HTML, CSS, and JavaScript.<br/>I specialize in using React, Bootstrap, and other cutting-edge technologies</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Bio
