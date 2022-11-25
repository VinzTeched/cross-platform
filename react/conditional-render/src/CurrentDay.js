function CurrentDay({day}) {
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if(weekday) {
        message = <h1>Weekday</h1>
    } else if (weekend) {
        message = <h1>Weekend</h1>
    } else {
        message = <h1>Error</h1>
    }
    
    return (
        <div>
            {message}
        </div>
    )
}

export default CurrentDay;