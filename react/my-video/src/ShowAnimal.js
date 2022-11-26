import cat from "./assets/images/cat.png";

function ShowAnimal() {
    return (
        <div>
            <img src={cat} alt="A cat" />    
            <img src={require('./assets/images/cat.png')} alt="My cat" />
        </div>
    );
}

export default ShowAnimal;