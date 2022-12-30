import { useState } from 'react';

const Fourth = () => {
    const [greeting, setGreeting] = useState({ greet: "Hello, World!" });
    console.log(greeting, setGreeting);

    function updateGreeting() {
        const newGreeting = {...greeting};
        newGreeting.greet = "Hello, World Wide Web";
        setGreeting(newGreeting);
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update Greeting</button>
        </div>
    )
}

export default Fourth;