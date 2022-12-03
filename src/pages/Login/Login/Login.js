import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../../images/social-media-icon/google-1772223-1507807.icon.webp';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user || user1) {
        navigate(from, { replace: true });
    }
    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-container'>
            <div style={{ width: '100%', margin: '0px 20px' }}>
                <h3 style={{ textAlign: 'center' }}>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-field'>
                        <label style={{ display: 'block' }} htmlFor="email">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your Email' required />
                    </div>
                    <div className='form-field'>
                        <label style={{ display: 'block' }} htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password' required />
                    </div>
                    <p className='forget-btn'>Forget password?</p>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <div className='social-media'>
                    <button
                        onClick={() => signInWithGoogle()}
                    >Login with
                        <img src={googleIcon} alt="" /></button>
                    <Link to='/register'>Don't registrated yet?</Link>
                </div> <br />
                <div className="text-center">
                    {
                        (loading || loading1) ?
                            <div class="spinner-border text-primary " style={{ margin: '0px auto' }} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            :
                            (error || error1) && <p style={{ color: 'red' }}>{error.message || error1.message}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;