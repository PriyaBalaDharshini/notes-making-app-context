import React, { useEffect, useState } from 'react'

function NotesPage() {
    /* For Displaying Time */
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)
    })

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
                                />
                            </h5>

                            <input id="description-of-note"
                                type="text"
                                placeholder='Take a Note...'
                                autoComplete='off'
                            />
                        </div> <br />
                        <span id='time-display'><i class="bx bx-time-five"></i>{`${time.toLocaleTimeString()}`}</span>
                        <div className='button-add'>
                            <button className='btn btn-outline-dark'>Add</button>
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
                        <div class="card" style={{ width: "16rem" }}>
                            <div class="card-body">
                                <h5 class="card-title"> <b>Card title</b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className='card-text'>
                                    {new Date().toLocaleTimeString()}
                                </p>
                                <div className="buttons">
                                    <button className='btn  btn-outline-dark'><i class="bx bx-pencil"></i>Edit</button>
                                    <button className='btn  btn-outline-dark'><i class="bx bx-trash"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "16rem" }}>
                            <div class="card-body">
                                <h5 class="card-title"> <b>Card title</b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className='card-text'>
                                    {new Date().toLocaleTimeString()}
                                </p>
                                <div className="buttons">
                                    <button className='btn  btn-outline-dark'><i class="bx bx-pencil"></i>Edit</button>
                                    <button className='btn  btn-outline-dark'><i class="bx bx-trash"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "16rem" }}>
                            <div class="card-body">
                                <h5 class="card-title"> <b>Card title</b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className='card-text'>
                                    {new Date().toLocaleTimeString()}
                                </p>
                                <div className="buttons">
                                    <button className='btn  btn-outline-dark'><i class="bx bx-pencil"></i>Edit</button>
                                    <button className='btn  btn-outline-dark'><i class="bx bx-trash"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesPage