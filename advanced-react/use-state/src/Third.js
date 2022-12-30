import React from 'react';

const Third = () => {
    const [greeting, setGreeting] = React.useState({greet: "Hello world!"});
    console.log(greeting, setGreeting);

    function updateGreeting() {
        setGreeting({greet: "Hello World-Wide-Web"});
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update Greeting</button>
        </div>
    )
};

export default Third;