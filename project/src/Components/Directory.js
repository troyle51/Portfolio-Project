
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Image, Text, StyleSheet, Carousel } from 'react-bootstrap';

function RenderDirectoryItem({ boba }) {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boba.image}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boba.image}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boba.image}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        // <Card >
        //     <CardImg width="100%" src={boba.image} alt={boba.name} />
        //     <CardImgOverlay>
        //         <CardTitle>{boba.name}</CardTitle>
        //     </CardImgOverlay>
        // </Card>
    );
}

function Directory(props) {

    const directory = props.boba.map(boba => {
        return (
            <div key={boba.id} className="col">
                <RenderDirectoryItem boba={boba} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;