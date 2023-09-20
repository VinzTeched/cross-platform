//const express = require('express');
import express from 'express';
import React from 'react';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server'
import { App } from '../client/App';
import { handleModifyAnsVote } from '../shared/utility';

const data = {
    questions: [{
        questionId: "Q1",
        content: "Should we use JQuery or Fetch for Ajax?"
    },{
        questionId: "Q2",
        content: "What is the best feature of React?"
    }],
    answers: [{
        answerId: "A1",
        questionId: "Q1",
        upvotes: 2,
        content: "JQuery"
    },{
        answerId: "A2",
        questionId: "Q1",
        upvotes: 1,
        content: "Fetch"
    }, {
        answerId: "A3",
        questionId: "Q2",
        upvotes: 3,
        content: "Performance"
    }, {
        answerId: "A4",
        questionId: "Q2",
        upvotes: 4,
        content: "Scalability"
    }]
}

const app = new express();

app.use(express.static('dist'));

app.get('/data', async(_req, res) => {
    res.json(data);
})

app.get('/', async (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf8`);
    const rendered = renderToString(<App {... data} />);
    res.send(index.replace("{{rendered}}", rendered));
    // res.send(
    //     `<h1>REACT IS EXCELLENCE</h1>`
    // )
});

app.listen(7777);

console.info("Server is listening");