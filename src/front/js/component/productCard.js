import React, { useState, useEffect } from "react";
import "../../styles/order.css";
import QRCode from "qrcode";

const ProductCard = ({ onProduct, onQuantity, description, price, image }) => {
  const [ qrTestProductCode, setQrTestProductCode ] = useState(image) 

  const generateQR = async text => {
    try {
      let imageQR = await QRCode.toDataURL(text)
      setQrTestProductCode(imageQR)
      return imageQR
    } catch (err) {
      console.error(err)
    }
  }
  
  generateQR(`https://www.youtube.com/watch?v=${description}`)
  

  const productLabel = onProduct[0].toUpperCase() + onProduct.slice(1);

  return (

    <div className="card d-flex flex-column mt-5 flex-shrink-0" style={{ width: '250px' }}>
      <img src={qrTestProductCode} className="rounded" alt="..." style={{ height: '50%' }} />
      <div className="card-body">
        <h5 className="card-title">{productLabel}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">$ { parseFloat(price).toFixed(2) }</p>
        <input type="number" className="" placeholder="Quantity" />
        <span href="#" className="btn btn-danger mt-3">
          Add to cart
        </span>
      </div>
    </div>

  );
};

export default ProductCard;
