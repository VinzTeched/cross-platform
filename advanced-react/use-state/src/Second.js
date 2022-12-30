import { useState } from 'react';

const Second = () => {
    const [restaurantName, setRestaurantName] = useState("Lemon");

    function updateRestaurantName() {
        setRestaurantName("Little Lemon")
    }

    return (
        <div>
            <h1>{restaurantName}</h1>
            <button onClick={updateRestaurantName}>Update Restaurant Name</button>
        </div>
    )
};

export default Second;