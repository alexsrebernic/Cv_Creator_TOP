import React from 'react';
import { Component } from "react";
import {Tabs,Tab,Button} from 'react-bootstrap'
import PersonalInformation from "./formBody/FormPersonalInformation";
import {Experience,FormExperience} from "./formBody/FormExperience";
import {Education,FormEducation} from "./formBody/FormEducation"
import {FirstType,EducationContainer,ExperienceContainer} from "./typesCurriculum/FirstLayout";
import uniqid from 'uniqid'

export default class Body extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            personalInformationInputs:{
                firstname : "",
                lastname: "",
                title:"",
                address:"",
                phonenumber:"",
                email:"",
                photo:"",
                details:"",
            },
            experience:{
                experienceElementsArray : [],
                experienceFormArray : [],
                experienceCurriculumArray : [],
                indexExperienceArray:0,

            },
            education:{
                educationFormArray : [],
                educationCurriculumArray: [],
                indexEducationArray:0,
            },
            id:uniqid()
        }
        this.addFormExperience =this.addFormExperience.bind(this)
        this.deleteFormExperience =this.deleteFormExperience.bind(this)
        this.handleInputsExperienceInformation = this.handleInputsExperienceInformation.bind(this)
        this.addFormEducation = this.addFormEducation.bind(this)
        this.deleteFormEducation = this.deleteFormEducation.bind(this)
        this.handleInputsPersonalInformation = this.handleInputsPersonalInformation.bind(this)
        this.getIndexExperience = this.getIndexExperience.bind(this)
    }
    deleteFormExperience(e){
        e.preventDefault()
        this.setState({
            experience:{
                experienceElementsArray:this.state.experience.experienceElementsArray.filter(form => {
                    return form.props.id !== e.target.id
                }),
                experienceFormArray: this.state.experience.experienceFormArray.filter(form => {
                    return form.props.id !== e.target.id
                }),
                experienceCurriculumArray: this.state.experience.experienceCurriculumArray.filter(object => {
                    return object.id !== e.target.id
                }),
            },
            education:{
                educationFormArray: this.state.education.educationFormArray,
                educationCurriculumArray: this.state.education.educationCurriculumArray,
                indexEducationArray:this.state.education.indexEducationArray,
            },
           
            id:uniqid()
        }, () => {
            this.setState({
                experience: {
                    experienceElementsArray : this.state.experience.experienceElementsArray,
                    experienceFormArray: this.state.experience.experienceFormArray,
                    experienceCurriculumArray: this.state.experience.experienceCurriculumArray,
                    indexExperienceArray: this.state.experience.experienceCurriculumArray.length - 1
                
                }
            })

        })
    }
    addFormExperience(e){
        e.preventDefault()
        this.setState({
            experience:{
                experienceCurriculumArray: this.state.experience.experienceCurriculumArray.concat(
                    {
                        position:"",
                        company:"",
                        city:"",
                        from:"",
                        to:"",
                        details:"",
                        id:this.state.id
                    }
                ),
                experienceFormArray:this.state.experience.experienceFormArray,
                experienceElementsArray : this.state.experience.experienceElementsArray,
                indexExperienceArray:this.state.experience.indexExperienceArray
            }
           
        },() => {
            this.setState({   
                experience:{
                    indexExperienceArray: this.state.experience.experienceCurriculumArray.length - 1,
                    experienceFormArray:this.state.experience.experienceFormArray,
                    experienceElementsArray : this.state.experience.experienceElementsArray,
                    experienceCurriculumArray:this.state.experience.experienceCurriculumArray
                }            
            }, () => {
                this.setState({
                    experience:{
                        experienceFormArray : this.state.experience.experienceFormArray.concat(<FormExperience getIndexExperience={this.getIndexExperience} onChange={this.handleInputsExperienceInformation} index={this.state.experience.indexExperienceArray}  onClick={this.deleteFormExperience} id={this.state.id} key={this.state.id}/>),
                        experienceElementsArray: this.state.experience.experienceElementsArray.concat(<ExperienceContainer experienceCurriculumArray={this.state.experience.experienceCurriculumArray[this.state.experience.indexExperienceArray]}  id={this.state.id} key={this.state.id} index={this.state.experience.indexExperienceArray}/>),
                        experienceCurriculumArray: this.state.experience.experienceCurriculumArray,
                        indexExperienceArray:this.state.experience.indexExperienceArray
                    },
                    education:{
                        educationCurriculumArray: this.state.education.educationCurriculumArray,
                        educationFormArray: this.state.education.educationFormArray,
                        indexEducationArray: this.state.education.indexEducationArray
                    },
                    
                    id:uniqid()
                })
                console.log(this.state.experience.experienceElementsArray)

            })
            
        })

    }
    handleInputsExperienceInformation(event){
        for(let object in this.state.experience.experienceCurriculumArray){
            if(this.state.experience.experienceCurriculumArray[object].id === event.target.id){
                let array = [...this.state.experience.experienceCurriculumArray]
                let item = {...array[object]}
                item[event.target.name] = event.target.value
                array[object] = item
                this.setState({
                    experience:{
                     experienceCurriculumArray : array,
                     experienceFormArray:this.state.experience.experienceFormArray,
                     experienceElementsArray:this.state.experience.experienceElementsArray,
                     indexExperienceArray:this.state.experience.indexExperienceArray
                    }
                }, () => {
                    let array = [...this.state.experience.experienceElementsArray]
                    array[object] =<ExperienceContainer experienceCurriculumArray={this.state.experience.experienceCurriculumArray[object]}  id={array[object].props.experienceCurriculumArray.id} key={uniqid()} index={this.state.experience.indexExperienceArray}/>
                    this.setState({
                        experience: {
                            experienceCurriculumArray : this.state.experience.experienceCurriculumArray,
                            experienceFormArray:this.state.experience.experienceFormArray,
                            experienceElementsArray: array,
                            indexExperienceArray:this.state.experience.indexExperienceArray
                        }
                    })
                })                   
            }
        }
        
    }
    deleteFormEducation(e){
        e.preventDefault()
        this.setState({
            education:{
                educationFormArray: this.state.education.educationFormArray.filter(form => {
                    return form.props.id !== e.target.id
                }),
                educationCurriculumArray: this.state.education.educationCurriculumArray,
                indexEducationArray: this.state.education.indexEducationArray
            },
           
            id:uniqid()
        })
    }
   
    addFormEducation(e){
        e.preventDefault()
        this.setState({
            education:{
            educationFormArray: this.state.education.educationFormArray.concat(<FormEducation onClick={this.deleteFormEducation} id={this.state.id}  key={this.state.id}/>),

            },
            id:uniqid()
        })
    }
    handleInputsPersonalInformation(event) {
        this.setState({
            personalInformationInputs: {
                firstname : this.state.personalInformationInputs.firstname,
                lastname: this.state.personalInformationInputs.lastname,
                title:this.state.personalInformationInputs.title,
                address:this.state.personalInformationInputs.address,
                phonenumber:this.state.personalInformationInputs.phonenumber,
                email:this.state.personalInformationInputs.email,
                photo:this.state.personalInformationInputs.photo,
                details:this.state.personalInformationInputs.details,
                [event.target.name] : event.target.value
            }
        })      
        event.preventDefault()
    }
  
    getIndexExperience(e){
        for(let object in this.state.experience.experienceElementsArray){
            if(this.state.experience.experienceElementsArray[object].props.id === e.target.id){
                this.setState({
                    experience : {
                        indexExperienceArray: this.state.experience.experienceElementsArray[object].props.index,
                        experienceCurriculumArray : this.state.experience.experienceCurriculumArray,
                        experienceFormArray:this.state.experience.experienceFormArray,
                        experienceElementsArray:this.state.experience.experienceElementsArray,
                    
                    }
                })
            }
        }
    }
    render(){
        return(
            <div id="main-content" >
                <div id="container-form" >
                    <Tabs>
                        <Tab  title="Personal Information" eventKey="personal-information">
                            <PersonalInformation  onChange={this.handleInputsPersonalInformation}/>
                        </Tab>
                        <Tab title="Experience" eventKey="experience">
                            <Experience    experienceArray={this.state.experience.experienceFormArray} addFormExperience={this.addFormExperience}/>
                        </Tab>
                        <Tab title="Education" eventKey="education">
                            <Education educationArray={this.state.education.educationFormArray} addFormEducation={this.addFormEducation} />
                        </Tab>
                    </Tabs>
                
                    <div id="buttons-form">
                        <Button>Download as PDF</Button>
                        <Button>Reset</Button>
                    </div>
                </div>
                <div id="container-curriculum" >
                <Tabs>
                        <Tab  title="Curriculum " eventKey="first form">
                        <FirstType experienceCurriculumArray={this.state.experience.experienceCurriculumArray} indexExperienceArray={this.state.experience.indexExperienceArray} personalInformation = {this.state.personalInformationInputs}  experienceElementsArray={this.state.experience.experienceElementsArray}/>
                        </Tab>
                      
                    </Tabs>
                </div>
            </div>
        )
    }
}