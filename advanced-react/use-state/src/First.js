import './App.css';
import React from 'react'

function First() {
  const [restaurantName, setRestaurantName] = React.useState("Lemon");

  return (
    <h2>{restaurantName}</h2>
  );

}
export default First;
