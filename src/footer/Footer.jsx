import React from 'react';
import './footer.css';
import phone from '../assets/download.png';
// import Fb from "../assets/fb.png"
import LinkedIn from "../assets/ln.png"
import Ig from "../assets/ig.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h3>Want to Create <br /><span>Next-Gen Tech?</span></h3>
            <div className='footer_in'>
                <div className='footer_in1'>
                    <Link to="tel:+919336673099"><button><img src={phone} alt="" />Let's Talk</button></Link>
                    <Link to="mailto: info@aiaspiresolutions.com"><h4> info@aiaspiresolutions.com</h4></Link>
                </div>
                <div className='footer_in2'>
                    <h3>Address</h3>
                    <p>3/112, Viram Khand, Gomtinagar Lucknow, Uttar Pradesh, India</p>
                </div>
            </div>
            <div className='social_links_footer'>
                {/* <img src={Fb} alt="Facebook Link" /> */}
                <Link target='blank' to="https://www.instagram.com/eklavyasolution?igsh=N3R0bWs2bXozc204"><img src={Ig} alt="Instagram Link" /></Link>
                <Link target='blank' to="https://www.linkedin.com/company/aiaspiressolutions/?viewAsMember=true"><img src={LinkedIn} alt="LinkedIn Link" /></Link>
            </div>
            <div className='footer_bottom'>
                <h3>&copy; 2024 Ai Aspire Solutions.</h3>
                <Link to="/privacy-policy"><h4>Terms & Policies</h4></Link>
            </div>
        </footer>
    )
}

export default Footer