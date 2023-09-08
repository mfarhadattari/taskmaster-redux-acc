import { configureStore } from "@reduxjs/toolkit";
import baseAPI from "./features/api/baseAPI";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
