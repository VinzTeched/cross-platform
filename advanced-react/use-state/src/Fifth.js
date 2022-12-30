import { useState } from "react";

const Fifth = () => {
    const [greeting, setGreeting] = useState(
        {
            greet: "Hello",
            place: "Green App"
        }
    );
    console.log(greeting, setGreeting);

    function updateGreeting() {
        setGreeting(prevState => {
            return {...prevState, place: "WhatsApp"}
        });
    }

    return (
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={updateGreeting}>Update Greeting</button>
        </div>
    );
}

export default Fifth;