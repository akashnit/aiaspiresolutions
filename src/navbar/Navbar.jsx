import React, { useState } from 'react'
import "./navbar.css";
import eklavya from '../assets/company log.png';
// import Fb from "../assets/fb.png"
import LinkedIn from "../assets/ln.png"
import Ig from "../assets/ig.png"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false);
    return (
        <nav>
            <div className='icon'>
                <img src={eklavya} alt="Eklavya Solution" />
            </div>
            <div className='navbar_buttons'>
                {/* <button>Contact</button> */}
                <div className='hamburger_menu' onClick={() => setNavMenu(!navMenu)}>
                    <div className={`hamburger_menu_line ${navMenu ? "hamburger_menu_line_active" : ""}`}></div>
                    <div className={`hamburger_menu_line ${navMenu ? "hamburger_menu_line_active" : ""}`}></div>
                    <div className={`hamburger_menu_line ${navMenu ? "hamburger_menu_line_active" : ""}`}></div>
                </div>
            </div>
            <div className={`navbar_screen ${navMenu ? 'navbar_screen_active' : ""}`}>
                <div className='nav_links_parent'>
                    <NavLink to="/" onClick={() => setNavMenu(!navMenu)}><h2 className='nav_links'>Home</h2></NavLink>
                    <a href="/#about" onClick={() => setNavMenu(!navMenu)}><h2 className='nav_links'>About</h2></a>
                    <a href="/#services" onClick={() => setNavMenu(!navMenu)}><h2 className='nav_links'>Services</h2></a>
                    <NavLink to="/training" onClick={() => setNavMenu(!navMenu)}><h2 className='nav_links'>Training</h2></NavLink>
                </div>
                <div className='nav_connect'>
                    <div className='nav_contact'>
                        <h3 className='contact'>Contact</h3>
                        <h5>C-256 New Ashok Nagar,<br /> New Delhi, 110096</h5>
                        <Link to="mailto:info@eklavyasolution.com"><h6>info@eklavyasolution.com</h6></Link>
                        <Link to="tel:+919336673099"><h6>+ 91 9336673099</h6></Link>
                    </div>
                    <div className='social_links_parent'>
                        <h3 className='social_link_heading'>Social Links</h3>
                        <div className='social_links'>
                            {/* <img src={Fb} alt="Facebook Link" /> */}
                            <Link target='blank' to="https://www.instagram.com/eklavyasolution?igsh=N3R0bWs2bXozc204"><img src={Ig} alt="Instagram Link" /></Link>
                            <Link target='blank' to="https://www.linkedin.com/company/eklavyasolution/mycompany/verification/?viewAsMember=true"><img src={LinkedIn} alt="LinkedIn Link" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav >

    )
}

export default Navbar