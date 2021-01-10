import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type ==='checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (

            <div className="container bg-white">
                <div className="row row-content">
                    <div className="col mx-auto">
                        <h1 className="text-center contactHeader"> About Project Boba</h1>
                        <p>We are Project Boba. We came together to as a small group of boba loving college students. Throughout our years we dreamed of having our own boba shop. After many rough years, we have finally made it a reality. Please join us in sharing our love for boba!
                        </p>
                        <h1 className="text-center contactHeader">Our Mission</h1>
                        <p>Our mission is to provide top quality boba to all of our customers. We pride ourselves in
                            serving the best boba in the area with the highest quality ingredients.</p>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <div className="card card border-secondary h-100">
                            <div className="card-header bg-success text-white">
                                <h3>Send Us Your Feedback</h3>
                            </div>
                            <div className="col-md-10">
                                <br></br>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastName" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="lastName" name="lastName"
                                                placeholder="Last Name"
                                                value={this.state.lastName}
                                                onChange={this.handleInputChange} />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                        <Col md={10}>
                                            <Input type="tel" id="phoneNum" name="phoneNum"
                                                placeholder="Phone number"
                                                value={this.state.phoneNum}
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id="email" name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 4, offset: 2}}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox"
                                                        name="agree"
                                                        checked={this.state.agree}
                                                        onChange={this.handleInputChange} /> {' '}
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <Input type="select" name="contactType"
                                                    value={this.state.contactType}
                                                    onChange={this.handleInputChange}>
                                                <option>By Phone</option>
                                                <option>By Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="feedback" name="feedback"
                                                rows="12"
                                                value={this.state.feedback}
                                                onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
