import React, { useContext, useState } from 'react';
import { TasksContext } from '../Context/TasksContext';

function TasksPage() {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("");

    const { state, dispatch } = useContext(TasksContext);
    const { taskList } = state;

    function handleAddTask(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_TASK",
            payload: { task, time }
        });
        setTask("");
        setTime("");
    }

    function handleDeleteTask(task) {
        dispatch({
            type: "REMOVE_TASK",
            payload: { id: task.id }
        });
    }

    return (
        <div>
            <div className="tasks-page">
                <div className="task-input">
                    <div className="input-inside-task">
                        <h4 id='add-a-task'><b>Add a Task</b></h4>
                        <div classNmae="input">
                            <input
                                id='title-of-task'
                                type="text"
                                placeholder='Add a task....'
                                autoComplete='off'
                                value={task}
                                onChange={(e) => setTask(e.target.value)} />


                            <div>
                                <i className="bx bx-calendar"><small> Date/Time</small></i>
                            </div>

                            <input
                                id='time-to-complete'
                                type="text"
                                placeholder='Enter Time to Complete....'
                                autoComplete='off'
                                value={time}
                                onChange={(e) => setTime(e.target.value)} />
                        </div>

                        <div>
                            <button style={{ width: "90px" }} className='btn btn-outline-dark' onClick={(e) => handleAddTask(e)}>Add</button>
                        </div>
                    </div>
                </div>

                <h3 className=' mx-5'><i className='bx bx-check-circle   mx-4'></i><b>My Tasks</b></h3>

                <div className="task-display" style={{ paddingTop: "5px" }}>
                    <div className="task-box">
                        <ul className='text-center'>
                            {taskList && taskList.map((task) => {
                                return (<li>
                                    <div class="card text-bg-light" style={{ width: "97%" }}>
                                        <div class="card-body horizontal-layout">
                                            <i class='bx bx-circle'></i>

                                            <div class="content">
                                                <h5 class="card-title"><b>{task.task}</b></h5>
                                                <p class="card-text">{task.time}</p>
                                            </div>

                                            <i class='bx bx-trash' onClick={() => handleDeleteTask(task)}></i>
                                        </div>
                                    </div>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TasksPage