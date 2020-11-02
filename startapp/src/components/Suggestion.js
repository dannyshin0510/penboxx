import React, {Component} from 'react'
import Top from "./hero/Nav"
import Features from "./features/VerticalWithAlternateImageAndText"
import Footer from './footers/MiniCenteredFooter'
import Form from "./forms/SurveyForm"
import tw from "twin.macro";
const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;

class Suggestion extends Component {

    render(){
        return(
        <div>
            <StyledDiv>
                < Top />
            </StyledDiv>
            < Form />
            <Footer />
        </div>
        )
    }
}


export default Suggestion