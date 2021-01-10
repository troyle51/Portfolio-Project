import React, { Component } from 'react';
import Map from './MapComponent';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {


    render(){
        return (
            <div className="container bg-white">
                {/* <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div> */}
                    
                <div className="row">
                    <div className="col-md order">
                        <div>
                            <h2 className="orderHeader">Our Address</h2>
                        </div>
                        <address>
                            1234 South Street<br />
                            Philadelphia, PA 19107<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col-md order">
                        <h2 className="orderHeader">Contact Us</h2>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-215-555-1234</a>
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> Boba@boba.com</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <Map />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;