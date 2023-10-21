import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskElement, ITaskState, IUpdatePayloadAction } from "../interface/ITaskState";
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
        /**
         * create new
         */
        addTask: (state, action: PayloadAction<ITaskElement>) => {
            // set for first element if its null
            if(!state.tasks){
                state.tasks = [action.payload];
            }else{
                // add to existing tasks
                state.tasks = [...state.tasks, action.payload];
            }
            alert("Task został dodany")
        },
        /**
         * delete task element by payload id
         * filter over all elements and finds id that matches the payload
         * and remove it
         * @param {string} id of the task
         */
        deleteTask: (state, action: PayloadAction<string>) => {
            const elementId = action.payload;
            if(state.tasks){
                const filteredTasks = state.tasks.filter(task => task.id !== elementId);
                if(filteredTasks.length > 0) {
                    state.tasks = filteredTasks;
                }else{
                    state.tasks = null;
                }
            }
            alert("Task został usunięty");
        },
        /**
         * payload need to get id and current status
         * so PayloadAction will get
         * @param {string} id taskElement
         * @param {string} status of the task element
         */
        updateStatus: (state, action: PayloadAction<IUpdatePayloadAction>) => {
            const elementId = action.payload.id;
            const elementStatus = action.payload.status;
            if(state.tasks){
                const task = state.tasks.find(task => task.id === elementId);
                if(task){
                    task.status = elementStatus === "done" ? "todo" : "done";
                    alert(`Task został oznaczony jako ${task.status}`)
                }
            }
        }
    }
})

export const {addTask, deleteTask, updateStatus} = taskSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.tasks;
export default taskSlice.reducer;