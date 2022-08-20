import React from 'react'
import { useNavigate } from 'react-router'
import check from '../../assets/images/check-fill.svg'

const Done = () => {
    const navigate = useNavigate();
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={check} className="check-image" alt='profile' />
            <div class="d-flex flex-column container done-content shadow mx-auto mb-5 bg-white rounded
          justify-content-center align-items-center">
                <h1 className='py-2 mb-2 text-center done-text text'>
                    Done!</h1>
                <h5>Your Survey has been answered and you have been rewarded 80 points.</h5>
                <button type="button" class="btn mt-5 mb-2 btn-lg button"
                    onClick={() => navigate('/')}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    Ok!</button>
            </div>
        </div>
    )
}

export default Done