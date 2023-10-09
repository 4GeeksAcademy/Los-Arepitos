import React from "react";
import "../../styles/order.css";
import Order from "./order";
import ShoopingCart from "../component/shoopingCart";

const CreateOrder = () => {
  return (
    <div className="text-center mt-5">
      <ShoopingCart />
    </div>
  );
};

export default CreateOrder;
