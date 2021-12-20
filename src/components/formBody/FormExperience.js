import { Component } from "react";
import { Form,Button } from "react-bootstrap";
  class Experience extends Component {
    render(){
        return(
            <div id="excon" className="mt-0 h-100 overflow-auto d-flex flex-column justify-content-start align-items-center"> 
                {this.props.experienceArray}
                <div className="mb-3 mt-3 d-flex justify-content-center align-items-center">
                    <Button className="w-50 p-2.5" onClick={this.props.addFormExperience}>Add</Button>
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
                        <Form.Control name="position" id={this.props.id} onClick={this.props.getIndexExperience} onChange={this.props.onChange}  type="text" placeholder="Position"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            Company
                        </Form.Label>
                        <Form.Control name="company" id={this.props.id} onClick={this.props.getIndexExperience} onChange={this.props.onChange}   type="text" placeholder="Company"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            City
                        </Form.Label>
                        <Form.Control name="city" id={this.props.id} onClick={this.props.getIndexExperience} onChange={this.props.onChange}   type="text" placeholder="City"/>
                    </Form.Group>
            </div>
            <div className="col mt-0">
                    <Form.Group >
                        <Form.Label>
                            From
                        </Form.Label>
                        <Form.Control name="from" id={this.props.id}  onClick={this.props.getIndexExperience} onChange={this.props.onChange}   type="text" placeholder="From"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            To
                        </Form.Label>
                        <Form.Control name="to" id={this.props.id} onClick={this.props.getIndexExperience} onChange={this.props.onChange}   type="text" placeholder="To"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Details
                        </Form.Label>
                        <Form.Control name="details" id={this.props.id} onClick={this.props.getIndexExperience} onChange={this.props.onChange}    as="textarea"  placeholder="Details"/>
                    </Form.Group>
                   
            </div>
            <Form.Control onClick={this.props.onClick} id={this.props.id} className="bg-danger bg-gradient w-100 p-2 mt-4"  type="button" value="Delete" placeholder="Delete"/>

         </Form>
        )
    }
}
export {Experience,FormExperience}