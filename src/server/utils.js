import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';

export const render = (req, store, routers) => {
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {routers.map(router => (<Route { ...router} />))}
                </div>
            </StaticRouter>
        </Provider>
    ));

    return `<html>
        <head>
            <title>hello</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.context = {
                    state: ${JSON.stringify(store.getState())}
                }
            </script>
            <script src="/index.js"></script>
        </body>
    </html>`;
};
