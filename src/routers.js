import React from 'react';
import Home from "./components/home";
import Login from "./components/login";

export default [
    {
        key: 'home',
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
    }, {
        key: 'login',
        path: '/login',
        component: Login,
        exact: true,
    }
];
