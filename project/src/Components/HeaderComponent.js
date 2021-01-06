import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
                                        <Button className="btn btn-lg btn-color reserveButton" id="reserveButton">Order</Button>
                                    </div>
                                </div>
                                </Nav>
                            </Collapse>
                        </div>

                    </Navbar>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;