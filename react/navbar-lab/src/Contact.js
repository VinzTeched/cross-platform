function Contact() {

    const summer = true;
    const time = new Date().getHours();

    return (
        <>
            <h1>Contact Little Lemon on this page.</h1>
            {summer 
            ? <h4>Hello summer</h4>
            : <h4>Hello ordinary</h4>}
            {time >= 6 && time <= 18
            ? <h4>Day</h4>
            : <h4>Night</h4>}

        </>
    )
}

export default Contact;