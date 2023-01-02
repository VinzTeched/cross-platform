import React from 'react';

function Two() {
    const [petName, setPetName] = React.useState("Fluffy");

    function nameLooper() {
        if (petName === "Fluffy") {
            setPetName("Rexy");
        } else if(petName === "Rexy") {
            setPetName("Gizmo");
        } else if (petName === "Gizmo") {
            setPetName("Fluffy");
        }
    }

    return (
        <div>
            <h1>I am thinking to name my pet {petName}</h1>
            <button onClick={nameLooper}>Pick a new name</button>
        </div>
    );
}

export default Two;