import './App.css'
import { useUser } from './UserContext';

export const LoggedInUser = () => {
    const {user} = useUser();

    return (
        <p>
            Hello <span className="Username">{user.name}</span>
        </p>
    );
};

export const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

export const Page = () => {
    const {user} = useUser();
    return (
        <div>
            <h2>Lorem ipsum</h2>
            <p>This is just a random text.</p>
            <p>Written by {user.name}</p>
        </div>
    );
};
