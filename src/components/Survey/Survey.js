import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Logo from '../../assets/images/logo-main.svg';
import './Survey.css';
import SurveyQuestions from './SurveyQuestions';
import Done from './Done';
import ThankYou from '../Thankyou/ThankYou';

const Survey = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    return (
        <div className='container'>
            <div className='d-flex mb-5 mt-2'>
                <img src={Logo} alt="Logo" onClick={() => navigate('/')} className='logo-survey py-2' />
                <h1 className='heading purple-text text'>Finding Pet Buddies</h1>
            </div>
            {step === 0 ? <SurveyQuestions setStep={setStep} /> :
                step === 1 ? <ThankYou comment={true} setStep={setStep} /> : <Done />}

        </div>
    )
}

export default Survey