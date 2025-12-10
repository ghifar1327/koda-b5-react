import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
  nextId: 1,
};
 
const formSurvey = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurvey: (state, action) => {
      state.datas.push({
        id: state.nextId,
        ...action.payload,
      });
      state.nextId++;
    },
    deleteSurvey: (state, action) => {
      state.datas = state.datas.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addSurvey, deleteSurvey } = formSurvey.actions;
export default formSurvey.reducer;
