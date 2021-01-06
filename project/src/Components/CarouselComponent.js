import React, { Component } from 'react';
import  {Carousel} from 'react-bootstrap';
import Image1 from "../img/boba-bubble-tea-homemade.jpg"
import Image2 from "../img/glasses-refreshing-milky.jpg"
import Image3 from "../img/selection-fruit-flavored-bubble-boba-tea.jpg"

class CarouselApp extends Component {

    

    render() {
        return (
            <React.Fragment>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Image2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        );
    }
}

export default CarouselApp;