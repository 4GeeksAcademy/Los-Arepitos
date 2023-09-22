import React from "react";
import "../../styles/order.css";
import { useContext } from "react";
import ProductCard from "../component/productCard";
import { useSearchParams } from "react-router-dom";

const Order = () => {
  const products = [{ 'product': 'arepa', 'quantity': 0 }, { 'product': 'cachapa', 'quantity': 0 }, { 'product': 'tequeno', 'quantity': 0 }, { 'product': 'empanada', 'quantity': 0 }, { 'product': 'patacon', 'quantity': 0 }, { 'product': 'pabellon', 'quantity': 0 }, { 'product': 'quesillo', 'quantity': 0 }, { 'product': 'queso', 'quantity': 0 }, { 'product': 'guasacaca', 'quantity': 0 }, { 'product': 'guayoyo', 'quantity': 0 }, { 'product': 'chicha', 'quantity': 0 }, { 'product': 'malta', }];
  return (
    <div className="container d-flex flex-row col-md-12 mt-5 flex-wrap mx-auto justify-content-center">
      {products.map(({ product, quantity }, item) => {
        return (
          <ProductCard key={item} onProduct={product} onQuantity={quantity} />
        )
      })}
    </div>
  );
};

export default Order;
