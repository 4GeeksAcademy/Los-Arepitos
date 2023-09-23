import React from "react";
import "../../styles/carousel-card.css";
import { useNavigate } from "react-router-dom";

const CarouselCard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/order");
    };
    return (
        <>
            <div id="carousel-cards" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper justify-content-around flex-wrap d-flex">
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="1" />                             <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="2" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="3" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper flex-wrap justify-content-around d-flex">
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="5" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="6" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper justify-content-around flex-wrap d-flex">
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="7" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="8" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card flex-md-nowrap">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="9" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            </div>
        </>
    )
}

export default CarouselCard;