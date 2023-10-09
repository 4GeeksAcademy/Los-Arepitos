import React, { useState, useEffect } from "react";
import "../../styles/carousel-card.css";
import { useNavigate } from "react-router-dom";
import Card from "./card";

const CarouselCard = () => {
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const handleClick = () => {
        navigate("/order");
    };
    // const handleResize = () => {
    //    if (windowSize[0] < 1080 && windowSize[0] > 760) {
    //         return (
    //             <>
    //             <div className="carousel-item active d-flex justify-content-around"> 
    //             <Card />
    //             <Card />   
    //             </div>             
    //             </>
    //         ) 
    //    } else if (windowSize[0] > 1080) {
    //         return (
    //             <>
    //             <div className="carousel-item active d-flex mx-auto justify-content-between"> 
    //             <Card />
    //             <Card />
    //             <Card />
    //             </div>
    //             </>
    //         ) 
    //    }
    //    return (
    //          <div className="carousel-item active d-flex mx-auto"> 
    //             <Card />
    //         </div>
    //    )
    // }

    return (
        <div id="carousel-cards" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card-wrapper d-flex flex-wrap justify-content-evenly">
                            <div className="card">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 1</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 2</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 3</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card-wrapper d-flex flex-wrap justify-content-evenly">
                            <div className="card">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 4</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="7" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>  
                            </div>                        
                            <div className="card">
                                <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 5</h5>
                                <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card">
                                    <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 6</h5>
                                    <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>        
                    </div>
                </div>
                <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="1" aria-label="Slide 2"></button>                                
                            </div>
            </div>
        </div>
         
        )
}

export default CarouselCard;