import express from 'express';
import React from 'react';
import Home from './components/home';
import { renderToString } from 'react-dom/server'

const app = express();
const content = renderToString(<Home />);

app.get('/', (req, res) => {
    res.send(
    `<html>
            <head>
                <title>hello</title>
            </head>
            <body>
                ${content}
            </body>
        </html>`
    );
});

const server = app.listen(3000);
