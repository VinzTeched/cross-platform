import { useState } from "react";

const FormCtrl = () => {
    const [value, setValue] = useState("");
    
    const hanleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form>
            <input 
                value={value}
                onChange={hanleChange}
                type="text"
            />
        </form>
    );
};

export default FormCtrl;