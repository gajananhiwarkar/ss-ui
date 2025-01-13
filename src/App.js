import React from 'react';
import MenuComponent from './components/MenuComponent';
import './assets/css/app.css';
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeComponent from './pages/HomeComponent'; // import other components as needed
import Course from './pages/CourseComponent';
import ContactUsComponent from './pages/ContactUsComponent';
import About from './pages/AboutComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
    return (
        <Router>
            <div className='app-container'>
                <MenuComponent />
                <Routes>
                    <Route path="/home" element={<HomeComponent />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/contactus" element={<ContactUsComponent />} />
                    <Route path="/about" element={<About />} />
                    {/* Default route */}
                    <Route path="/" element={<HomeComponent />} />
                </Routes>
                <FooterComponent className='footer-container'/>
            </div>
        </Router>
    );
};

export default App;
