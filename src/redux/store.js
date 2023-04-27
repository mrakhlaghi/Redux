import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger, thunk)));
export default store;

