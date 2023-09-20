import React from "react";

const ProductCard = () => {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img src="https://static.wixstatic.com/media/82643f_4753976d1b264f36a0d1689230dae0ae~mv2.jpg/v1/crop/x_74,y_0,w_1712,h_1860/fill/w_560,h_612,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pepitoarepas-9.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Product title</h5>
        <p className="card-text">product description</p>
        <input type="number" className="form-control" placeholder="Quantity" />
        <span href="#" className="btn btn-danger mt-3">
          Add to cart
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
