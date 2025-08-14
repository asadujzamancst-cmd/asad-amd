import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/facebook.png'
import togo from '../../assets/instagram.png'
import jogo from '../../assets/linkedin.png'
import sogo from '../../assets/social.png'
import slogo from '../../assets/me.png'




const Footer = () => {
  return (

    <div>

      <img src="slogo" alt="" />
       <div className="home-sci">
      
              
      
      <a href="https://github.com/asadujzamancst-cmd" className="social">
                <img src={sogo} alt="git" height="50" width="50" />
              </a>
      
                  <a href="https://www.instagram.com/mdasadujz/" className="social">
                <img src={togo} alt="Facebook" height="50" width="50" />
              </a>
      
      
                <a href="https://github.com/asadujzamancst-cmdhttps://github.com/asadujzamancst-cmd" className="social">
                <img src={jogo} alt="Facebook" height="50" width="50" />
              </a>
      
                <a href="https://www.facebook.com/profile.php?id=100084847490330" className="social">
                <img src={logo} alt="Facebook" height="50" width="50" />
              </a>
              
            </div>
   


    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / Logo */}
        <div className="footer-brand">
          <h2>YourLogo</h2>
          <p>Building the web, one line at a time.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100084847490330"><FaFacebook /></a>
            <a href="https://github.com/asadujzamancst-cmd"><FaTwitter /></a>
            <a href="https://www.instagram.com/mdasadujz/"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skill">Skill</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: asadujzaman.cst@gmail.com</p>
          <p>Phone: +880 1797320260</p>
          <p>Location: Rajshahi, Bangladesh</p>
          <div className="me" >
            <img src={slogo} alt="My profile" width="100" height="100" />

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AsAd. All rights reserved.</p>
      </div>
    </footer>
     </div>
  );
};

export default Footer;
