import React, { useEffect, useState } from 'react'
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

const ExpertForm = ({ questions }) => {
  const [ratingQ1, setRatingQ1] = useState(0);
  const [ratingQ2, setRatingQ2] = useState(0);
  const [textQ1, setTextQ1] = useState('');
  const [textQ2, setTextQ2] = useState('');

  useEffect(() => {
    switch (ratingQ1) {
      case 1:
        setTextQ1('Disappointed')

        break;
      case 2:
        setTextQ1('Not Satisfied')
        break;
      case 3:
        setTextQ1('Normal')
        break;
      case 4:
        setTextQ1('Satisfied')
        break;
      case 5:
        setTextQ1('Very much satisfied')
        break;
      default:
        break;
    }
  }, [ratingQ1])

  useEffect(() => {
    switch (ratingQ2) {
      case 1:
        setTextQ2('Disappointed')
        break;
      case 2:
        setTextQ2('Not Satisfied')
        break;
      case 3:
        setTextQ2('Normal')
        break;
      case 4:
        setTextQ2('Satisfied')
        break;
      case 5:
        setTextQ2('Very much satisfied')
        break;
      default:
        break;
    }
  }, [ratingQ2])

  return (
    <div className='d-flex flex-column shadow mb-5 w-100'>
      <div class="d-flex flex-column container content justify-content-center
      align-items-center">
        <h1 className='py-2 text-center experience-text puppy-font'>{questions.q1}</h1>
        <h4 className='py-3 purple-text'>{textQ1}</h4>
        <div className='d-flex'>
          <img className="mx-2" alt="Dog emoji" id='1' onClick={() => setRatingQ1(1)}
            style={{ width: ratingQ1 === 1 ? '4rem' : '3rem' }}
            src={ratingQ1 >= 1 ? ActiveDogVSad : DogVSad} />
          <img className="mx-2" alt="Dog emoji" id='2' onClick={() => setRatingQ1(2)}
            style={{ width: ratingQ1 === 2 ? '4rem' : '3rem' }}
            src={ratingQ1 >= 2 ? ActiveDogSad : DogSad} />
          <img className="mx-2" alt="Dog emoji" id='3' onClick={() => setRatingQ1(3)}
            style={{ width: ratingQ1 === 3 ? '4rem' : '3rem' }}
            src={ratingQ1 >= 3 ? ActiveDogNormal : DogNormal} />
          <img className="mx-2" alt="Dog emoji" id='4' onClick={() => setRatingQ1(4)}
            style={{ width: ratingQ1 === 4 ? '4rem' : '3rem' }}
            src={ratingQ1 >= 4 ? ActiveDogHappy : DogHappy} />
          <img className="mx-2" alt="Dog emoji" id='5' onClick={() => setRatingQ1(5)}
            style={{ width: ratingQ1 === 5 ? '4rem' : '3rem' }}
            src={ratingQ1 >= 5 ? ActiveDogVHappy : DogVHappy} />
        </div>
      </div>
      {questions.q2 ?
        <div class="d-flex flex-column container content
        justify-content-center align-items-center">
          <h1 className='py-2 text-center experience-text puppy-font'>{questions.q2}</h1>
          <h4 className='py-3 purple-text'>{textQ2}</h4>
          <div className='d-flex'>
            <img className="mx-2" alt="Dog emoji" id='1' onClick={() => setRatingQ2(1)}
              style={{ width: ratingQ2 === 1 ? '4rem' : '3rem' }}
              src={ratingQ2 >= 1 ? ActiveDogVSad : DogVSad} />
            <img className="mx-2" alt="Dog emoji" id='2' onClick={() => setRatingQ2(2)}
              style={{ width: ratingQ2 === 2 ? '4rem' : '3rem' }}
              src={ratingQ2 >= 2 ? ActiveDogSad : DogSad} />
            <img className="mx-2" alt="Dog emoji" id='3' onClick={() => setRatingQ2(3)}
              style={{ width: ratingQ2 === 3 ? '4rem' : '3rem' }}
              src={ratingQ2 >= 3 ? ActiveDogNormal : DogNormal} />
            <img className="mx-2" alt="Dog emoji" id='4' onClick={() => setRatingQ2(4)}
              style={{ width: ratingQ2 === 4 ? '4rem' : '3rem' }}
              src={ratingQ2 >= 4 ? ActiveDogHappy : DogHappy} />
            <img className="mx-2" alt="Dog emoji" id='5' onClick={() => setRatingQ2(5)}
              style={{ width: ratingQ2 === 5 ? '4rem' : '3rem' }}
              src={ratingQ2 >= 5 ? ActiveDogVHappy : DogVHappy} />
          </div>
        </div> : null}
    </div>
  )
}

export default ExpertForm