import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Footer from "components/footers/MiniCenteredFooter"

function App() {
  return (
  <container>
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
    <div>
        <Footer />
    </div>
  </container>


  )
}

export default App