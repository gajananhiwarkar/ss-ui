//import axios from './axios'; // Import the Axios instanceimport axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseService from './CourseService';

import '../assets/css/contactUs.css';

const AddCourseComponent = () => {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const [course, setCourse] = useState(form);

    const handleSubmit = async (event) => {
        console.log('before form'); 
        console.log(form);
        console.log('after from and before course');
        
        console.log(course);
        let courseJson = {name:form.name, description:form.description};
        console.log('courseJson => ' + JSON.stringify(courseJson)); 
        console.log('after all');


        CourseService.createCourse(courseJson).then(res =>{
            this.props.history.push('/course');
        });


       /* event.preventDefault();

        await fetch(`/course`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcxOTI4MjAzMSwiZXhwIjoxNzE5Mjg1NjMxfQ.PdCUitkaGdDyMJpsRmaGEoOwGfCdZwuVBFw3si6ctNI'
            },
            body: JSON.stringify(course)
          });*/
          setCourse(form);
        //  this.props.history.push('/course');
          
        
          try {
          //  const response = await axios.post(`/course`, form);
         // console.log('axios');
            // Handle the response
            navigate('/adminHome');
          } catch (error) {
            // Handle errors
          }
    };

   

    return (
        <section className="contactus">
            <div className="login col-lg-4 m-auto shadow-lg">
                <form onSubmit={handleSubmit}>                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Course Name: <span className='red'>*</span>:</label>
                        <input
                            name="name"
                            id="name"
                            type="name"
                            placeholder="Name"
                            className="form-control"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Course Description: <span className='red'>*</span>:</label>
                        <input
                            name="description"
                            id="description"
                            type="description"
                            placeholder="Description"
                            className="form-control"
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary col-lg-12">Save</button>
                </form>
            </div>
        </section>
    );
};

export default AddCourseComponent;
