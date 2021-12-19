import { Component } from "react";
import { Form,Button } from "react-bootstrap";
import uniqid from 'uniqid'
export default class Education extends Component {
    constructor(props){
        super(props)
        this.state = {
            formList:[],
            id:uniqid()
        }
        this.addFormEducation = this.addFormEducation.bind(this)
        this.deleteForm = this.deleteForm.bind(this)
    }
    addFormEducation(e){
        e.preventDefault()
        this.setState({
            formList: this.state.formList.concat(<FormEducation onClick={this.deleteForm} id={this.state.id}  key={this.state.id}/>),
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
                    <Button className=" w-50 p-2.5" onClick={this.addFormEducation}>Add</Button>
                </div>
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
                    <Form.Group>
                        <Form.Label>
                            To
                        </Form.Label>
                        <Form.Control size="lg" type="text" placeholder="To"/>
                    </Form.Group>
                </div>
                    <Form.Control onClick={this.props.onClick} id={this.props.id} className="bg-danger bg-gradient w-100 p-2 mt-4"  type="button" value="Delete" placeholder="Delete"/>     
                </Form>
        )
    }
}