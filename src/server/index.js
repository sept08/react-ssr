import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import Home from '../components/home';

const app = express();
app.use(express.static('public'));

const content = renderToString(<Home />);

app.get('/', (req, res) => {
    res.send(
    `<html>
            <head>
                <title>hello</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/index.js"></script>
            </body>
        </html>`
    );
});

const server = app.listen(3000);
