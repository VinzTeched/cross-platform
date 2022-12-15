import { useState } from "react";

const Forme = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("")
        console.log('Form Submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <button disabled={!name} type="submit">Submit</button>
            </fieldset>
        </form>
    );
}

export default Forme;