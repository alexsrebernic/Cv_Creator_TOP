import { Component } from "react";
import { Form } from "react-bootstrap";
export default class PersonalInformation extends Component{
    render(){
        return(
            <Form className="row align-items-start">
            <div className="col">
                <Form.Group >
                    <Form.Label>
                        First name
                    </Form.Label>
                    <Form.Control  name="firstname" onChange={this.props.onChange} size="lg" type="text" placeholder="First name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Last name
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="lastname"  size="lg" type="text" placeholder="Last name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Title
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="title" size="lg" type="text" placeholder="Title"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="address" size="lg" type="text" placeholder="Adress"/>
                </Form.Group>
                </div>
                <div className="col">
                <Form.Group>
                    <Form.Label>
                        Phone number
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="phonenumber"  size="lg" type="text" placeholder="Phone number"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="email"  size="lg" type="text" placeholder="Email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Photo
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="photo"  size="lg" type="text" placeholder="Url"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Details
                    </Form.Label>
                    <Form.Control onChange={this.props.onChange} name="details" size="lg" as="textarea"  placeholder="Details"/>
                </Form.Group>
                </div>
            </Form>
        )
    }
}