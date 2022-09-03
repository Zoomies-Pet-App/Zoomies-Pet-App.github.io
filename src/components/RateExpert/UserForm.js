import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UserForm = ({ setStep }) => {
    const [startDate, setStartDate] = useState('');
    const [species, setSpecies] = useState('Dog');
    const [gender, setGender] = useState('Male');

    return (
        <div class="d-flex flex-column container shadow p-3 mx-auto mb-5 bg-white rounded
            align-items-center text review-flex">
            <h1 className='text-center'>Please enter following details to confirm your feedback</h1>
            <div class="d-flex flex-column form mt-2">
                <div className='wrap-input100'>
                    <input type='text' className='input100' placeholder='Your Name' />
                </div>
                <div className='wrap-input100'>
                    <input type='text' className='input100' placeholder="Pet's Name" />
                </div>
                <DatePicker
                    selected={startDate}
                    placeholderText="Pet's Birthdate &nbsp;&#128197;"
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
                    <input type='text' className='input100' placeholder='Email' />
                </div>
            </div>
            <button type="button" class="btn mt-2 btn-lg button align-self-center"
                onClick={() => setStep(2)}
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Next</button>
        </div>
    )
}

export default UserForm