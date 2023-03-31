import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDt: "",
  dtList: [],
};

const dataSlice = createSlice({
  name: "dataName",
  initialState,

  reducers: {
    setFormDt: (state, action) => {
      (state.formDt = action), payload;
    },
    setDtList: (state, action) => {
      state.dtList = [...state.dtList, state.formDt];
    },
  },
});

const { reducer, actions } = dataSlice;
export const { setFormDt, setDtList } = actions;
export default reducer;
