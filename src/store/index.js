import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer} from "../components/home/store";

const reducer = combineReducers({
    home: homeReducer
});

// 使用函数导出，避免单例引用
export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
};

export const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk));
};
