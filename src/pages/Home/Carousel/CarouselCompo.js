import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../images/carousel-img/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.jpg';
import img2 from '../../../images/carousel-img/national-cancer-institute-LxPrHCm8-TI-unsplash.jpg';
import img3 from '../../../images/carousel-img/sam-moghadam-khamseh-I-kDEBUMAaQ-unsplash.jpg';

const CarouselCompo = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100" style={{ height: '500px' }}
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100 "
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselCompo;