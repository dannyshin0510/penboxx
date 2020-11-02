import React, { useRef, useState } from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Landing from "components/hero/Landing"
import Columns from "components/features/ThreeColCenteredStatsPrimaryBackground"
import Footer from "components/footers/MiniCenteredFooter"
import Features from "components/blogs/GridWithFeaturedPost"
import Newest from "components/features/VerticalWithAlternateImageAndText"
import AboutDetails from "components/AboutDetails"
import NewestDetails from "components/NewestDetails"
import MatcherDetails from "components/MatcherDetails"
import Survey from "components/Suggestion"
import HalloffameDetails from "components/HalloffameDetails"


import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';



function App() {

  return (
  <BrowserRouter>
    <Switch>
        <Route exact path ='/about' component = { AboutDetails } />
        <Route exact path ='/newest' component = { NewestDetails } />
        <Route exact path ='/halloffame' component = { HalloffameDetails } />
        <Route exact path ='/suggest' component = { Survey } />
        <Route exact path ='/about/:slug' component = { AboutDetails } />
        <AnimationRevealPage>
          <Route component = { Landing } />
        </AnimationRevealPage>
    </Switch>
  </BrowserRouter>



  )
}

export default App