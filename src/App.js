import { useNavigate } from 'react-router';
import './App.css';
import Logo from './assets/images/logo-main.png';
import arrow from './assets/images/Arrow.png';
import Background from './assets/images/background.jpeg';
import BackgroundBNW from './assets/images/background-bnw.jpeg';
import { useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";

function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div >
        <img src={Logo} alt='logo' className='logo-image' />
        <img src={arrow} alt='arrow' className='arrow' />
        <h1 className='pet-text text-white'>For Petexperts</h1>
        <button onClick={()=>navigate('/login')} className='btn login' >Login</button>
      </div>
      <ReactCompareSlider
        onlyHandleDraggable={true}
        position={100}
        onPositionChange={(value) => {
          console.log(value)
          if (value <= 55) {
            setShow(true);
          }
          else {
            setShow(false);
          }
        }}
        itemOne={
          <div >
            <ReactCompareSliderImage src={BackgroundBNW} className='image' alt='background' />
            <h1 className='text text-white absolute-text-main'>They are the Reason for our Happiness.</h1>
          </div>}
        itemTwo={
          <div>
            <ReactCompareSliderImage src={Background} className='image' alt='background' />
            <h4 className='text mt-5 pt-2 text-white absolute-text'>
              Let's Find a Reason for them!</h4>
          </div>}
        portrait
      />
      {console.log(show)}
      {show ?
        <button className='absolute-btn p-2' onClick={() => navigate('/survey')}>
          <span className='text-white'>Let's discover new pawssibilities together &#8594; &nbsp;</span>
        </button> : null}
    </div>
  );
}

export default App;
