import React, { useEffect } from "react";
import "../../styles/order.css";
import { useContext } from "react";
import ProductCard from "../component/productCard";
import { Context } from "../store/appContext";

const Order = () => {
  const {store, actions} = useContext(Context);
  const products = store.products;

  useEffect(()=>{

    actions.getProducts()

    return () => {
      console.log("me mori")
    }

  },[])

  return (
    <div className="container d-flex flex-row col-md-12 mt-5 flex-wrap mx-auto justify-content-center">
      {products.map(({ name, quantity, price, description, image_url }, item) => {
        return (
          <ProductCard key={item} onProduct={name} onQuantity={quantity} price={price} description={description} image={image_url}/>
        )
      })}
    </div>
  );
};

export default Order;
