import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskElement, ITaskState } from "../interface/ITaskState";
import { getLocalStorageData } from "../localStorage/localStorageActions";
import { RootState } from ".";

// inital state for the tasks, starts from localstorage
const initalTaskState: ITaskState = {
    tasks: getLocalStorageData()
}

export const taskSlice = createSlice({
    initialState: initalTaskState,
    name: "tasks",
    reducers: {
        addTask: (state, action: PayloadAction<ITaskElement>) => {
            // set for first element if its null
            if(!state.tasks){
                state.tasks = [action.payload];
            }else{
                // add to existing tasks
                state.tasks = [...state.tasks, action.payload];
            }
        }
    }
})

export const {addTask} = taskSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.tasks;
export default taskSlice.reducer;