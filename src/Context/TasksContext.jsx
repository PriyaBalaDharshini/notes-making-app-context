import { createContext, useReducer } from "react";

export const TasksContext = createContext();

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const id = Math.random() * 100;
            const newTask = { ...action.payload, id };
            return { ...state, taskList: [...state.taskList, newTask] }

        case 'REMOVE_TASK':
            const updatedList = state.taskList.filter((task) => task.id !== action.payload.id);
            return { ...state, taskList: updatedList, selectedTask: {} };

        case 'UPDATE_TASK':
            const updatedTasksList = state.taskList.map((task) => (note.id === action.payload.id ? action.payload : task));
            return { ...state, taskList: updatedTasksList, selectedTask: {} };

        case 'SET_SELECTED_TASK':
            return { ...state, selectedTask: { ...action.payload } };

        default:
            return state;
    }
}

export const TasksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        taskList: [],
        selectedTask: {}
    });
    return (
        <TasksContext.Provider value={{ state, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}