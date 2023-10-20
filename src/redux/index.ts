import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import { saveToLocalStorage } from "../localStorage/localStorageActions";

const reducer = combineReducers({
    tasks: taskSlice
});

export const store = configureStore({ reducer })

/**
 * we can do that way only if this specific configuration
 * where we have only one reducer.
 * If there will be more reducers in application we need to 
 * aproach the setting of localStorage element diffrently
*/ 
store.subscribe(() => {
    const state = store.getState().tasks.tasks;
    saveToLocalStorage(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;