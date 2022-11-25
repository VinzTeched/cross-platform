function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <button>Logout Button</button>
    } else {
        return <button>Login Button</button>
    }
}

export default LogInOutButton;