import React, {Component} from 'react'
import Top from "./hero/Nav"
import About from './features/TwoColWithButton'
import Newest from './blogs/GridWithFeaturedPost'
import Footer from './footers/MiniCenteredFooter'
import tw from "twin.macro";
const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;

class NewestDetails extends Component {
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
            < Newest style = 'margin-top:-200px;'/>
            <Footer />
        </div>
        )
    }
}


export default NewestDetails