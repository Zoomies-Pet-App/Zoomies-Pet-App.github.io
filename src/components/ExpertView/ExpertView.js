import React, { useRef } from 'react'
import { useNavigate } from 'react-router';
import ReviewView from '../ReviewView/ReviewView';
import './ExpertView.css';
import Profile from '../../assets/images/profile.png';
import Logo from '../../assets/images/logo-main.svg';

const ExpertView = () => {
    const navigate = useNavigate();
    const reviewButton = useRef(null);
    const featureButton = useRef(null);

    return (
        <div className='container'>
            <div className='d-flex justify-content-between mb-5 mt-2'>
                <img src={Logo} alt="Logo" className='logo-expert py-2' />
                <h1 className='main-heading purple-text'>Clinic Name</h1>
                <button type="button" class="btn custom-btn mt-4 btn-lg"
                    onClick={() => navigate('/')}>Logout</button>
            </div>
            <div className='d-flex profile-box'>
                <img src={Profile} alt='profile' />
                <div className='d-flex flex-column mt-2 mx-2 px-2'>
                    <h3>Welcome doctor name</h3>
                    <h3>Total reviews: <span className="purple-text">12</span></h3>
                    <h3>Average Rating:
                        <span class="ratings mx-2" style={{ color: 'gold' }}>
                            <span class="fa fa-star rating-color"></span>
                            <span class="fa fa-star rating-color"></span>
                            <span class="fa fa-star rating-color"></span>
                            <span class="fa fa-star rating-color"></span>
                            <i class="fa-regular fa-star"></i>
                        </span>
                    </h3>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center mt-5 align-content-center profile-box'>
                <ul class="nav nav-tabs nav-fill nav-pills">
                    <li class="nav-item w-50">
                        <button class="nav-link nav-text active" ref={reviewButton}
                            aria-current="page"
                            onClick={() => {
                                reviewButton.current.className = 'nav-link nav-text active';
                                featureButton.current.className = "nav-link nav-text"
                            }}>New Review List</button>
                    </li>
                    <li class="nav-item w-50">
                        <button class="nav-link nav-text" ref={featureButton}
                            onClick={() => {
                                featureButton.current.className = 'nav-link nav-text active';
                                reviewButton.current.className = "nav-link nav-text"
                            }}>
                            Upcoming Features</button>
                    </li>

                </ul>
                <ReviewView />
            </div>
        </div>
    )
}

export default ExpertView