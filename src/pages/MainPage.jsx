import React from 'react'
import './mainpage.css'
import ui_ux from '../assets/1660315042269_11zon.jpeg'
import web_dev from '../assets/Web development.jpg';
import drona from '../assets/image.png';
import mobile from '../assets/original-765df6d4f8def459316068867a9b50c8.png';
import landing_img from '../assets/original-0ebf1e6c9a64bfe1510cf8d72de99185.gif';
import seo from '../assets/Designer (5).png';
import vid from '../assets/vid4.mp4';
import phone from '../assets/download.png';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <section>
      <div className='landing_page_parent'>
        <div className='landing_page'>
          <div className='bg_circle1'></div>
          <div className='landing_page_content'>
            <h3>Digital Agency</h3>
            <h1>We Create <span>Future</span></h1>
            <p>We create digital solutions beyond imagination with engaging experiences and captivating campaigns leaving positive impact</p>
            <Link to="tel:+919336673099"><button><img src={phone} alt="" />Let's Talk</button></Link>
          </div>
          <div className='landing_page_img'>
            <img src={landing_img} alt="" />
          </div>
        </div>
      </div>
      <div className='rest_page'>
        <div className='about_page' id='about'>
          <div className='about_page_in'>
            <div className='about_page_in1'>
              <h4>About Us</h4>
              <h3>Launching <span>Brands</span> into the Future</h3>
              <p>We are a team of talented design and technology enthusiasts
                who continuously push the boundaries of innovation, merging
                creativity with technology to create enchanting, futuristic and
                extraordinary experiences. We create visually appealing and strategically
                engineered for high conversion rates.</p>
              {/* <h5>Know More</h5> */}
            </div>
            <div className='about_page_in2'>
              <video autoPlay loop muted>
                <source src={vid} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
        <div className='product_page'>
          <div className='product_page_in'>
            <div className='product_page_in1'>
              <h4>Featured Product</h4>
              <h3>Drona</h3>
              <h6>A complete cloud based digital ecosysytem built for schools, college and coachings</h6>
              <p>Design + Development</p>
              {/* <h5>Visit Site</h5> */}
            </div>
            <div className='product_page_in2'>
              <img src={drona} alt="" />
            </div>
          </div>
        </div>
        <div className='services_page' id='services'>
          <div className='services_page_in'>
            <h4>Services We Offer</h4>
            <div className='ui_ux'>
              <div className='ui_ux_heading'>
                <h3>UI/UX Design</h3>
                <p>seamlessly blending innovative design with user-centric functionality to create visually stunning and intuitively engaging websites</p>
              </div>
              <div className='ui_ux_content'>
                <div className='ui_ux_content1'>
                  <h4>Web Design</h4>
                  <h4>CX Design</h4>
                  <h4>Ui & Interactive Design</h4>
                  <h4>UX Design</h4>
                  <h4>Content Strategy & Production</h4>
                </div>
                <div className='ui_ux_content2'>
                  <img src={ui_ux} alt="" />
                </div>
              </div>
            </div>
            <div className='web_dev'>
              <div className='ui_ux_heading web_dev_heading'>
                <p>Specializing in research-driven strategies, we craft websites that seamlessly engage visitors, ensuring user experience and maximizing conversion rates.</p>
                <h3>Web Development</h3>
              </div>
              <div className='web_dev_content'>
                <div className='web_dev_content2'>
                  <img src={web_dev} alt="" />
                </div>
                <div className='web_dev_content1'>
                  <h4>Frontend Development</h4>
                  <h4>Backend Development</h4>
                  <h4>Research</h4>
                  <h4>CMS Implementation</h4>
                  <h4>Animation</h4>
                </div>

              </div>
            </div>
            <div className='mobile_app'>
              <div className='ui_ux_heading '>
                <h3>Mobile Apps</h3>
                <p>Crafting intuitive apps for optimal user engagement. We leverage thorough research making apps engaging and futuristic, tailored to drive meaningful outcomes.</p>
              </div>
              <div className='ui_ux_content'>
                <div className='ui_ux_content1'>
                  <h4>Icon Design</h4>
                  <h4>Graphic Design</h4>
                  <h4>Research</h4>
                  <h4>Latest and Trendy Tech</h4>
                </div>
                <div className='ui_ux_content2'>
                  <img src={mobile} alt="" />
                </div>
              </div>
            </div>
            <div className='digital_market'>
              <div className='ui_ux_heading web_dev_heading'>
                <p>We use all the necessary tools and approaches to make you viral in the digital space and get you maximum ROI from the marketing investments.</p>
                <h3>Digital Marketing</h3>
              </div>
              <div className='web_dev_content'>
                <div className='web_dev_content2 web_dev_content_2'>
                  <img src={seo} alt="" />
                </div>
                <div className='web_dev_content1'>
                  <h4>SEO</h4>
                  <h4>Personal Branding</h4>
                  <h4>Content Marketing</h4>
                  <h4>E-mail Marketing</h4>
                  <h4>PR & Media</h4>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <div className='work_page'>
          <h3>Work</h3>
          <div className='work_in'>
            <h5>Coming Soon...</h5>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default MainPage