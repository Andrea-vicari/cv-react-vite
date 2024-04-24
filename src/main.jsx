import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Components CSS
import '../src/Components/styles/aboutMe-style.css'
import '../src/Components/styles/biography-style.css'
import '../src/Components/styles/skills-style.css'
import '../src/Components/styles/HeroIntro-styles.css'
import '../src/Components/styles/cta-small-style.css'
import '../src/Components/styles/portfolio-style.css'
import '../src/Components/styles/contact-style.css'
import '../src/Components/styles/footer-style.css'

// Main CSS Sass
import './sass/index.scss';

import store from './redux/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App />
    </Provider>

  ,
)