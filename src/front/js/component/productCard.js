import React, { useState, useEffect } from "react";

const ProductCard = ({onProduct, onQuantity}) => {
  const productLabel= onProduct[0].toUpperCase() + onProduct.slice(1); 
    
  return (
    
      <div className="card d-flex flex-column mt-5 flex-shrink-0"  style={{width: '250px'}}>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/d3/0d/ae/bandeja-mestiza.jpg" className="rounded" alt="..." style={{height: '50%' }}/>
        <div className="card-body">
          <h5 className="card-title">{productLabel}</h5>
          <p className="card-text">product description</p>        
          <input type="number" className="form-control" placeholder="Quantity"/>
          <span href="#" className="btn btn-danger mt-3">
            Add to cart
          </span>
        </div>
      </div>

  );
};

export default ProductCard;
