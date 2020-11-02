import React, {Component} from 'react'
import Top from "./hero/Nav"
import About from './features/TwoColWithButton'
import Footer from './footers/MiniCenteredFooter'
import tw from "twin.macro";
const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;

class AboutDetails extends Component {

    render(){
        return(
        <div>
            <StyledDiv>
                < Top />
            </StyledDiv>
            < About style = 'margin-top:-200px;'/>
            <Footer />
        </div>
        )
    }
}


export default AboutDetails