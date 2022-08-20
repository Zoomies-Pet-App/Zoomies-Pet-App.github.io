import React, { useEffect, useState } from 'react'
import Profile from '../../assets/images/profile.png';
import './RateExpert.css'
import DogVSad from '../../assets/images/dog_icons/not_active/dog_very_sad.svg';
import DogSad from '../../assets/images/dog_icons/not_active/dog_sad.svg';
import DogNormal from '../../assets/images/dog_icons/not_active/dog_normal.svg';
import DogHappy from '../../assets/images/dog_icons/not_active/dog_happy.svg';
import DogVHappy from '../../assets/images/dog_icons/not_active/dog_very_happy.svg';
import ActiveDogVSad from '../../assets/images/dog_icons/active/dog_very_sad.svg';
import ActiveDogSad from '../../assets/images/dog_icons/active/dog_sad.svg';
import ActiveDogNormal from '../../assets/images/dog_icons/active/dog_normal.svg';
import ActiveDogHappy from '../../assets/images/dog_icons/active/dog_happy.svg';
import ActiveDogVHappy from '../../assets/images/dog_icons/active/dog_very_happy.svg';

const ExpertForm = ({ setStep }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (rating) {
      case 1:
        setText('Disappointed')
        break;
      case 2:
        setText('Not Satisfied')
        break;
      case 3:
        setText('Normal')
        break;
      case 4:
        setText('Satisfied')
        break;
      case 5:
        setText('Very much satisfied')
        break;
      default:
        break;
    }
  }, [rating])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <img src={Profile} className="profile-image" alt='profile' />
      <div class="d-flex flex-column container content shadow mx-auto bg-white rounded
            justify-content-center align-items-center text">
        <h1 className='py-2 text-center experience-text puppy-font'>How was your Experience?</h1>
        <h4 className='py-3 purple-text'>{text}</h4>
        <div className='d-flex'>
          <img className="mx-2" alt="Dog emoji" id='1' onClick={() => setRating(1)}
            style={{ width: rating === 1 ? '4rem' : '3rem' }}
            src={rating >= 1 ? ActiveDogVSad : DogVSad} />
          <img className="mx-2" alt="Dog emoji" id='2' onClick={() => setRating(2)}
            style={{ width: rating === 2 ? '4rem' : '3rem' }}
            src={rating >= 2 ? ActiveDogSad : DogSad} />
          <img className="mx-2" alt="Dog emoji" id='3' onClick={() => setRating(3)}
            style={{ width: rating === 3 ? '4rem' : '3rem' }}
            src={rating >= 3 ? ActiveDogNormal : DogNormal} />
          <img className="mx-2" alt="Dog emoji" id='4' onClick={() => setRating(4)}
            style={{ width: rating === 4 ? '4rem' : '3rem' }}
            src={rating >= 4 ? ActiveDogHappy : DogHappy} />
          <img className="mx-2" alt="Dog emoji" id='5' onClick={() => setRating(5)}
            style={{ width: rating === 5 ? '4rem' : '3rem' }}
            src={rating >= 5 ? ActiveDogVHappy : DogVHappy} />
        </div>
        <button type="button" class="btn mt-5 mb-2 btn-lg button"
          onClick={() => setStep(2)}
          style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Next</button>
      </div>
    </div>
  )
}

export default ExpertForm