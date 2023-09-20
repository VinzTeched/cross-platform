import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { handleModifyAnsVote } from '../shared/utility';


let state = undefined;

fetch("http://localhost:7777/data")
    .then(data => data.json())
    .then(json => {
        state = json;
        console.log("Got the state", state);
        render();
    })

//  ReactDOM.render(<App />, document.querySelector('#container'))

function handleVote(answerId, increment) {
    state.answers = handleModifyAnsVote(state.answers, answerId, increment);
    render();
}


function render() {
    ReactDOM.hydrate(<App {... state} handleModifyAnsVote={handleVote} />, document.querySelector('#container'));
}

//render();