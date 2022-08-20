import React, { useState } from 'react'
import './ReviewView.css';

const ReviewView = () => {
    const [fullView, setFullView] = useState(false);

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {fullView ?
                <>
                    <i class="fa-solid fa-arrow-left back" onClick={() => setFullView(false)} />
                    <div className='d-flex flex-column align-items-center  p-3 m-2 text-center '>
                        <h5 class="card-title mb-3">User Name</h5>
                        <div class="ratings mx-2 mb-3" style={{ color: 'gold' }}>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <p class="card-text">Some quick example text.</p>
                    </div>
                </>
                :
                <>
                    {
                        [1, 2, 3, 4, 5].map(val => {
                            return <div class="card p-2 m-2" style={{ width: "18rem" }}>
                                <div class="card-body" onClick={() => setFullView(true)}>
                                    <h5 class="card-title">User Name</h5>
                                    <div class="ratings mx-2" style={{ color: 'gold' }}>
                                        <i class="fa fa-star rating-color"></i>
                                        <i class="fa fa-star rating-color"></i>
                                        <i class="fa fa-star rating-color"></i>
                                        <i class="fa fa-star rating-color"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="card-text">Some quick example text.</p>
                                </div>
                            </div>
                        })
                    }
                </>
            }
        </div>
    )
}

export default ReviewView