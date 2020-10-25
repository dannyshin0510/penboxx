import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Columns from "components/features/ThreeColCenteredStatsPrimaryBackground"
import Footer from "components/footers/MiniCenteredFooter"
import Features from "components/blogs/GridWithFeaturedPost"
import Newest from "components/features/VerticalWithAlternateImageAndText"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import About from './Aboutpage.js'

function App() {
  return (
  <Router>
      <div className = 'App'>
        <AnimationRevealPage>
          <Hero />
        </AnimationRevealPage>
        <Columns />
        <Newest />
        <Features />
        <div>
            <Footer />
        </div>
      </div>
  </Router>



  )
}

export default App