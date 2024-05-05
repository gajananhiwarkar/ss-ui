import React from 'react';
import '../assets/css/home.css';
import backnew from '../assets/images/backnew.jpg';

const HomeComponent = () => {
    return (
        <section>
            <img src={backnew} height="80%" width="100%" alt="Background" />

            <div className="homecontent">
                <h1>BUILD THE FUTURE</h1>
                <a href="course" className="btn btn-lg btn-light">Discover Courses</a> &nbsp;
                <a href="contactus" className="btn btn-lg btn-primary">Contact Us</a>
            </div>
        </section>
    );
};

export default HomeComponent;
