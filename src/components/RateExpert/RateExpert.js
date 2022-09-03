import React, { useState } from 'react'
import ExpertForm from './ExpertForm';
import UserForm from './UserForm';
import Logo from '../../assets/images/logo-main.svg';
import ThankYou from '../Thankyou/ThankYou';
import { useNavigate } from 'react-router';
import data from './FormQuestions.json';
import Profile from '../../assets/images/profile.png';

const RateExpert = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    console.log(data)
    return (
        <div className='container'>
            <div className='d-flex justify-content-between mb-3 mt-2'>
                <img src={Logo} alt="Logo" onClick={() => navigate('/')} className='logo py-2' />
            </div>
            {step === 0 ?
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className=' mx-2 px-2 mt-5 review-text text-center'>
                        <img src={Profile} className='profile-image ' alt='profile' />
                        <h3 className='purple-text puppy-font'>Had a great time at Clinic?</h3>
                        <h3 className='purple-text text-large'>
                            Share your experience with other Pet Parents.</h3>
                    </div>
                    {data?.map((questions, key) =>
                        <ExpertForm setStep={setStep} questions={questions} key={key} />
                    )}
                    <div class="form-group text-center mb-3 w-100">
                        <input type="text-area" class="form-control comment-box"
                            id="exampleInputEmail1" placeholder="Additional comments" />
                    </div>
                    <button type="button" class="btn mb-2 btn-lg button"
                        onClick={() => setStep(1)}
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Next</button>
                </div> : null}
            {step === 1 ? <UserForm setStep={setStep} /> : null}
            {step === 2 ? <ThankYou /> : null}
        </div>
    )
}

export default RateExpert