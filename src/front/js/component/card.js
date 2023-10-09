import React from "react";


const Card = () => {
    return (
        <div className="card">
            <h5 className="card-title mx-auto mt-2 my-2 fs-3">Card title 1</h5>
            <img src="https://travelfoodatlas.com/wp-content/uploads/2021/05/arepas-1.jpg.webp" className="card-img-top" alt="4" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;