import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        if (!error) navigate('/');
    }
    return (
        <div className='login-container'>
            <div style={{ width: '100%', margin: '0px 20px' }}>
                <h3 style={{ textAlign: 'center' }}>SignUp</h3>
                <form onSubmit={handleRegister}>
                    <div className='form-field'>
                        <label style={{ display: 'block' }} htmlFor="text">Username</label>
                        <input onChange={e => setDisplayName(e.target.value)} type="text" placeholder='Enter your Email' required />
                    </div>
                    <div className='form-field'>
                        <label style={{ display: 'block' }} htmlFor="email">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your Email' required />
                    </div>
                    <div className='form-field'>
                        <label style={{ display: 'block' }} htmlFor="password">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter your Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="SignUp" />
                </form>
                <Link style={{ textDecoration: 'none' }} to='/login'>Already registrated?</Link>
                <br />
                <div className="text-center">
                    {
                        (loading) ?
                            <div class="spinner-border text-primary " style={{ margin: '0px auto' }} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            :
                            (error) && <p style={{ color: 'red' }}>{error?.message}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;