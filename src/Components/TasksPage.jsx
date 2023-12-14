import React from 'react'

function TasksPage() {
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
                                autoComplete='off' />

                            <div>
                                <i className="bx bx-calendar"><small> Date/Time</small></i>
                            </div>

                            <input
                                id='time-to-complete'
                                type="text"
                                placeholder='Enter Time to Complete....'
                                autoComplete='off' />
                        </div>

                        <div>
                            <button style={{ width: "90px" }} className='btn btn-outline-dark'>Add</button>
                        </div>
                    </div>
                </div>

                <h3 className=' mx-5'><i className='bx bx-check-circle   mx-4'></i><b>My Tasks</b></h3>

                <div className="task-display" style={{ paddingTop: "5px" }}>
                    <div className="task-box">
                        <ul className='text-center'>
                            <li>
                                <div class="card text-bg-light" style={{ width: "97%" }}>
                                    <div class="card-body horizontal-layout">
                                        <i class='bx bx-circle'></i>

                                        <div class="content">
                                            <h5 class="card-title"><b>Light card title</b></h5>
                                            <p class="card-text">Some quick example text</p>
                                        </div>

                                        <i class='bx bx-trash'></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card text-bg-light" style={{ width: "97%" }}>
                                    <div class="card-body horizontal-layout">
                                        <i class='bx bx-circle'></i>

                                        <div class="content">
                                            <h5 class="card-title"><b>Light card title</b></h5>
                                            <p class="card-text">Some quick example text</p>
                                        </div>

                                        <i class='bx bx-trash'></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card text-bg-light" style={{ width: "97%" }}>
                                    <div class="card-body horizontal-layout">
                                        <i class='bx bx-circle'></i>

                                        <div class="content">
                                            <h5 class="card-title"><b>Light card title</b></h5>
                                            <p class="card-text">Some quick example text</p>
                                        </div>

                                        <i class='bx bx-trash'></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TasksPage