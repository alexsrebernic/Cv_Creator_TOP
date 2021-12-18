import { Component } from "react";
import { Form,Button } from "react-bootstrap";

export default class Experience extends Component {
    constructor(props){
        super(props)
        this.state = {
            formList:[]
        }
        this.addFormExperience = this.addFormExperience.bind(this)
    }
    addFormExperience(e){
        e.preventDefault()
        this.setState({
            formList: this.state.formList.concat(<FormExperience key={this.state.formList.length}/>)
        })
    }
    render(){
        let formList = this.state.formList
        return(
            <div className="mt-0 h-100 overflow-auto d-flex flex-column justify-content-start align-items-center"> 
            {formList}
            <Button className="mt-3 w-50 p-2.5" onClick={this.addFormExperience}>Add</Button>
            </div>
          
        )
    }
}

class FormExperience extends Component {
    render(){
        return(
         <Form className="row align-items-start border-form">
            <div className="col mt-0">
                <Form.Group >
                        <Form.Label>
                            Position
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Position"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            Company
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Company"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            City
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="City"/>
                    </Form.Group>
                </div>
                <div className="col mt-0">
                    <Form.Group >
                        <Form.Label>
                            From
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="From"/>
                    </Form.Group>
                    
                    
                    <Form.Group >
                        <Form.Label>
                            To
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="To"/>
                    </Form.Group>
                    <Form.Group  >
                    <Form.Label>
                            Delete Experience
                        </Form.Label>
                        <Form.Control className="bg-danger bg-gradient " size="lg" type="button" value="Delete" placeholder="Delete"/>
                    </Form.Group>
                </div>
         </Form>
        )
    }
}