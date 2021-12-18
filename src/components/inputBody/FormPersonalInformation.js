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
                    <Form.Control size="lg" type="text" placeholder="First name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Last name
                    </Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Last name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Title
                    </Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Title"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Adress
                    </Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Adress"/>
                </Form.Group>
                </div>
                <div className="col">
                <Form.Group>
                    <Form.Label>
                        Phone number
                    </Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Phone number"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Photo
                    </Form.Label>
                    <Form.Control size="lg" type="file" placeholder="Photo"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Details
                    </Form.Label>
                    <Form.Control size="lg" as="textarea"  placeholder="Details"/>
                </Form.Group>
                </div>
            </Form>
        )
    }
}