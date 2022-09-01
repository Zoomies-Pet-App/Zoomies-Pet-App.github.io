import React, { useState } from 'react'
import Profile from '../../assets/images/profile.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UserForm = ({ setStep }) => {
    const [startDate, setStartDate] = useState('');
    const [species, setSpecies] = useState('Dog');
    const [gender, setGender] = useState('Male');

    return (
        <div className='container'>
            <div className='d-flex justify-content-center m-0 p-0'>
                <img src={Profile} className='profile-image ' alt='profile' />
            </div>
            <div class="d-flex flex-column container shadow p-3 mx-auto mb-5 bg-white rounded
            align-items-start text review-flex">
                <div className='d-flex align-self-center flex-column mx-2 px-2 my-1 review-text align-items-center'>
                    <h3 className='purple-text puppy-font'>Had a great time at Clinic?</h3>
                    <h3 className='purple-text text-large'>
                        Share your experience with other Pet Parents.</h3>
                </div>
                <div class="d-flex flex-column form mx-5 mt-2">
                    <div className='wrap-input100'>
                        <p className='normal-text mb-1'>Your Name</p>
                        <input type='text' className='input100' placeholder='Your Name' />
                    </div>
                    <div className='wrap-input100'>
                        <p className='normal-text mb-1'>Pet's Name</p>
                        <input type='text' className='input100' placeholder="Pet's Name" />
                    </div>
                    <p className='normal-text mb-1'>Pet Birthdate</p>
                    <DatePicker
                        selected={startDate}
                        placeholderText="&nbsp;&#128197;"
                        onChange={(date) => setStartDate(date)} />
                    <p className='normal-text mb-1'>Select Species</p>
                    <div class="btn-group mb-4">
                        <input type="radio" class="btn-check radio-btn" name="options" id="option1" autocomplete="off"
                            value={species} checked={species === 'Dog'}
                        />
                        <label class="btn btn-secondary check-text radio-btn" for="option1"
                            onClick={() => setSpecies('Dog')}>Dog</label>

                        <input type="radio" class="btn-check radio-btn" name="options" id="option2"
                            value={species} checked={species === 'Cat'} />
                        <label class="btn btn-secondary check-text radio-btn" for="option2"
                            onClick={() => setSpecies('Cat')}>Cat</label>
                    </div>
                    <p className='normal-text mb-1'>Gender</p>
                    <div class="btn-group mb-4">
                        <input type="radio" class="btn-check radio-btn" name="options2" id="option3"
                            value={gender} checked={gender === 'Male'} />
                        <label class="btn btn-secondary check-text radio-btn" for="option3"
                            onClick={() => setGender('Male')}>Male</label>

                        <input type="radio" class="btn-check radio-btn" name="options2" id="option4"
                            value={gender} checked={gender === 'Female'} />
                        <label class="btn btn-secondary check-text radio-btn" for="option4"
                            onClick={() => setGender('Female')}>Female</label>
                    </div>
                    <div className='wrap-input100'>
                        <p className='normal-text mb-1'>Email</p>
                        <input type='text' className='input100' placeholder='Email' />
                    </div>
                </div>
                <button type="button" class="btn mt-2 btn-lg button align-self-center"
                    onClick={() => setStep(1)}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Next</button>
            </div>
        </div>
    )
}

export default UserForm