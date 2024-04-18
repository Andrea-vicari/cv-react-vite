import React from 'react'
import Resume from "../assets/pdf/Resume.pdf"

function CallToActionSmall() {
    return (
        <section className="bg-image py-5">

            <div className="container">

                <div className="row d-flex align-items-center">
                    <div className="col-md-9">
                        <h4 className='fs-3 fw-bolder text-black mb-0'>Download Resume</h4>
                        <p className='fs-5 text-white'>Thank you for taking the time to review my qualifications. I look forward to sharing more about my skills and experiences.</p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <p className="text-center">
                            <a className="btn btn-dark btn-lg p-3" href={Resume} target='_blank'>
                                <i className="fs-3 bi bi-download"></i> Download
                            </a>
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CallToActionSmall