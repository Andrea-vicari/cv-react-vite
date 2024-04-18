import React from 'react'
import { useSelector } from 'react-redux'

function Biography() {

    // Dark light logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    // End dark light logics

    return (
        <>

            <section id="timeline" className={"timeline py-5 " + bgType + " " + textType}>
                <h1 className="section-title">Biography</h1>

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                        <h3 className="text-white">Recap</h3>
                            <div className="timeline-item pb-0">
                                <h4 className="text-primary">Andrea Vicari</h4>
                                <ul>
                                    <li>Monza (MB) Italy</li>
                                    <li>(+39) 3518902159</li>
                                    <li>andrea.vicari77@gmail.com</li>
                                </ul>

                            </div>
                            <h3 className="text-white">Education</h3>
                            <div className="timeline-item">
                                <h4 className="text-primary">PERITO ELETTRONICO & TELECOMUNICAZIONI</h4>
                                <h5>1999</h5>
                                <p><em>ITI E. Breda, Sesto San Giovanni (MI)</em></p>
                                <p>Diploma Perito Elettronico e Telecomunicazioni</p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary text-uppercase">English Intermediate Certificate</h4>
                                <h5>2006</h5>
                                <p><em>Shenker Institute, Vimercate (MB)</em></p>
                                <p>English Intermediate Certificate</p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary text-uppercase">WebMaster 600 Course</h4>
                                <h5>2012 – 2013</h5>
                                <p><em>Mohole Lab, Milano (MI)</em></p>
                                <p>WebMaster Advanced and Wordpress Develpment course</p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary text-uppercase">Javascript Certification</h4>
                                <h5>Oct 22 - May 23</h5>
                                <p><em>@ FreeCodeCamp </em></p>
                                <p>Javascript Data Structures & Algorithm <a href='https://www.freecodecamp.org/certification/AndreaVicariDev/javascript-algorithms-and-data-structures' target='_blank'><span className='fw-bolder'>Certification</span></a></p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary text-uppercase">Responsive Design Certification</h4>
                                <h5>Oct 22 - May 23</h5>
                                <p><em>@ FreeCodeCamp </em></p>
                                <p>Responsive Web Design <a href='https://www.freecodecamp.org/certification/AndreaVicariDev/responsive-web-design' target='_blank'><span className='fw-bolder'>Certification</span> </a></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="text-white">Professional Experience</h3>
                            <div className="timeline-item">
                                <h4 className="text-primary">WEB DEVELOPER FREELANCE</h4>
                                <h5>Oct 2023 – Present</h5>
                                <p><em>@ Freelance </em></p>
                                <p>I work on creating web applications, FullStack, mainly using React, Node.JS and
                                MongoDB for small business company or selling React themes on Themeforest</p>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary text-uppercase">product technician</h4>
                                <h5>Apr 2019 – Sept 2022</h5>
                                <p><em>@ DNP Photomask Europe </em></p>
                                <p>As a Product Improvement Technician, my main tasks were:</p>
                                    <ul>
                                        <li>Prepare daily production report to monitor and analyze the overall production performance of the company.
                                        Analysis of daily calibrations and initiation of problem solving procedures in the event of receipt of Warnings on machine parameters.
                                        Set up Monthly Calibrations Routine to support engineering dept to set the new tool parameters.</li>
                                    </ul>

                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary">WORDPRESS DEVELOPER</h4>
                                <h5>Sept 2016 – Apr 2019</h5>
                                <p><em>@ Infinity S.r.l. Stezzano (BG) </em></p>
                                <p>Web Designer for a reputable IT consulting firm. I have worked on various projects involving:</p>
                                <ul>
                                    <li>Development of websites using WordPress CMS.
                                        My responsibilities included designing the visual aspects of the sites, organizing the content provided by clients, and providing post-sale support such as training and technical assistance.
                                        Additionally, I assisted my supervisor in creating landing pages for web marketing campaigns. My experience has given me a solid understanding of WordPress and its capabilities, as well as the importance of user experience and design principles in creating effective websites.
                                    </li>
                                </ul>
                            </div>
                            <div className="timeline-item">
                                <h4 className="text-primary">WORDPRESS DEVELOPER</h4>
                                <h5>Feb 2015 – Sept 2016</h5>
                                <p><em>@ PL Group S.r.l, Monza (MB) </em></p>
                                <p>As a Wordpress Developer i was in charge:</p>
                                <ul>
                                    <li>As a Web Designer for a marketing agency, I have developed numerous websites using WordPress for various businesses and small-medium enterprises.
                                        My responsibilities include maintaining and updating the company's websites, as well as providing technical support for clients' sites.
                                        My experience with WordPress has allowed me to create dynamic and user-friendly websites that meet the needs of my clients and their target audiences.
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Biography