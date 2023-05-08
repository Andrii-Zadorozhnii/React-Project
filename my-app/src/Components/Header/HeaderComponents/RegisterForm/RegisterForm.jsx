import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import './RegisterForm.scss'

const RegistrationForm = () => {

    const handleClose = () => {
        document.querySelector('.registration-form').style.display = 'none';
    };

    return (
        <div className='registration-form'>
            <h1>Registration</h1>
            <span className='close-btn' onClick={handleClose}>X</span>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(8, 'Must be 8 characters or more')
                        .required('Required')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {formik => (
                    <form className='register' onSubmit={formik.handleSubmit}>
                        <div className='register-section'>
                            <div className='register-box'>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                            </div>
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className='register-error'>{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className='register-section'>
                            <div className='register-box'>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                />
                            </div>
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className='register-error'>{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                        <div className='register-section'>
                            <div className='register-box'>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className='register-error'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className='register-section'>
                            <div className='register-box'>
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className='register-error'>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <button className='register-btn' type="submit" disabled={formik.isSubmitting}>
                            Register
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default RegistrationForm;
