import React from 'react';

import NavbarFixedTop from './Components/Common/NavbarFixedTop';
import HeroIntro from './Components/HeroIntro';
import CalltoActionSmall from './Components/CallToActionSmall';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Common/Footer';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import NewSkills from './Components/NewSkills';
import Biography from './Components/Biography';
import CookieConsent, { Cookies } from "react-cookie-consent";

function App() {

  return (
    <>
    <NavbarFixedTop />
    <HeroIntro />
    <AboutMe/>
    <NewSkills />
    <Portfolio />
    <CalltoActionSmall />
    <Biography />
    <Contact />
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
    </>

  )}

export default App