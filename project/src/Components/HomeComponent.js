import React, { Component } from 'react';
import Map from './MapComponent';
import CarouselApp from './CarouselComponent';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <CarouselApp />
                    <Map />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Home;