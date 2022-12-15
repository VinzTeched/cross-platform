import { useState } from "react";
import './App.css'

const FeedbackForm = () => {
    const [score, setScore] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment providing why the experience was poor.");
            return;
        }

        console.log("Form Submitted!");
        setComment("");
        setScore("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback Form</h2>
                <div className="Field">
                    <label>Score: {score} ⭐</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="10" 
                        value={score} 
                        onChange={(e) => setScore(e.target.value)} />
                </div>

                <div>
                    <label>Comment: </label>
                    <textarea 
                        value={comment} 
                        rows="5"
                        onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
};

export default FeedbackForm;