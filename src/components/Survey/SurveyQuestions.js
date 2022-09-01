import React, { useState } from 'react'
import dog from '../../assets/images/dog.png'
import women from '../../assets/images/women.png'

const SurveyQuestions = ({ setStep }) => {
    const [rating, setRating] = useState({
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0
    });
    return (
        <div className='d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>Do your pet socialise with other pets?</h2>
            <div className='d-flex flex-wrap align-items-center justify-content-center my-4'>
                <h3 className='green-text mx-4'>Agree</h3>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-xl green' id='1'
                        style={{ backgroundColor: rating.q1 === 1 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q1: 1 } })}></span>
                    <span className='dot mx-4 dot-l green' id='2'
                        style={{ backgroundColor: rating.q1 === 2 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q1: 2 } })}></span>
                </div>
                <span className='dot mx-4 purple' id='3'
                    style={{ backgroundColor: rating.q1 === 3 ? 'blueviolet' : '' }}
                    onClick={() => setRating(prev => { return { ...prev, q1: 3 } })}></span>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-l purple' id='4'
                        style={{ backgroundColor: rating.q1 === 4 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q1: 4 } })}></span>
                    <span className='dot mx-4 dot-xl purple' id='5'
                        style={{ backgroundColor: rating.q1 === 5 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q1: 5 } })}></span>
                </div>
                <h3 className='purple-text mx-4'>Disagree </h3>
            </div>
            <h2 className='pt-5'>Do you like taking your pet to public places?</h2>
            <div className='d-flex flex-wrap align-items-center justify-content-center my-4'>
                <h3 className='green-text mx-4'>Agree</h3>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-xl green' id='1'
                        style={{ backgroundColor: rating.q2 === 1 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q2: 1 } })}></span>
                    <span className='dot mx-4 dot-l green' id='2'
                        style={{ backgroundColor: rating.q2 === 2 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q2: 2 } })}></span>
                </div>
                <span className='dot mx-4 purple' id='3'
                    style={{ backgroundColor: rating.q2 === 3 ? 'blueviolet' : '' }}
                    onClick={() => setRating(prev => { return { ...prev, q2: 3 } })}></span>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-l purple' id='4'
                        style={{ backgroundColor: rating.q2 === 4 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q2: 4 } })}></span>
                    <span className='dot mx-4 dot-xl purple' id='5'
                        style={{ backgroundColor: rating.q2 === 5 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q2: 5 } })}></span>
                </div>
                <h3 className='purple-text mx-4'>Disagree </h3>
            </div>
            <h2 className='pt-5'>Would you like to be a part of a pet community?</h2>
            <div className='d-flex flex-wrap align-items-center justify-content-center my-4'>
                <h3 className='green-text mx-4'>Agree</h3>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-xl green' id='1'
                        style={{ backgroundColor: rating.q3 === 1 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q3: 1 } })}></span>
                    <span className='dot mx-4 dot-l green' id='2'
                        style={{ backgroundColor: rating.q3 === 2 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q3: 2 } })}></span>
                </div>
                <span className='dot mx-4 purple' id='3'
                    style={{ backgroundColor: rating.q3 === 3 ? 'blueviolet' : '' }}
                    onClick={() => setRating(prev => { return { ...prev, q3: 3 } })}></span>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-l purple' id='4'
                        style={{ backgroundColor: rating.q3 === 4 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q3: 4 } })}></span>
                    <span className='dot mx-4 dot-xl purple' id='5'
                        style={{ backgroundColor: rating.q3 === 5 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q3: 5 } })}></span>
                </div>
                <h3 className='purple-text mx-4'>Disagree </h3>
            </div>
            <h2 className='pt-5'>Do you prefer breeders or want your pet to find a lover on their own?</h2>
            <div className='d-flex flex-wrap align-items-center justify-content-center my-4'>
                <h3 className='green-text mx-4'>Agree</h3>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-xl green' id='1'
                        style={{ backgroundColor: rating.q4 === 1 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q4: 1 } })}></span>
                    <span className='dot mx-4 dot-l green' id='2'
                        style={{ backgroundColor: rating.q4 === 2 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q4: 2 } })}></span>
                </div>
                <span className='dot mx-4 purple' id='3'
                    style={{ backgroundColor: rating.q4 === 3 ? 'blueviolet' : '' }}
                    onClick={() => setRating(prev => { return { ...prev, q4: 3 } })}></span>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-l purple' id='4'
                        style={{ backgroundColor: rating.q4 === 4 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q4: 4 } })}></span>
                    <span className='dot mx-4 dot-xl purple' id='5'
                        style={{ backgroundColor: rating.q4 === 5 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q4: 5 } })}></span>
                </div>
                <h3 className='purple-text mx-4'>Disagree </h3>
            </div>
            <h2 className='pt-5'>What kind of problems do pet owners like yourself usually face?</h2>
            <div class="form-group text-center my-4">
                <input type="text-area" class="form-control comment-box-1"
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your thoughts" />
            </div>
            <h2 className='pt-5'>Would you enjoy being a part of a community where information is exchanged
                for betterment of you and your pets? Inclusive of available resources,expert guidance,
                and much more.</h2>
            <div className='d-flex flex-wrap align-items-center justify-content-center my-4'>
                <h3 className='green-text mx-4'>Agree</h3>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-xl green' id='1'
                        style={{ backgroundColor: rating.q5 === 1 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q5: 1 } })}></span>
                    <span className='dot mx-4 dot-l green' id='2'
                        style={{ backgroundColor: rating.q5 === 2 ? 'rgb(73, 237, 28)' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q5: 2 } })}></span>
                </div>
                <span className='dot mx-4 purple' id='3'
                    style={{ backgroundColor: rating.q5 === 3 ? 'blueviolet' : '' }}
                    onClick={() => setRating(prev => { return { ...prev, q5: 3 } })}></span>
                <div className='d-flex align-items-center justify-content-center width my-2'>
                    <span className='dot mx-4 dot-l purple' id='4'
                        style={{ backgroundColor: rating.q5 === 4 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q5: 4 } })}></span>
                    <span className='dot mx-4 dot-xl purple' id='5'
                        style={{ backgroundColor: rating.q5 === 5 ? 'blueviolet' : '' }}
                        onClick={() => setRating(prev => { return { ...prev, q5: 5 } })}></span>
                </div>
                <h3 className='purple-text mx-4'>Disagree </h3>
            </div>
            <div className='d-flex align-items-center justify-content-around w-100'>
                <img src={dog} alt='dog' className='align-self-end dog' />
                <button type="button" class="btn mt-2 btn-lg button next-button"
                    onClick={() => setStep(1)}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Next</button>
                <img src={women} alt='women' className='women' />
            </div>
        </div>
    )
}

export default SurveyQuestions