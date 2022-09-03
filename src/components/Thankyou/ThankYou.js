import React from 'react'
import { useNavigate } from 'react-router'
import '../RateExpert/RateExpert.css'
import Purrfect from '../../assets/images/purrfect.png';

const ThankYou = ({ comment, setStep }) => {
    const navigate = useNavigate();
    return (
        <div class="d-flex flex-column container content shadow mx-auto bg-white rounded
          justify-content-center align-items-center content-thanks">
            <img src={Purrfect} className="purrfect" alt='profile' />
            <h1 className='py-2 mb-2 text-center purple-text puppy-font'>
                Thankyou for your valuable feedback!</h1>
            <button type="button" class="btn mt-5 mb-2 btn-lg button btn-text"
                onClick={() => navigate('/survey')}
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                A Quick Survey will help us sail afar!</button>
            <p onClick={() => navigate('/')}>Maybe Later</p>
        </div>
    )
}

export default ThankYou