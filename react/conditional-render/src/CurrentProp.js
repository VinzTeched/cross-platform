function CurrentProp(props) {
    if(props.day >= 1 && props.day <= 5) {
        return <h1>Weekday</h1>
    }
    return <h1>Weekend</h1>
}

export default CurrentProp;