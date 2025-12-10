import { configureStore } from "@reduxjs/toolkit";
import formSurveyReducer from "./slices/formmSurvey.js";
const store = configureStore({
    reducer:{
    survey : formSurveyReducer ,
    }
})
export default store
