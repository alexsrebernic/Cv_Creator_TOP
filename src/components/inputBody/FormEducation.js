import { Component } from "react";
import { Form,Button } from "react-bootstrap";

export default class Education extends Component {
    constructor(props){
        super(props)
        this.state = {
            formList:[]
        }
        this.addFormEducation = this.addFormEducation.bind(this)
    }
    addFormEducation(e){
        e.preventDefault()
        this.setState({
            formList: this.state.formList.concat(<FormEducation key={this.state.formList.length}/>)
        })
    }
    render(){
        let formList = this.state.formList
        return(
            <div className="mt-0 h-100 overflow-auto d-flex flex-column justify-content-start align-items-center"> 
            {formList}
            <Button className="mt-3 w-50 p-2.5" onClick={this.addFormEducation}>Add</Button>
            </div>
          
        )
    }
}

class FormEducation extends Component {
    render(){
        return(
         <Form className="row align-items-start border-form">
            <div className="col mt-0">
                <Form.Group >
                        <Form.Label>
                            University name
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="University name"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            City
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="City"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            Degree
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Degree"/>
                    </Form.Group>
                </div>
                <div className="col mt-0">
                    <Form.Group >
                        <Form.Label>
                            Subject
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Subject"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            From
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="From"/>
                    </Form.Group>
                    <Form.Group  >
                    <Form.Label>
                            To
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="To"/>
                    </Form.Group>
                </div>
                    <Form.Control className="bg-danger bg-gradient w-100 p-2 mt-4"  type="button" value="Delete" placeholder="Delete"/>     
                </Form>
        )
    }
}