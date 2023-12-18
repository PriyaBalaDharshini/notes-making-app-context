import React, { useContext } from 'react';
import { TasksContext } from '../Context/TasksContext';
import { NotesContext } from '../Context/NotesContext';


function Home() {

    const notesContext = useContext(NotesContext);
    const { notesList } = notesContext.state;

    const taskContext = useContext(TasksContext);
    const { taskList } = taskContext.state;

    return (
        <div>
            <h2 className='mx-5 my-5'><b>Welcome</b></h2>
            <h4 className=' mx-5'><i className='bx bx-notepad mx-3'></i><b>My Notes</b></h4>
            <div className="home-notes">
                {notesList && notesList.map((note) => (
                    <div className="card" style={{ width: "16rem" }} key={note.id}>
                        <div className="card-body">
                            <h5 className="card-title"> <b>{note.title}</b></h5>
                            <p className="card-text">{note.note}</p>
                            <p className='card-text'>
                                {new Date(note.time).toLocaleTimeString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className=' mx-5'><i className='bx bx-check-circle   mx-4'></i><b>My Tasks</b></h3>
            <div className="home-tasks">
                <ul className='text-center'>
                    {taskList && taskList.map((task) => (
                        <li key={task.id}>
                            <div className="card text-bg-light" style={{ width: "97%" }}>
                                <div className="card-body horizontal-layout">
                                    <i className='bx bx-circle'></i>

                                    <div className="content">
                                        <h5 className="card-title"><b>{task.task}</b></h5>
                                        <p className="card-text">{task.time}</p>
                                    </div>

                                    <i className='bx bx-star'></i>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home;
