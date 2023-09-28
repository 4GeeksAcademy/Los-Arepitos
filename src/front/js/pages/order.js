import React from "react";
import "../../styles/order.css";
import { useContext } from "react";
import ProductCard from "../component/productCard";
import { Context } from "../store/appContext";

const Order = () => {
  const {store, actions} = useContext(Context);
  const products = store.products;
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
