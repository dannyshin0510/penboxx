import React, {Component} from 'react'
import Top from "./hero/Nav"
import Features from "./features/VerticalWithAlternateImageAndText"
import Footer from './footers/MiniCenteredFooter'
import tw from "twin.macro";
const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;

class HalloffameDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug:null
        }
    }
    componentDidMount(){
        if (this.props.match){
            const {slug} = this.props.match.params
            this.setState({
                slug:slug
            })
        }
    }



    render(){
        const {slug} = this.state
        return(
        <div>
            <StyledDiv>
                < Top />
            </StyledDiv>
            < Features />
            <Footer />
        </div>
        )
    }
}


export default HalloffameDetails