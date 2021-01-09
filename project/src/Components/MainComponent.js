import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MenuT from './Menu';
import Contact from './ContactComponent';
import { MENU } from '../shared/menu';
import { DRINKS } from '../shared/drinks'
import Home from './HomeComponent';
import { BOBA } from '../shared/bobaImg';
import { Switch, Route, Redirect } from 'react-router-dom';
import BobaInfo from './Boba';
import Directory from './Directory';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: MENU,
            drinks: DRINKS,
            boba: BOBA,
            selectedBoba: null
        }
    }
    onBobaSelect(bobaId) {
        this.setState({selectedBoba: bobaId});
    }
    
render() {



            return (
                <React.Fragment>
                    <Header />
                        <Switch >
                            <Route exact path="/" component={Home} />
                            <Route path="/menu" component={MenuT} />
                            <Route path="/aboutus" component={Contact} />
                            <Route default component={Home} />
                        </Switch>
                    <Footer />
                </React.Fragment>
            );

    }
}

export default Main;