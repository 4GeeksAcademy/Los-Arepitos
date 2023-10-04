import React from "react";
import foodVenezuelaURL from "../../img/image-1.jpg";
import assortedAprepasURL from "../../img/image-2.jpg";
import cachapaURL from "../../img/image-3.jpg";
import "../../styles/carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/order");
    };
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active custom-item">
                    <img src={assortedAprepasURL} className="d-block w-100 custom-img" alt="..." />
                    <div className="carousel-caption  top-0 mt-4">
                        <p className="mt-5 fs-2 fw-bolder text-uppercase">The Authentic Venezuelan Cuisine</p>
                        <h1 className="display-1 fw-bolder text-capitalize">Arepitos Venezuelan Food</h1>
                        <button type="button" className="btn btn-danger px-4 py-2 mt-5 btn-lg" onClick={handleClick}>Order Now</button>
                    </div>
                </div>
                <div className="carousel-item custom-item">
                    <img src={foodVenezuelaURL} className="d-block w-100 custom-img" alt="..." />
                    <div className="carousel-caption  top-0 mt-4">
                        <p className="mt-5 fs-2 fw-bolder text-uppercase">The Authentic Venezuelan Food</p>
                        <h1 className="display-1 fw-bolder text-capitalize">Arepitos Venezuelan Food</h1>
                        <Link to="/order">
                            <button type="button" className="btn btn-danger px-4 py-2 mt-5 btn-lg" onClick={handleClick}>Order Now</button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item custom-item">
                    <img src={cachapaURL} className="d-block w-100 custom-img" alt="..." />
                    <div className="carousel-caption  top-0 mt-4">
                        <p className="mt-5 fs-2 fw-bolder text-uppercase">The Authentic Venezuelan Food</p>
                        <h1 className="display-1 fw-bolder text-capitalize">Arepitos Venezuelan Food</h1>
                        <button type="button" className="btn btn-danger px-4 py-2 mt-5 btn-lg" onClick={handleClick}>Order Now</button>

                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>)
}

export default Carousel;