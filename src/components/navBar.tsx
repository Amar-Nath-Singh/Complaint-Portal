import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navBar.css'
interface NavBarProps {

}

interface NavBarState {

}

class NavBar extends React.Component<NavBarProps, NavBarState> {
    render() {
        return (
            <div className='nav-bar'>
                <img src="https://www.cauverygroupofinstitutions.com/images/logo_c.png"
                    className='logo-img'
                    alt=''></img>
                <ul className='nav-Container'>

                    <li ><Link className='elements' to={{pathname:"/"}}>Home</Link></li>
                    <li ><Link className='elements' to={{pathname:"/complaint"}}>Complaint</Link></li>
<<<<<<< HEAD
                    <li ><Link className='elements' to={{pathname:"/history"}}>Dashboard</Link></li>
                    <li ><Link className='elements' to={{pathname:"/add"}}>Logout</Link></li>
=======
                    <li ><Link className='elements' to={{pathname:"/history"}}>History</Link></li>
                    <li ><Link className='elements' to={{pathname:"/Login"}}>Logout</Link></li>
>>>>>>> 0f80ab881583aaf026db9bab88279c2ed73545e1
                </ul>
            </div>
        );
    }
}

export default NavBar;