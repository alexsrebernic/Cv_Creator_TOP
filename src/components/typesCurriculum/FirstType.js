import { Component } from "react";

export default class FirstForm extends Component{
    render(){
        return(
            <div id="first-form">
                <header>
                <div id="header-information">
                    <div id="full-name-title">
                        <h1>Example</h1>
                        <h3>Curriculum Vitae</h3>
                    </div>
                        <div id="personal-information-1">
                            <div>
                                <span>
                                    Address:
                                </span>
                                <span id="address">
                                    Example
                                </span>
                            </div>
                            <div>
                            <span>
                                    Phone number:
                                </span>
                                <span id="phoneNumber">
                                    Example
                                </span>
                            </div>
                            <div>
                                <span>
                                    E-mail address:
                                </span>
                                <span id="address">
                                    Example
                                </span>
                            </div>

                        </div>
                    </div>
                    <div id="img">
                        <img/>
                    </div>
                </header>
                <div id="personal-details">
                    <header>
                        <h2>Personal Details</h2>
                    </header>
                    <div id="details-container">
                        <p id="details">
                            Example
                        </p>
                    </div>
                </div>
                <div id="experience-container">

                </div>
            </div>
        )
    }
}
class Experience extends Component{
    render(){
        return(
            <div id="experience">
                <div id="date">
                    <span id="from"></span>
                    <span id="to"></span>
                </div>
                <div id="experience-info">
                    <h4 id="position-company-city-info">
                        example of position at example of company , example of city
                    </h4>
                </div>
            </div>
        )
    }
}