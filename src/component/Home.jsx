import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img src="/assests/1.jpg" class="card-img" alt="background" height='550px' />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <h5 class="card-title display-3">New season arrivals</h5>
          <p class="card-text">
            Check Out All The Trends
          </p>
          
        </div>
      </div>
      <Products/>
    </div>
  );
};
export default Home;
