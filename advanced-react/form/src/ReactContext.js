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
        <header className='AppCont'>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

export const Page = () => {
    const {user} = useUser();
    return (
        <div className='AppCont'>
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Written by {user.name}</p>
        </div>
    );
};
