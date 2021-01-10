import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleOrder.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleOrder(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Project Boba</h1>
                                <h2>An Organic Experience</h2>
                            </div>
                            <div className="col noPadding">
                                <ul className="nav social-right">
                                    <li><a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                        className="fa fa-instagram fa-custom"></i></a></li>
                                    <li><a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                        className="fa fa-facebook fa-custom"></i></a></li>
                                    <li><a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                        className="fa fa-twitter fa-custom"></i></a></li>
                                    <li><a className="btn btn-social-icon btn-yelp" href="http://yelp.com/"><i
                                        className="fa fa-yelp fa-custom"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Navbar dark sticky="top" expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <i className="fa fa-list fa-lg" /> Menu
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto">
                                <div className="row">
                                    <div className="col">
                                        <Button onClick={this.toggleModal} className="btn btn-lg btn-color reserveButton" id="reserveButton">Order</Button>
                                    </div>
                                </div>
                                </Nav>
                            </Collapse>
                        </div>

                    </Navbar>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="bg-success text-white" toggle={this.toggleModal}>Order</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;