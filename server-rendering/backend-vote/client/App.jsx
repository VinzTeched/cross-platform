import React from 'react';

const App = ({questions, answers, handleModifyAnsVote}) => {
    function handleClick() {
        console.log('this is:');
      }

      const shoot = () => {
        alert("Great Shot!");
      }

    return (
        <div>
            <h1>Q&A Tool</h1>
            {questions.map(({questionId, content}) => (
                <div key={questionId}>
                    <h3>{content}</h3>
                    {answers.filter(answer => answer.questionId === questionId).map(
                        ({content, upvotes, answerId}) => (
                            <div key={answerId}>
                                <span>{content} - {upvotes}</span> &nbsp;
                                <button key={answerId} onClick={() => handleModifyAnsVote(answerId, 1)}>+</button>
                                <button onClick={() => handleModifyAnsVote(answerId, -1)}>-</button>
                            </div>
                        )
                    )}
                </div>
            ))} 
        </div>
    )
}

export { App };