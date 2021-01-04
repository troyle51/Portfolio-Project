import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { MENU } from '../shared/menu';
import { DRINKS } from '../shared/drinks'
import Home from './HomeComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: MENU,
            drinks: DRINKS
        }
    }


render() {


            return (
                <React.Fragment>
                    <Header />
                    <Footer />
                </React.Fragment>
            );

    }
}

export default Main;