import React from 'react'
import { useNavigate } from 'react-router';
import './Login.css';
import Logo from '../../assets/images/logo-main.svg';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='d-flex h-100 flex-wrap justify-content-center align-items-center'>
            <div className='col pet-fact px-5 d-flex'>
                <h1 className='text-fact text-white '>Dogs have a “sixth sense”</h1>
            </div>
            <div className='col d-flex flex-column justify-content-center p-5 mx-5'>
                <img src={Logo} alt="Logo" className='logo py-5' />
                <h4 className='purple-text'>Register as an Expert to Explore,Link,Record,Manage &amp; Much More!</h4><br />
                <h3 className='mb-3 m-0'>Sign in</h3>
                <div class="form-outline mb-3">
                    <input type="email" id="form3Example3"
                        class="form-control form-control-lg input-style"
                        placeholder="Enter email address" />
                </div>

                <div class="form-outline mb-1">
                    <input type="password" id="form3Example4"
                        class="form-control form-control-lg input-style"
                        placeholder="Enter password" />
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" class="btn w-100 button btn-lg"
                        onClick={() => navigate('/expert')}
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                    <p class="register mt-2 pt-3 mb-0">
                        Don't have an account? <span style={{ fontWeight: 'bold' }}>Register</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login