import { Component } from "react";
import { Form,Button } from "react-bootstrap";
export default class Education extends Component {
    
    render(){
        return(
            <div id="ed-con" className="mt-0 h-100 overflow-auto d-flex flex-column justify-content-start align-items-center"> 
            {this.props.educationArray}
                <div className="mb-3 mt-3 d-flex justify-content-center align-items-center">
                    <Button className=" w-50 p-2.5" onClick={this.props.addFormEducation}>Add</Button>
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
                            University/Course/School name
                        </Form.Label>
                        <Form.Control name="ucs" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange} type="text" placeholder="University/Course/School name"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            City
                        </Form.Label>
                        <Form.Control name="city" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange}  type="text" placeholder="City"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            Degree
                        </Form.Label>
                        <Form.Control name="degree" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange}  type="text" placeholder="Degree"/>
                    </Form.Group>
                </div>
                <div className="col mt-0">
                    <Form.Group >
                        <Form.Label>
                            Subject
                        </Form.Label>
                        <Form.Control name="subject" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange}  type="text" placeholder="Subject"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            From
                        </Form.Label>
                        <Form.Control name="from" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange} type="text" placeholder="From"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            To
                        </Form.Label>
                        <Form.Control name="to" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange} type="text" placeholder="To"/>
                    </Form.Group>
                </div>
                <Form.Group>
                    <Form.Label>
                        Details
                    </Form.Label>
                    <Form.Control name="details" id={this.props.id} onClick={this.props.getIndexEducation} onChange={this.props.onChange} className="w-100 "  as="textarea"  placeholder="Details"/>
                </Form.Group>
                    <Form.Control onClick={this.props.onClick} id={this.props.id} className="bg-danger bg-gradient w-100 p-2 mt-4"  type="button" value="Delete" placeholder="Delete"/>     
                </Form>
        )
    }
}
export {Education,FormEducation}