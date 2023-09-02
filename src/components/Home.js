import React from "react";
import "./Home.css";
import datasmall from "../data/datasmall";
import Productlist from "../repeatsection/Productlist";


const Home = () => {
  return (
    <>
      <div className="container-main-heading">
        <div className="container-heading">
          <div className="left-section">
            <h1>See Everything with Clarity</h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we've got your
              eyes covered
            </p>
            <button>Learn More</button>
          </div>
          <div className="right-section">
            <img src="images\banner-girl.png" alt="Eyewear" />
          </div>
        </div>
      </div>

      <Productlist products={datasmall}/>
    </>
  );
};

export default Home;
