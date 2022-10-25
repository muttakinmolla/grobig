import React from 'react';
import slider from '../../../assets/images/slider-image1.jpg';
import slider2 from '../../../assets/images/slider-image2.jpg';
import slider3 from '../../../assets/images/slider-image3.jpg';


const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide m-0" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='text-dark'>Skill UP</h5>
                        <p className='text-dark'>Take a course and develop your career</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Be Familiar in Online</h5>
                        <p>Grow up in Online. Be established by learning something new</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Take a Challenge.</h5>
                        <p>Be the perfect one. Grow uo your career</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;