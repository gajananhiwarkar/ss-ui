import React from 'react';
import CompanyLogoNew from '../assets/images/CompanyLogoNew.png';

const MenuComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={CompanyLogoNew} width="130px" height="50px" alt="Company Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Course">Course</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ContactUs">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default MenuComponent;
