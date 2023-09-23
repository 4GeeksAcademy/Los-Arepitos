import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Carousel from "../component/carousel";
import CarouselCard from "../component/carousel-card";
export const Home = () => {
const { store, actions } = useContext(Context);

  return (
    <>
      {
        !store.message && (
          <div className="alert alert-danger" role="alert">
            No comunication to the Back End
          </div>
        )
      }      
      <Carousel />    
      <CarouselCard /> 
    </>
  );
};
