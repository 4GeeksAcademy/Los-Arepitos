import React from "react";
import "../../styles/order.css";
import { useContext } from "react";
import ProductCard from "../component/productCard";

const Order = () => {
  return (
    <div className="container d-flex col-md-8 mt-5">      
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  );
};

export default Order;
