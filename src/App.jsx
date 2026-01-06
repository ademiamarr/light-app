import { useGSAP } from '@gsap/react'
import './App.css'
import gsap from 'gsap';
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { useState } from 'react';
import NavPhoto from './assets/navPhotos.jpg';
import NavPhoto1 from './assets/navPhotos1.png';
import MidImage from './assets/middlePhoto1.png';
import Black1 from './assets/Black1.png';
import Black2 from './assets/Black2.png';
import Black3 from './assets/Black3.png';
import Black4 from './assets/Black4.png';
import Black5 from './assets/Black5.png';
import Black6 from './assets/Black6.png';
import Black7 from './assets/Black7.png';
import Black8 from './assets/Black8.png';
import Black9 from './assets/Black9.png';
import Black10 from './assets/Black10.png';
import Black11 from './assets/Black11.png';
import Black12 from './assets/Black12.png';
import White1 from './assets/White1.png'
import White2 from './assets/White2.png'
import White3 from './assets/White3.png'
import White4 from './assets/White4.png'
import White5 from './assets/White5.png'
import White6 from './assets/White6.png'
import White7 from './assets/White7.png'
import White8 from './assets/White8.png'
import White9 from './assets/White9.png'
import White10 from './assets/White10.png'
import White11 from './assets/White11.png'
import White12 from './assets/White12.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger); 


function App() {

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  }

  useGSAP(() => {

    disableScroll();

    const tl = gsap.timeline({
      onComplete: () => {
        enableScroll();
      }
    });

    tl.fromTo('.progress', {
      scaleX: 0, 
      backgroundColor: 'white', 
      transformOrigin: 'left',
      delay: 3, 
      borderRadius: '30px',
    }, 
    { scaleX: 1, 
      backgroundColor: 'white',
      duration: 4.5,
      ease: "slow(0.7,0.7,false)", 
      borderRadius: '30px'
    });
    tl.to('.progressBar', {display: 'none'});
    tl.to('#tittle', {top: '-5%', scale: 0.5});
    tl.fromTo('.navBar', {opacity: 0,y: '100%', width: '99.7%'}, {y: 0, opacity: 1, ease: 'power1', duration: 1})
    tl.fromTo(['.navLinksLeft', '.navLinksRight'], {display: 'none', opacity: 0, x: 0}, {display: 'flex', opacity: 1, x: 1, duration: 1})

    return tl;
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: '55% 80%',
      }
    });

    tl.from('.section2Top', {y: 300, opacity: 0}, {y: 0, opacity: 1, duration: 2.3})
    tl.fromTo('.lights', {y: 400, opacity: 0}, {y: 0, opacity: 1,duration: 1.5})

    return tl;
  });
  
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'center 58%',
      }
    })

    tl.from('#midImg', {y: -400, opacity: 0, duration: 2.5})
    tl.from('.section1Ctn', {x: 300, opacity: 0, duration: 1.5})
  })


  return (
    <div className="container">
      <div className="navBarLinks">
      <h1 id='tittle'>Ammar</h1>
      <div className="navLinksLeft">
        <p>Shop</p>
        <p>Our Story</p>
        <p>Support</p>
      </div>
      <div className="navLinksRight">
        <p>EN</p>
        <p><CiSearch size={26} /></p>
        <p><FaRegCircleUser size={24} /></p>
        <p><IoBagOutline size={25} /></p>
      </div>
      </div>
      <div className="progressBar">
        <div className="progress">

        </div>
      </div>
      <div
      style={{
        backgroundImage: `url(${isOn ? NavPhoto1 : NavPhoto})`,
        backgroundColor: isOn ? '#5f0b06b3' : '#992e0ef1',
        backgroundPosition: isOn ? '1.2% 100%' : 'center left',
        transition: 'all 0.3s ease'
      }}
      className="navBar">
        <div className="navCtn">
          <h3>Modern Lighting</h3>
          <h1 style={{marginTop: '-15px'}}>Where Light Belongs</h1>
          <button>Explore</button>
        </div>
        <div style={{transition: 'all 0.3s ease',backgroundColor: isOn ? 'white' : 'transparent'}} onClick={handleToggle} className="navToggle">
          <span style={{transition: 'all 0.3s ease',backgroundColor: isOn ? 'black' : 'white',transform: isOn ? 'translateX(36px' : 'translateX(0)'}} id='spanToggle'></span>
          <p style={{transition: 'all 0.3s ease', transform: isOn ? 'translateX(-23px)' : 'translateX(0)'}} id='paragToggle'>{isOn ? 'OFF' : 'ON'}</p>
        </div>
      </div>
      <div className="section1">
        <img src={MidImage} alt="MidImg" id='midImg' />
        <div className="section1Ctn">
          <p>Environment</p>
          <h1>Designed to live quietly in your space</h1>
           <button>Explore in Use</button>
        </div>
      </div>
      <div
      style={{
        backgroundColor: isOn ? 'white' : 'black'
      }}
      className="section2">
        <div className="section2Top">
          <h3 style={{color: isOn ? 'black' : 'white'}}>Lighting in Motion</h3>
          <div style={{transition: 'all 0.3s ease',backgroundColor: isOn ? 'white' : 'transparent', border: isOn ? '1px solid black' : '1px solid white', color: isOn ? 'black' : 'white'}} onClick={handleToggle} className="navToggle">
            <span style={{transition: 'all 0.3s ease',backgroundColor: isOn ? 'black' : 'white',transform: isOn ? 'translateX(36px' : 'translateX(0)'}} id='spanToggle'></span>
            <p style={{transition: 'all 0.3s ease', transform: isOn ? 'translateX(-23px)' : 'translateX(0)'}} id='paragToggle'>{isOn ? 'OFF' : 'ON'}</p>
          </div>
        </div>
        <div className="boxes">
          <div
          style={{
            backgroundImage: `url(${isOn ? White1 : Black1})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White2 : Black2})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White3 : Black3})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White4 : Black4})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White5 : Black5})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White6 : Black6})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White7 : Black7})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White8 : Black8})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White9 : Black9})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White10 : Black10})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White11 : Black11})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
          <div
          style={{
            backgroundImage: `url(${isOn ? White12 : Black12})`,
            transition: 'all 0.5s ease',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="lights">
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
