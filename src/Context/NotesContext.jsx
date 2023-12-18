import { createContext, useReducer } from "react";

/* 1- creation of context */
export const NotesContext = createContext();

/* 4 Creating reducer */
const notesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            const id = Math.random() * 100;
            const newNote = { ...action.payload, id };
            return { ...state, notesList: [...state.notesList, newNote] };

        case 'REMOVE_NOTE':
            const updatedList = state.notesList.filter((note) => note.id !== action.payload.id);
            return { ...state, notesList: updatedList, selectedNote: {} };

        case 'UPDATE_NOTE':
            const updatedNotesList = state.notesList.map((note) => (note.id === action.payload.id ? action.payload : note));
            return { ...state, notesList: updatedNotesList, selectedNote: {} };

        case 'GET_NOTE':
            return state.notesList;

        case 'SET_SELECTED_NOTE':
            return { ...state, selectedNote: { ...action.payload } };

        case 'GET_SELECTED_NOTE':
            return state.selectedNote;

        default:
            return state;
    }
};


/* 2 creation of Provider */
export const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, {
        notesList: [],
        selectedNote: {}
    });

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

/* Finally want to wrap the App with the provider */
