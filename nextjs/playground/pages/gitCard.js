// GitHub Test Usernames: gaearon, bvaughn
import React from 'react';


// const testData = [
//     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//     {name: "Chibundo Ilonze", avatar_url: "https://avatars.githubusercontent.com/u/43911801?v=4", company: "Vinshagy Technology"},
//     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];


const CardList = (props) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    )
}

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile"> 
                <img src={profile.avatar_url} />
                <div className='info'>
                    <div className='name'>{profile.name}</div>
                    <div className='company'>{profile.company}</div>
                </div>
            </div>
        );
    }
}
/*
class Form extends React.Component {
    usernameInput = React.createRef();
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            this.usernameInput.current.value
        );
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='GitHub Username' ref={this.usernameInput} required />
                <button>Add Card</button>
            </form>
        );
    }
}
*/

class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`).then(resp => this.props.onSubmit(resp.data)).catch(function (error) {
            console.log(error);
        });
        //this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder='GitHub Username' 
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })} 
                    required />
                <button>Add Card</button>
            </form>
        );
    }
}


class GitCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     };
    // }
    // Same as above
    state = {
        profiles: [],
    };
    addNewProfile = (profileData) => {
        //console.log('App', profileData)
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

    render() {
        return (
            <div className="container   ">
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default GitCard;