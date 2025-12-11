import { configureStore } from "@reduxjs/toolkit";
import formSurveyReducer from "./slices/formmSurvey.js";
import inputProductReduser from "./slices/product.js"
import storage from "redux-persist/lib/storage"
import InputSurvey from "../components/InputSurvey.jsx";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistStore from "redux-persist/es/persistStore";

const persistConfig= {
    key: 'koda-redux',
    storage,
}
const persistedReducer = persistCombineReducers(persistConfig,{
    survey : formSurveyReducer ,
    inputProduct: inputProductReduser,
})
const store = configureStore({
    reducer: persistedReducer   
})
export const persistedStore = persistStore(store)
export default store
