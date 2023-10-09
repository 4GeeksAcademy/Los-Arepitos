import React from "react";
import "../../styles/food-menu.css";
import tequenos from "../../img/startters/tequenos.jpg";
import cachito from "../../img/breakfast/cachito.jpg";
import pabellon from "../../img/lunch/Venezuelan-Food-Pabellon-Criollo.jpg";
import pepito from "../../img/dinner/pepito.jpg";

const FoodMenu = () => {
    
    return (

            <section id="menu" className="menu">
                {/* ======= Menu Section ======= */}
                <div className="container" data-aos="fade-up">
                   
                    <div className="section-header d-flex flex-column align-items-center mt-5">
                        <h2 className="Amatic-SC">Our Menu</h2>
                        <p className="Amatic-SC fs-1">Check Our <span className="Amatic-SC fs-1 text-danger">Menu</span></p>
                    </div>                    
                    <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <li className="nav-item">
                            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                                <h4 className="Inter-self">Starters</h4>
                            </a>
                        </li>{/* End tab nav item */}
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                                <h4 className="Inter-self">Breakfast</h4>                            </a>
                        </li>{/* End tab nav item */}
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                                <h4 className="Inter-self">Lunch</h4>
                            </a>
                        </li>{/* End tab nav item */}
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                                <h4 className="Inter-self">Dinner</h4>
                            </a>
                        </li>{/* End tab nav item */}
                    </ul>
                    <div className="tab-content bg-light rounded" data-aos="fade-up" data-aos-delay="300">
                        <div className="tab-pane fade active show" id="menu-starters">
                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3 className="text-danger fs-1">Starters</h3>
                            </div>
                            {/* Menu Items */}
                            <div className="row gy-5">
                                <CardItems src={tequenos}/>  
                                <CardItems src={tequenos}/> 
                                <CardItems src={tequenos}/> 
                                <CardItems src={tequenos}/> 
                                <CardItems src={tequenos}/> 
                                <CardItems src={tequenos}/>                                                                                          
                            </div>
                        </div>
                        {/* End Starter Menu Content */}
                        <div className="tab-pane fade" id="menu-breakfast">
                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3 className="text-danger fs-1">Breakfast</h3>
                            </div>
                                {/* Menu Item */}
                            <div className="row gy-5">
                                <CardItems src={cachito}/>
                                <CardItems src={cachito}/>
                                <CardItems src={cachito}/>
                                <CardItems src={cachito}/>
                                <CardItems src={cachito}/>
                                <CardItems src={cachito}/> 
                            </div>
                        </div>
                        {/* End Breakfast Menu Content */}
                        <div className="tab-pane fade" id="menu-lunch">

                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3 className="text-danger fs-1">Lunch</h3>
                            </div>

                            <div className="row gy-5">
                                <CardItems src={pabellon}/>
                                <CardItems src={pabellon}/>
                                <CardItems src={pabellon}/>
                                <CardItems src={pabellon}/>
                                <CardItems src={pabellon}/>
                                <CardItems src={pabellon}/>
                                {/* Menu Item */}
                            </div>
                        </div>
                        {/* End Lunch Menu Content */}
                        <div className="tab-pane fade" id="menu-dinner">

                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3 className="text-danger fs-1">Dinner</h3>
                            </div>
                            <div className="row gy-5">
                                <CardItems src={pepito}/>
                                <CardItems src={pepito}/>
                                <CardItems src={pepito}/>
                                <CardItems src={pepito}/>
                                <CardItems src={pepito}/>
                                <CardItems src={pepito}/>
                                {/* Menu Item */}
                            </div>
                        </div>
                        {/* End Dinner Menu Content */}
                    </div>
                </div>
                {/* End Menu Section */}
            </section>
        )
}

export default FoodMenu;


const CardItems = ({src}) => {
    return (
        <div className="col-lg-4 menu-item">
        <div className="rounded" style={{with: "100%"}}><img src={src} className="menu-img img-fluid rounded" alt="" /></div>
        <h4>Magnam Tiste</h4>
        <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
        </p>
        <p className="price">
            $5.95
        </p>
    </div>
    )
    }