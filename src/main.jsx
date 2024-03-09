import React from 'react';
import ReactDOM  from 'react-dom/client';
import {Navbar} from './Navbar.jsx';
import {Hero} from './Hero.jsx';
import {About} from './About.jsx';
import {ContactSection} from './Contact.jsx';
import {Skills} from './Skills.jsx';
import {Projects} from './Projects.jsx';
import {Footer} from './Footer.jsx';
import CookieConsent, { Cookies } from "react-cookie-consent";


import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<div className='py-0'>
    <Navbar />
    <Hero />
    <About />
    <Skills />
</div>

)

ReactDOM.createRoot(document.getElementById('proj')).render(
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Projects />
    </div>
)
ReactDOM.createRoot(document.getElementById('footer')).render(
    <div>
        <ContactSection />
        <Footer />
        <CookieConsent
        location="bottom"
        buttonText="Ok, Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        >
        This website uses cookies to enhance the user experience. Only functional cookies are used, no adv cookies or any user data will be collected.
        </CookieConsent>
    </div>
)
