"use client";

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <div className={styles.inputForm}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <g data-name="Layer 3" id="Layer_3">
                                <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759V7.86a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zM16 21.999a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z"></path>
                            </g>
                        </svg>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your name"
                            value={formData.username}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <div className={styles.inputForm}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-64 0 512 512">
                            <path d="M336 512H48C21.523 512 0 490.477 0 464V240c0-26.476 21.523-48 48-48h288c26.477 0 48 21.524 48 48v224c0 26.477-21.523 48-48 48zM48 224c-8.832 0-16 7.168-16 16v224c0 8.832 7.168 16 16 16h288c8.832 0 16-7.168 16-16V240c0-8.832-7.168-16-16-16z" />
                            <path d="M304 224c-8.832 0-16-7.168-16-16v-80c0-52.929-43.071-96-96-96s-96 43.071-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.593 57.407-128 128-128s128 57.407 128 128v80c0 8.832-7.168 16-16 16z" />
                        </svg>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.flexRow}>
                    <div>
                        <input type="radio" className={styles.radio} />
                        <label className={styles.label}>Remember me</label>
                    </div>
                    <span className={styles.span}>Forgot password?</span>
                </div>

                <button type="submit" className={styles.buttonSubmit}>Sign In</button>

                <p className={styles.p}>Don't have an account? <span className={styles.span}>Sign Up</span></p>
                <p className={styles.pLine}>Or With</p>
                <div>
                    <button className={`${styles.btn} ${styles.btnGoogle}`}>
                        <GoogleIcon style={{ width: 20, height: 20 }} />
                        Sign in with Google
                    </button>
                    <button className={`${styles.btn} ${styles.btnApple}`}>
                        <AppleIcon style={{ width: 20, height: 20 }} />
                        Sign in with Apple
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;