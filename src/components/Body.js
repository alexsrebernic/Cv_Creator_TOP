import { Component } from "react";
import {Tabs,Tab,Button} from 'react-bootstrap'
import PersonalInformation from "./formBody/FormPersonalInformation";
import Experience from "./formBody/FormExperience";
import Education from "./formBody/FormEducation"
export default class Body extends Component{
    render(){
        return(
            <div id="main-content" >
                <div id="container-form" >
                    <Tabs>
                        <Tab  title="Personal Information" eventKey="personal-information">
                            <PersonalInformation/>
                        </Tab>
                        <Tab title="Experience" eventKey="experience">
                            <Experience/>
                        </Tab>
                        <Tab title="Education" eventKey="education">
                            <Education/>
                        </Tab>
                    </Tabs>
                
                    <div id="buttons-form">
                        <Button>Download as PDF</Button>
                        <Button>Reset</Button>
                    </div>
                </div>
                <div id="container-curriculum" ></div>
            </div>
        )
    }
}