import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import routers from "../routers";
import {getClientStore} from "../store";

const store = getClientStore();
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {routers.map(router => <Route { ...router} />)}
                </div>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App/>, document.getElementById('root'));
