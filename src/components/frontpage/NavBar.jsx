import React, { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Logo from '../../assets/Logo.png';


const NavBar = () => {

    const [show, setShow] = useState(false);

    const NavList = () => {
        return (
            <>
                <div className="res-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="justify-content-end" onClick={(e) => { setShow(false) }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CAREERS</a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }


    return (
        <>

            <nav className="navbar navbar-expand-sm" style={{ display: show ? 'none' : 'block' }}>
                <div className="container-fluid">

                    <img className="navbar-brand img-fluid logo" src={Logo} alt="AT DIGITAL" />
                    <button className="navbar-toggler" type="button" onClick={(e) => { setShow(true) }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list ham" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>

                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CAREERS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {show && (
                <NavList />
            )}

        </>
    )
}

export default NavBar;