import Carousel from 'react-bootstrap/Carousel';

import holder1 from './holder1.jpg';
import holder2 from './holder2.jpg';
import holder3 from './holder3.jpg';

import svg from './svgColor.png';

import './Carousel.css';

function CarouselFade() {
    return (
        <center>
        <Carousel className='Carousel' controls={ false } fade>
            <Carousel.Item>
                <img className='svg' src={svg} />
                <div className='screen'></div>
                <img
                    className="d-block w-100 holder"
                    src={holder1}
                    alt='slide 1'
                />
                <Carousel.Caption className='caption'>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='svg' src={svg} />
                <div className='screen'></div>
                <img
                    className="d-block w-100 holder"
                    src={holder2}
                    alt='slide 2'
                />
                <Carousel.Caption className='caption'>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='svg' src={svg} />
                <div className='screen'></div>
                <img
                    className="d-block w-100 holder"
                    src={holder3}
                    alt='slide 3'
                />
                <Carousel.Caption className="caption">
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </center>
    );
}

export default CarouselFade;