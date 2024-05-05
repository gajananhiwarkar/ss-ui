import React, { useState } from 'react';
import '../assets/css/contact-us.css';

const ContactUsComponent = () => {
    const [form, setForm] = useState({
        fname: '',
        email: '',
        mobileNumber: '',
        msg: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
    };

    return (
        <section className="contactus">
            <div className="login col-lg-4 m-auto shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">Full Name*:</label>
                        <input
                            name="fname"
                            id="fname"
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            value={form.fname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address*:</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                        <input
                            name="mobileNumber"
                            id="mobileNumber"
                            type="text"
                            placeholder="Mobile Number"
                            className="form-control"
                            value={form.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="msg" className="form-label">Message*:</label>
                        <input
                            name="msg"
                            id="msg"
                            type="text"
                            placeholder="Message"
                            className="form-control"
                            value={form.msg}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary col-lg-12">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUsComponent;
