import React, { useContext, useEffect, useState } from 'react'
import { NotesContext } from '../Context/NotesContext';

function NotesPage() {

    const [time, setTime] = useState(new Date());
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [id, setId] = useState(0);
    const [buttonText, setButtonText] = useState("Add");

    const { state, dispatch } = useContext(NotesContext);

    const { notesList, selectedNote } = state;

    function handleAddNote(e) {
        e.preventDefault()
        if (buttonText === "Update") {
            dispatch({
                type: 'UPDATE_NOTE',
                payload: { id, title, note, time }
            })
        } else {
            dispatch({
                type: 'ADD_NOTE',
                payload: { title, note, time }
            });
        }
        setTitle("");
        setNote("");
        setButtonText("Add");
    }

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)
    })

    function handleEditNote(note) {
        dispatch({
            type: 'SET_SELECTED_NOTE',
            payload: note
        });
    }

    useEffect(() => {
        if (Object.keys(selectedNote).length !== 0) {
            setTitle(selectedNote.title);
            setNote(selectedNote.note);
            setId(selectedNote.id);
            setButtonText("Update");
        } else {
            setButtonText("Add");
        }
    }, [selectedNote]);

    function handleDeleteNote(note) {
        dispatch({
            type: "REMOVE_NOTE",
            payload: { id: note.id }
        })
    }

    return (
        <div>
            <div className="notes-page">
                <div className="note-input">
                    <div className="input-inside-note">
                        <h4 id='add-a-note'><b>Add a Note</b></h4>
                        <div className="input">
                            <h5>
                                <input id='title-of-note'
                                    type="text"
                                    placeholder='Title...'
                                    autoComplete='off'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </h5>

                            <input id="description-of-note"
                                type="text"
                                placeholder='Take a Note...'
                                autoComplete='off'
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div> <br />
                        <span id='time-display'><i class="bx bx-time-five"></i>{`${time.toLocaleTimeString()}`}</span>
                        <div className='button-add'>
                            <button className='btn btn-outline-dark' onClick={(e) => handleAddNote(e)} >{buttonText}</button>
                        </div>
                        <div className='note-icons'>
                            <p><i class='bx bx-color-fill'></i></p>
                            <p><i class='bx bx-list-ul'></i></p>
                            <p><i class='bx bx-underline'></i></p>
                            <p><i class='bx bx-align-left'></i></p>
                            <p><i class='bx bx-undo'></i></p>
                            <p><i class='bx bx-redo'></i></p>
                        </div>
                    </div>
                </div>

                <h4 className=' mx-5'><i class='bx bx-notepad mx-3'></i><b>My Notes</b></h4>

                <div className="note-display">
                    <div className="notes-box">
                        {notesList && notesList.map((note) => {
                            return (<div class="card" style={{ width: "16rem" }} key={note.id}>
                                <div class="card-body">
                                    <h5 class="card-title"> <b>{note.title}</b></h5>
                                    <p class="card-text">{note.note}</p>
                                    <p className='card-text'>
                                        {new Date(note.time).toLocaleTimeString()}
                                    </p>
                                    <div className="buttons">
                                        <button className='btn  btn-outline-dark' onClick={() => handleEditNote(note)}><i class="bx bx-pencil"></i>Edit</button>
                                        <button className='btn  btn-outline-dark' onClick={() => handleDeleteNote(note)}><i class="bx bx-trash"></i>Delete</button>
                                    </div>
                                </div>
                            </div>)
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesPage