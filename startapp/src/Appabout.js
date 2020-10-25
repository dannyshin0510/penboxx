import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Footer from "components/footers/MiniCenteredFooter"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Aboutpage.js'

function App() {
  return (
  <Router>
      <div className = 'App'>
        <h1>HELLO THERasdasd</h1>
        <AnimationRevealPage>
          <Hero />
        </AnimationRevealPage>
        <div>
            <Footer />
        </div>
      </div>
  </Router>



  )
}

export default App