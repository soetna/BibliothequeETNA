import React from 'react';
import '../style/Footer.css';
import facebookLogo from '../public/facebook.png';
import twitterLogo from '../public/twitter.png';
import instagramLogo from '../public/instagram.png';
import YoutubeLogo from '../public/youtube.png';



const Footer = () => {
  return (
    <>
    <div className='Footer'>
    <div className="Coup-de-coeur-foot">
          <div className="VerticalBarfoot">|</div>
          <h1 className="Coup-de-coeur-title-foot">Acces direct</h1>
      </div><footer className="Footer-ico">
              <div className="Footer-social-icons">
                  <img src={facebookLogo} alt="Facebook" className="Social-icon" />
                  <img src={twitterLogo} alt="Twitter" className="Social-icon" />
                  <img src={instagramLogo} alt="Instagram" className="Social-icon" />
                  <img src={YoutubeLogo} alt="Youtube" className="Social-icon" />
              </div>
              <p className="Footer-text">© Touahria Sami 2023</p>
          </footer>
          </div></>
  );
};

export default Footer;
