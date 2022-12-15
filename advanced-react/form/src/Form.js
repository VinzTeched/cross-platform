import { useRef } from "react";

const Form = () => {
    const inputRef = useRef(null)

    const handleSubmit = () => {
        const inputValue = inputRef.current.value

        alert(inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
        </form>
    )
}

export default Form;