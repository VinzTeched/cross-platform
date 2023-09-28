import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="mt-4 p-5 bg-primary text-white rounded">
    <h1>Vinshagy Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-lg btn-warning">
      Learn more
    </Link>
  </div>
);

export default HomePage;
