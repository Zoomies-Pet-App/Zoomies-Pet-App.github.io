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
            <h5>Got a minute?</h5>
            {comment ? <div class="form-group text-center">
                <label for="exampleInputEmail1" className='mb-2 font-weight-bold'>
                    Comments</label>
                <input type="text-area" class="form-control comment-box"
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Comments" />
                <button type="button" class="btn mt-2 btn-lg button btn-text "
                    onClick={() => setStep(2)}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    Next</button>
            </div> : <>
                <button type="button" class="btn mt-5 mb-2 btn-lg button btn-text"
                    onClick={() => navigate('/survey')}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    A Quick Survey will help us sail afar!</button>
                <p onClick={() => navigate('/')}>Maybe Later</p>
            </>}
        </div>
    )
}

export default ThankYou