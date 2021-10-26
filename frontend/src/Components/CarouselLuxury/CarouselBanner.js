import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselBanner.css';

export default function CarouselBanner() {
    return (
<div className="carousel-luxury">
    <Carousel fade>
        <Carousel.Item>
            <img
                className="carousel-banner"
                src="/images/Banner-1.jpg"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="carousel-banner"
                src="/images/Banner-2.jpg"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="carousel-banner"
                src="/images/Banner-3.jpg"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="carousel-banner"
                src="/images/Banner-4.jpg"
                alt="Fourth slide"
            />
        </Carousel.Item>
    </Carousel>
</div>
    )
}
