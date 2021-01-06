import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderBoba({boba}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg src={boba.image} alt={boba.name} />
                <CardBody>
                    <CardTitle>{boba.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

function BobaInfo(props) {
    if (props.boba) {
        return (
            <div className="container">
                <div className="row">
                    <RenderBoba boba={props.boba} />
                </div>
            </div>
        );
    }
    return <div />;
}


export default BobaInfo;