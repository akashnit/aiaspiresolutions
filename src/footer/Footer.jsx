import React from 'react';
import './footer.css';
import phone from '../assets/download.png';
// import Fb from "../assets/fb.png"
import LinkedIn from "../assets/ln.png"
import Ig from "../assets/ig.png";

const Footer = () => {
    return (
        <footer>
            <h3>Want to Create <br /><span>Next-Gen Tech?</span></h3>
            <div className='footer_in'>
                <div className='footer_in1'>
                    <a href="tel:+919336673099"><button><img src={phone} alt="" />Let's Talk</button></a>
                    <a href="mailto:info@eklavyasolution.com"><h4>info@eklavyasolution.com</h4></a>
                </div>
                <div className='footer_in2'>
                    <h3>Address</h3>
                    <p>C-256 New Ashok Nagar, New Delhi,110096</p>
                </div>
            </div>
            <div className='social_links_footer'>
                {/* <img src={Fb} alt="Facebook Link" /> */}
                <a target='blank' href="https://www.instagram.com/eklavyasolution?igsh=N3R0bWs2bXozc204"><img src={Ig} alt="Instagram Link" /></a>
                <a target='blank' href="https://www.linkedin.com/company/eklavyasolution/mycompany/verification/?viewAsMember=true"><img src={LinkedIn} alt="LinkedIn Link" /></a>
            </div>
            <div className='footer_bottom'>
                <h3>&copy; 2024 Eklavya Solutions.</h3>
                <h4>Terms & Policies</h4>
            </div>
        </footer>
    )
}

export default Footer