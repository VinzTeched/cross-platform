import DogChild from "./DogChild";

function DogParent() {
    return (
        <DogChild name="Max" bowlShape="square" bowlStatus="full" />
    );
};

export default DogParent;