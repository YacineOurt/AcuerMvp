import React from "react";
import Chart from "../compenents/Chart";
import Navbar from "../compenents/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Chart></Chart>
    </div>
  );
};

export default Home;
