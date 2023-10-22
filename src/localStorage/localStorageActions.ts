import { LOCALSTORAGE_DATA_NAME } from "../config";
import { ITaskElement } from "../interface/ITaskState";

/**
 * function to get data from localStorage, 
 * @return null if there is no eleement available
 * @return {ITaskElement} if there is an available elements, for purposes of that 
 * aplication we assuming that there is always correct data store in localStorage
 */
const getLocalStorageData = () => {
    const localStorageTasks = localStorage.getItem(LOCALSTORAGE_DATA_NAME);
    if(!localStorageTasks) return null;
    let parsedData = [];
    try {
        parsedData = JSON.parse(localStorageTasks);
    } catch (error) {
        console.error(`Error in parsing data - ${error}`);
        parsedData = [];
    }
    return parsedData as ITaskElement[];
};

const saveToLocalStorage = (state: ITaskElement[] | null) => {
    const serilizedState = JSON.stringify(state);
    localStorage.setItem(LOCALSTORAGE_DATA_NAME, serilizedState);
}

export { saveToLocalStorage, getLocalStorageData };