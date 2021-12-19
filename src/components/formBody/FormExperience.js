import { Component } from "react";
import { Form,Button } from "react-bootstrap";
import uniqid from 'uniqid'
export default class Experience extends Component {
    constructor(props){
        super(props)
        this.state = {
            formList:[],
            id:uniqid()
        }
        this.addFormExperience = this.addFormExperience.bind(this)
        this.deleteForm = this.deleteForm.bind(this)

    }
    addFormExperience(e){
        e.preventDefault()
        this.setState({
            formList: this.state.formList.concat(<FormExperience onClick={this.deleteForm} id={this.state.id} key={this.state.id}/>),
            id:uniqid()
        })
    }
    deleteForm(e){
        e.preventDefault()
        this.setState({
            formList: this.state.formList.filter(form => {
                return form.props.id !== e.target.id
            }),
            id:uniqid()
        })
    }
    render(){
        let formList = this.state.formList
        return(
            <div className="mt-0 h-100 overflow-auto d-flex flex-column justify-content-start align-items-center"> 
                {formList}
                <div className="mb-3 mt-3 d-flex justify-content-center align-items-center">
                    <Button className="w-50 p-2.5" onClick={this.addFormExperience}>Add</Button>
                </div>
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
                        <Form.Control onClick={this.props.onClick} id={this.props.id} className="bg-danger bg-gradient " size="lg" type="button" value="Delete" placeholder="Delete"/>
                    </Form.Group>
            </div>
         </Form>
        )
    }
}