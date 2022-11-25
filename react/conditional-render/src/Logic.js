function Logic() {
    const val = prompt("Anything but a 0");

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val && <h2>Yay no zero was typed in!</h2>}
        </div>
    )
}

export default Logic;