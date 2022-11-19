function Btn() {
    const clickHandler = () => console.log('click');
    function thirdExample() {
        console.log('third example')
    }
    const fourthExample = () => {
        console.log('Fourth example');
        console.log('Under it')
    }
    return (
        <>
            <button onClick={clickHandler} > 
                Click me!
            </button>

            <button onClick={function() {console.log('First example')}}>
                Inline anonymous ES5 function event handler
            </button>

            <button onClick={() => console.log('Second example')}>
                Inline anonymous ES6 function event handler
            </button>

            <button onClick={thirdExample}>
                Using a seperate function declaration
            </button>

            <button onClick={fourthExample}>
                Using a seperate function expression
            </button>
        </>
    )
}

export default Btn;