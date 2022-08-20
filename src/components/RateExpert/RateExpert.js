import React, { useState } from 'react'
import ExpertForm from './ExpertForm';
import UserForm from './UserForm';
import Logo from '../../assets/images/logo-main.svg';
import ThankYou from '../Thankyou/ThankYou';
import { useNavigate } from 'react-router';

const RateExpert = () => {
    const [step, setStep] = useState(0);
    const navigate  = useNavigate();

    return (
        <div className='container'>
            <div className='d-flex justify-content-between mb-3 mt-2'>
                <img src={Logo} alt="Logo" onClick={()=>navigate('/')} className='logo py-2' />
            </div>
            {step === 0 ?
                <UserForm setStep={setStep} /> : null}
            {step === 1 ? <ExpertForm setStep={setStep} /> : null}
            {step === 2 ? <ThankYou /> : null}
        </div>
    )
}

export default RateExpert