import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import createSagaMiddleware from "@redux-saga/core";
//import { routerMiddleware, connectRouter, RouterState } from "connected-react-router";


import SampleReducer from "./SampleReducer";
import MemberReducer from "./MemberReducer";

export const history = createBrowserHistory();

const rootReducer = (history) => ({
    Sample: SampleReducer,
    Member: MemberReducer
    //router: connectRouter(history)
})

const preloadedState = {};
const sagamiddleware = createSagaMiddleware()

export default function createMyStore() {
    let middlewarelist = process.env.NODE_ENV === 'production' ? [sagamiddleware] : [logger, sagamiddleware]
    return{
        ...configureStore({
            middleware: middlewarelist,
            reducer: rootReducer(history),
            preloadedState
        }),
        runSaga:sagamiddleware.run
    }
}