import React from 'react';
import './training.css';
import campfire from '../assets/campfire4.webp';
import training from '../assets/training.gif';
import certi from '../assets/certi.png';


const Training = () => {

    return (
        <div className='training'>
            <div className='training_page_parent'>
                <div className='training_landing_page'>
                    <div className='training_page_content'>
                        <h1>SUMMER<br />CAMP'25</h1>
                        <a target='blank' href='https://forms.gle/9rGRUg6ci8EutyAf7'><button>Apply Now</button></a>
                        <p>Limited seats available. Apply asap</p>
                    </div>
                    <div className='training_page_img'>
                        <img src={campfire} alt="" />
                        {/* <div className="text">
                            <p >I never tell the same joke twice I have a DRY sense of humor.</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='traning_rest_page'>
                <div className='training_about_page'>
                    <div className='training_about_page_in'>
                        <div className='training_about_page_in1'>
                            <h4>About Training</h4>
                            <h3>Exclusive <span>Summer Training</span> Programs</h3>
                            <p>We are a company that's innovating solutions to global challenges, impacting billions of lives. At Eklavya Solution, we believe in nurturing talent, empowering individuals, and fostering a collaborative environment where you can truly thrive.</p>
                            <p> Be a part of a dynamic and forward-thinking company. Learn from the best, work on impactful projects, and grow your career with Eklavya Solution.</p>
                            <p> Together, let's build a better future.</p>
                        </div>
                        <div className='training_about_page_in2'>
                            <img src={training} alt="" />
                        </div>
                    </div>
                </div>
                <div className='benefits_page_in'>
                    {/* <div className='vision'>
                        <h4>Our Vision</h4>
                        <p>At Eklavya Solution, we aim to create an environment where learning and innovation go hand-in-hand. We are committed to empowering our team members to achieve their fullest potential and make a significant impact on global challenges.</p>
                    </div> */}
                    <h4>Benefits of Training</h4>
                    <div className='benefits'>
                        <div className='benefits_heading'>
                            <h3><span>Perks</span> you will get</h3>
                        </div>
                        <div className='benefits_content'>
                            <div className='benefits_content1'>
                                <h4><span>Training by IITs & NITs Industry Experts -</span><br />&emsp; Gain insights and knowledge from the best in the field.</h4>
                                <h4><span>Career Counselling -</span><br />&emsp;Personalized guidance to help you navigate your career path.</h4>
                                <h4><span>Exclusive  SaaS Mafia Group Access -</span><br />&emsp; Join a network of IITs/NITs alumni and industry professionals.</h4>
                                <h4><span>Internship Opportunities -</span><br />&emsp; Work on live projects and gain hands-on experience.</h4>
                                <h4><span>Live Projects -</span><br />&emsp; Tackle real-world problems and develop practical solutions.</h4>
                                <h4><span>Internship Certificate -</span><br />&emsp; Receive official recognition of your efforts and skills.</h4>
                            </div>
                            <div className='benefits_content2'>
                                <img src={certi} alt="" />
                            </div>
                        </div>
                        <a target='blank' href='https://forms.gle/9rGRUg6ci8EutyAf7'><button>Apply Now</button></a>
                        <p>Limited seats available. Apply asap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training