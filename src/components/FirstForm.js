import { Component } from "react";

export default class FirstForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="firstForm">
                <div id="header">
                    <h1>Personal Information</h1>
                </div>
                <form>
                    <input placeholder="First name" type="text"></input>
                    <input placeholder="Last name" type="text"></input>
                    <input placeholder="Title" type="text"></input>
                    <input placeholder="Adress" type="text"></input>
                    <input placeholder="Phone number" type="text"></input>
                    <input placeholder="Email" type="text"></input>
                    <input placeholder="Descripction" type="text"></input>
                    <input placeholder="Photo" type="file"></input>
                    
                </form>
            </div>
        )
    }
}