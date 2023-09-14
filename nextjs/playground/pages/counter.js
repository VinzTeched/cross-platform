import { useState } from 'react';

const Button = (props) => {
    const handleClick = () => props.onClickFunction(props.increment);
    
    return (
        <button onClick={handleClick} style={{padding: "10px", marginBottom: "20px"}}>
            +{props.increment}
        </button>
    );
}

const Display = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);

    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </div>
    )
}

export default Counter;