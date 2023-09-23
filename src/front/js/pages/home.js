import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carousel from "../component/carousel";
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
    </>
  );
};
