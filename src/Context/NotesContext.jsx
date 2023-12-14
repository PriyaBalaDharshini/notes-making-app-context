import { createContext, useReducer } from "react";

/* 1- creation of context */
export const NotesContext = createContext();

/* 4 Creating reducer */
const notesReducer = (state, action) => { /* in action therse will be type and payload.  */
    switch (action.type) {
        case 'ADD_NOTE':
            const id = Math.random() * 100;
            let note = { ...action.payload, id };
            return { ...state, notesList: [...state.notesList, note] };

        case 'REMOVE_NOTE':
            let list = notesList.filter((note) => note.id !== action.payload.id);
            return { ...state, notesList: list };

        case 'UPDATE_NOTE':
            let updatedList = notesList.map((note) => note.id === action.payload.id ? action.payload : note)
            return { ...state, notesList: [...updatedList] };

        case 'GET_NOTE':
            return state.notesList;

        case 'SET_SELECTED_NOTE':
            return { ...state, selectedNote: action.payload };

        case 'GET_SELECTED_NOTE':
            return state.selectedNote;

        default:
            return state;
    }
}

/* 2 creation of Provider */
export const NotesContextProvider = ({ children }) => {

    /* 3 Reducer setup: Provider will give state and dispatch, these will be created from reducers */
    const [state, dispatch] = useReducer(notesReducer, {
        notesList: [],
        selectedNote: {}
    })

    return (
        <NotesContext.Provider value={{ state, dispatch }} >
            {children}
        </NotesContext.Provider >
    )
}

/* Finally want to wrap the App with the provider */
