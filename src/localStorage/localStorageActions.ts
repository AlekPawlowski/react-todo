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
    return JSON.parse(localStorageTasks) as ITaskElement[];
};

export { getLocalStorageData };