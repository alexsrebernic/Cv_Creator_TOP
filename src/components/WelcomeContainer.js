import { Component } from "react";
export default class WelcomeContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="WelcomeContainer">
                <div id="headerWelcomeContainer">
                    <h1>Hello!</h1>
                    <h2>This is a CV (Curriculum Vitae) creator</h2>
                </div>
                <div id="DetailsWelcomeContainer">
                <p>
                In this app you gonna complete a series of form and when you complete, you can download on pdf
                the file
                </p>
                <div id="selectFormatWelcomeContainer">
                    <h2>But first select the format of your curriculum!</h2>
                    <div id="formatsWelcomeContainer">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </div>
                <button id="startButtonWelcomeContainer" onClick="this.props.displayFirstForm">Start</button>
            </div>
        )
    }
}