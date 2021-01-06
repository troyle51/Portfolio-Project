import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

class Map extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-md-6 offset-md-3">
                            <Card className="card card border-secondary h-100">
                                <div className="card-header bg-success text-white">
                                    <h3>Location</h3>
                                </div>
                                <div className="card-body">
                                    <ResponsiveEmbed aspectRatio="16by9">
                                        <embed src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3058.4692083681307!2d-75.16468058492391!3d39.95326107942166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scity%20hall%20philadelphia%20pa!5e0!3m2!1sen!2sus!4v1606481343137!5m2!1sen!2sus" allowfullscreen="" />
                                    </ResponsiveEmbed>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Map;