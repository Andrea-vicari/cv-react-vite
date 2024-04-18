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
    </>

  )}

export default App