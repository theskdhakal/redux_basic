import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./nameSlice";

export default configureStore({
  reducer: {
    dataList: dataReducer,
  },
});
