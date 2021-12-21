import React from 'react';
import { Component } from "react";
import {Tabs,Tab,Button} from 'react-bootstrap'
import PersonalInformation from "./formBody/FormPersonalInformation";
import {Experience,FormExperience} from "./formBody/FormExperience";
import {Education,FormEducation} from "./formBody/FormEducation"
import {FirstType,EducationContainer,ExperienceContainer} from "./typesCurriculum/FirstLayout";
import uniqid from 'uniqid'
import html2pdf from 'html2pdf.js'
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
                educationElementsArray: [],
                educationFormArray : [],
                educationCurriculumArray: [],
                indexEducationArray:0,
            },
            id:uniqid()
        }
        this.addFormExperience =this.addFormExperience.bind(this)
        this.deleteFormExperience =this.deleteFormExperience.bind(this)
        this.handleInputsExperienceInformation = this.handleInputsExperienceInformation.bind(this)
        this.getIndexExperience = this.getIndexExperience.bind(this)
        this.addFormEducation = this.addFormEducation.bind(this)
        this.deleteFormEducation = this.deleteFormEducation.bind(this)
        this.handleInputEducationInformation = this.handleInputEducationInformation.bind(this)
        this.getIndexEducation = this.getIndexEducation.bind(this)
        this.handleInputsPersonalInformation = this.handleInputsPersonalInformation.bind(this)
        this.reset = this.reset.bind(this)
        this.CreatePDFfromHTML = this.CreatePDFfromHTML.bind(this)
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
                educationElementsArray:this.state.education.educationElementsArray,
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
                console.log(this.state.education.educationElementsArray)
                
                this.setState({
                    experience:{
                        experienceFormArray : this.state.experience.experienceFormArray.concat(<FormExperience getIndexExperience={this.getIndexExperience} onChange={this.handleInputsExperienceInformation}  onClick={this.deleteFormExperience} id={this.state.id} key={uniqid()}/>),
                        experienceElementsArray: this.state.experience.experienceElementsArray.concat(<ExperienceContainer experienceCurriculumArray={this.state.experience.experienceCurriculumArray[this.state.experience.indexExperienceArray]}  id={this.state.id} key={uniqid()} />),
                        experienceCurriculumArray: this.state.experience.experienceCurriculumArray,
                        indexExperienceArray:this.state.experience.indexExperienceArray
                    },
                    education:{
                        educationElementsArray:this.state.education.educationElementsArray,
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
                    array[object] =<ExperienceContainer experienceCurriculumArray={this.state.experience.experienceCurriculumArray[object]}  id={array[object].props.experienceCurriculumArray.id} key={uniqid()} />
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
    deleteFormEducation(e){
        e.preventDefault()
        this.setState({
            education:{
                educationElementsArray:this.state.education.educationElementsArray.filter(form => {
                    return form.props.id !== e.target.id
                }),
                educationFormArray: this.state.education.educationFormArray.filter(form => {
                    return form.props.id !== e.target.id
                }),
                educationCurriculumArray: this.state.education.educationCurriculumArray.filter(object => {
                    return object.id !== e.target.id
                }),
            },
                experience: {
                    experienceElementsArray : this.state.experience.experienceElementsArray,
                    experienceFormArray: this.state.experience.experienceFormArray,
                    experienceCurriculumArray: this.state.experience.experienceCurriculumArray,
                    indexExperienceArray: this.state.experience.indexExperienceArray
                },
                id:uniqid()

        },() => {
            this.setState({
                education:{
                    indexEducationArray: this.state.education.educationCurriculumArray.length - 1,
                    educationFormArray:this.state.education.educationFormArray,
                    educationElementsArray:this.state.education.educationElementsArray,
                    educationCurriculumArray: this.state.education.educationCurriculumArray
                 }
            })
        })
      
    }
   
   
    addFormEducation(e){
        e.preventDefault()
        this.setState({
            education:{
                educationCurriculumArray: this.state.education.educationCurriculumArray.concat(
                    {
                        ucs:"",
                        subject:"",
                        city:"",
                        from:"",
                        to:"",
                        degree:"",
                        details:"",
                        id:this.state.id
                    }
                ),
                educationFormArray:this.state.education.educationFormArray,
                indexEducationArray:this.state.education.indexEducationArray,
                educationElementsArray:this.state.education.educationElementsArray,
            }
           
        },() => {
            this.setState({   
                education:{
                    indexEducationArray: this.state.education.educationCurriculumArray.length - 1,
                    educationFormArray:this.state.education.educationFormArray,
                    educationElementsArray:this.state.education.educationElementsArray,
                    educationCurriculumArray: this.state.education.educationCurriculumArray
                }            
            }, () => {
                console.log(this.state.education.educationElementsArray)

                this.setState({
                    education:{
                        educationFormArray: this.state.education.educationFormArray.concat(<FormEducation getIndexEducation={this.getIndexEducation} onChange={this.handleInputEducationInformation} onClick={this.deleteFormEducation} id={this.state.id}  key={uniqid()}/>),
                        educationElementsArray:this.state.education.educationElementsArray.concat(<EducationContainer educationCurriculumArray={this.state.education.educationCurriculumArray[this.state.education.indexEducationArray]} id={this.state.id} key={uniqid()}/>),
                        educationCurriculumArray: this.state.education.educationCurriculumArray,      
                        indexEducationArray:this.state.education.indexEducationArray,
                    },
                    experience:{
                        experienceCurriculumArray : this.state.experience.experienceCurriculumArray,
                        experienceFormArray:this.state.experience.experienceFormArray,
                        experienceElementsArray: this.state.experience.experienceElementsArray,
                        indexExperienceArray:this.state.experience.indexExperienceArray
                    },
                    id:uniqid()
                })

            })
            
        })

    }
    handleInputEducationInformation(event) {
        for(let object in this.state.education.educationCurriculumArray){
            if(this.state.education.educationCurriculumArray[object].id === event.target.id){
                let array = [...this.state.education.educationCurriculumArray]
                let item = {...array[object]}
                item[event.target.name] = event.target.value
                array[object] = item
                this.setState({
                    education:{
                     educationCurriculumArray : array,
                     educationFormArray:this.state.education.educationFormArray,
                     educationElementsArray:this.state.education.educationElementsArray,
                     indexEducationArray:this.state.education.indexEducationArray
                    }
                }, () => {
                    let array = [...this.state.education.educationElementsArray]
                    array[object] =<EducationContainer educationCurriculumArray={this.state.education.educationCurriculumArray[object]}  id={array[object].props.educationCurriculumArray.id} key={uniqid()} />
                    this.setState({
                        education: {
                            educationCurriculumArray : this.state.education.educationCurriculumArray,
                            educationFormArray:this.state.education.educationFormArray,
                            educationElementsArray: array,
                            indexEducationArray:this.state.education.indexEducationArray
                        }
                    })
                })                   
            }
        }
    }
    getIndexEducation(e){
        for(let object in this.state.education.educationElementsArray){
            if(this.state.education.educationElementsArray[object].props.id === e.target.id){
                this.setState({
                    education : {
                        indexEducationArray: this.state.education.educationElementsArray[object].props.index,
                        educationCurriculumArray : this.state.education.educationCurriculumArray,
                        educationFormArray:this.state.education.educationFormArray,
                        educationElementsArray:this.state.education.educationElementsArray,
                    
                    }
                })
            }
        }
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
   
    CreatePDFfromHTML() {
        console.log("asd")
        var opt = {
            filename:     'mycurriculum-vitae.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
      let element = document.getElementById('first-form')
      html2pdf().from(element).set(opt).save()
    }
      
    reset(){
        this.setState({
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
                educationElementsArray: [],
                educationFormArray : [],
                educationCurriculumArray: [],
                indexEducationArray:0,
            },
            id:uniqid()
        })
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
                            <Experience  experienceArray={this.state.experience.experienceFormArray} addFormExperience={this.addFormExperience}/>
                        </Tab>
                        <Tab title="Education" eventKey="education">
                            <Education educationArray={this.state.education.educationFormArray} addFormEducation={this.addFormEducation} />
                        </Tab>
                    </Tabs>
                
                    <div id="buttons-form">
                        <Button onClick={this.CreatePDFfromHTML}>Download as PDF</Button>
                        <Button onClick={this.reset}>Reset</Button>
                    </div>
                </div>
                <div id="container-curriculum" >
                <Tabs>
                        <Tab  title="Curriculum " eventKey="first form">
                        <FirstType educationElementsArray={this.state.education.educationElementsArray}   personalInformation = {this.state.personalInformationInputs}  experienceElementsArray={this.state.experience.experienceElementsArray}/>
                        </Tab>
                      
                    </Tabs>
                </div>
            </div>
        )
    }
}