import { Component } from "react";

class FirstType extends Component{
    render(){
        const {personalInformation} = this.props
        return(
            <div id="first-form">
                <header id="header-title" className="p-4 d-f justify-content-between">
                <div id="header-information">
                    <div className="h-50 w-100" id="full-name-title">
                        <h1>{personalInformation.firstname} {personalInformation.lastname}</h1>
                       
                        <h3 >{personalInformation.title}</h3>
                    </div>
                        <div className="w-100" id="personal-information-1">
                            <div>
                                <span>
                                    Address:
                                </span>
                                <span id="address">
                                {personalInformation.address}
                                </span>
                            </div>
                            <div>
                            <span>
                                    Phone number:
                                </span>
                                <span id="phoneNumber">
                                {personalInformation.phonenumber}
                                </span>
                            </div>
                            <div>
                                <span>
                                    E-mail address:
                                </span>
                                <span id="address">
                                {personalInformation.email}
                                </span>
                            </div>

                        </div>
                    </div>
                    <div  id="img">
                        <img src={personalInformation.photo} alt="your cv "/>
                    </div>
                </header>
                <div  id="personal-details" className="w-75 m-4 ">
                    <header className= "border-bottom border-dark">
                        <h2>Personal Details</h2>
                    </header>
                    <div className="w-100  mt-4" id="details-container">
                        <p className="w-75 text-break" id="details">
                        {personalInformation.details}
                        </p>
                    </div>
                </div>
                <div className="w-75 m-4" id="work-experience">
                    <header className= "border-bottom border-dark">
                        <h2>Work Experience</h2>
                    </header>
                    <div className="w-100  mt-4" id="experience-container">
                        {this.props.experienceElementsArray}
                    </div>
                </div>
                <div className="w-75 m-4" id="education-experience">
                    <header className= "border-bottom border-dark">
                        <h2>Education Experience</h2>
                    </header>
                    <div className="w-100  mt-4" id="education-container">
        
                    </div>
                </div>
            </div>
        )
    }
}
class ExperienceContainer extends Component{
    render(){
        const {experienceCurriculumArray } = this.props
        return(
            <div className="d-f  w-100" id="experience">
                <div className="w-25 h-100" id="date">
                    <span className="w-100 h-100" id="from-to">{experienceCurriculumArray.from} - {experienceCurriculumArray.to}</span>
                </div>
                <div className="d-f flex-direction-column w-75" id="experience-info">
                    <p className="w-100 font-weight-bold text-break" id="position-company-city-info">
                        {experienceCurriculumArray.position} at {experienceCurriculumArray.company} , {experienceCurriculumArray.city}
                    </p>
                    <div className="w-100" id="details-experience-container">
                        <ul className="w-100">
                            <li>
                            {experienceCurriculumArray.details}
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

class EducationContainer extends Component{
    render(){
        return(
            <div className="w-100" id="education">
                    <div id="date">
                    <span id="from">1234-</span>
                    <span id="to">1234</span>
                </div>
                <div id="education-info">
                    <h4 id="university-city-info">
                        example of position at example of company , example of city
                    </h4>
                    <p id="degree">example degree</p>
                    <div id="details-education-container">
                        <ul>
                                
                        </ul>
                    </div>
                </div>
              
            </div>
        )
    }
}

export {FirstType,ExperienceContainer,EducationContainer}