import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

const reducer = combineReducers({
    tasks: taskSlice
});

export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;