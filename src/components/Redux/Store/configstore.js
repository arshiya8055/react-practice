import { createStore, combineReducers } from "redux"; 
import { ColorReducer } from "./Reducers/ColorReducer";

export const configstore=()=>{
    const mystore = createStore(
        combineReducers({ColorReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return mystore
};