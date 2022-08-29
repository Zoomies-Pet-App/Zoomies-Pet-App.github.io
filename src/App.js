import { useNavigate } from 'react-router';
import './App.css';
import Logo from './assets/images/logo-main.png';
import Background from './assets/images/background.png';
import BackgroundBNW from './assets/images/background-bnw.png';
import { useEffect, useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";
import lottie from "lottie-web";
import Bounce from "./assets/lottie-files/bouncing-up.json";
import { useMediaQuery } from 'react-responsive';

function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [pos, setPos] = useState(100);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: Bounce,
      loop: true,
      autoplay: true
    });
  }, []);

  useEffect(() => {
    isMobile ? setPos(80) : setPos(100)
  }, [isMobile]);

  return (
    <div className="App">
      <div >
        <img src={Logo} alt='logo' className='logo-image' />
        <div onClick={() => navigate('/login')} className='login' >
          <i class="fa fa-sign-in fa-lg" aria-hidden="true"></i></div>
      </div>
      <ReactCompareSlider
        onlyHandleDraggable={true}
        position={pos}
        handle={pos !== 0 ? <div id="react-logo" className='bounce-up'
          style={{ height: '10rem', width: '12rem' }} /> : <></>}
        onPositionChange={(value) => {
          if (value <= 55) {
            setShow(true);
            setPos(value)
            if (value <= 45) {
              setPos(0);
            }
          }
          else {
            setShow(false);
            setPos(90);
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
            <h1 className='text text-white absolute-text-main'>They are the Reason for our Happiness.</h1>
            <h4 className='text mt-5 pt-2 text-white absolute-text'>
              Let's Find a Reason for them!</h4>
          </div>}
        portrait
      />
      {show ?
        <button className='absolute-btn p-2' onClick={() => navigate('/survey')}>
          <span className='text-white'>Let's discover new pawssibilities together &#8594; &nbsp;</span>
        </button> : null}
    </div>
  );
}

export default App;
