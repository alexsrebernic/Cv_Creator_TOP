import { Component } from "react";
import {Tabs,Tab,Button} from 'react-bootstrap'
import PersonalInformation from "./inputBody/FormPersonalInformation";
import Experience from "./inputBody/FormExperience";
import Education from "./inputBody/FormEducation"
export default class Body extends Component{
    moveTabs(e){

    }
    render(){
        return(
            <div id="main-content" >
                <div id="container-form" >
                <Tabs >
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