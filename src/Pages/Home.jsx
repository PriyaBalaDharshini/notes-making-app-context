import React from 'react'

function Home() {
    return (
        <div>
            <h2 className='mx-5 my-5'><b>Welcome</b></h2>
            <h4 className=' mx-5'><i class='bx bx-notepad mx-3'></i><b>My Notes</b></h4>
            <div className="home-notes"></div>
            <h3 className=' mx-5'><i className='bx bx-check-circle   mx-4'></i><b>My Tasks</b></h3>
            <div className="home-tasks"></div>
        </div>
    )
}

export default Home