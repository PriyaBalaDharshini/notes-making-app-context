import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <div>
                <h3 style={{ textAlign: "center", margin: "25px" }}> <b>Notes App</b></h3>
            </div>
            <ul>
                <li className='list-item'><Link to={'/'}><i className='bx bx-home-alt'></i>Home</Link></li>
                <li className='list-item'><Link to={'/Search'}><i className='bx bx-search-alt-2'></i>Search</Link></li>
                <li className='list-item'><Link to={'/Notes'}><i className='bx bx-notepad'></i>Notes</Link></li>
                <li className='list-item'><Link to={'/Tasks'}><i className='bx bx-check-circle'></i>Tasks</Link></li>
                <li className='list-item'><Link to={'/Archive'}><i className='bx bx-archive-out'></i>Archive</Link></li>
                <li className='list-item'><Link to={'/Bin'}><i className='bx bx-trash'></i>Bin</Link></li>
            </ul>
        </div>
    );
};

export default NavigationBar;
