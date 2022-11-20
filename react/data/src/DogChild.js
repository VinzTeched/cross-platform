import DogGrandChild from "./DogGrandChild";

function DogChild(props) {
    return (
        <div>
         {props.name} has <DogGrandChild bowlShape="square" bowlStatus="empty" />
        </div>
    )
}

export default DogChild;