import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import robb from '../../assets/images/robb.jpg';
import '../../assets/css/about.css';

function AboutMe () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <h2 className='text-center w100 mb-2'>About<span className='text-primary'>Me</span></h2>
                <div className='text-center' id='my-pic'>
                    <img className='circle' id='profile-picture' src={robb} alt='Robb Burson of RobBurson' />
                    <a href='https://github.com/RobBurson' target='_blank'>
                        <FontAwesomeIcon icon={faGithubAlt} className='mx-2 icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/rburson' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className='mx-2 icon' />
                    </a>
                </div>
                <div className='w75' id='about-me'>
                    <p>
                        Salutations! My name is <span className='bold text-primary'>Robert Burson</span>. I am a MERN stack developer.
                    </p>
                    <p>
                        In September 2021, I embarked on a life changing journey to become a full stack developer. I had toyed with the idea before but due to various constraints I hadn't taken the plunge. Before this undertaking I was living with an assisting my elderly grandparents, looking for some sort of job that I could do at home and finding nothing that I was qualified for with my Associates Degree.
                    </p>
                    <p>
                        So in late July of 2021, a friend recommended that I take the plunge and enter into the bootcamp program. And thus I dedicated the next 6 months of my life (slightly more in truth) to learning to write code. It has been a bit harrowing at times but such a rewarding task and it is so near completion.
                    </p>
                    <p>
                        That is really about it. Here we are, currently in February 2022. Graduation is set for, I believe, the first week of March. And then I can REALLY dive in to the world of coding.
                    </p>
                    <p>
                        Hello, my name is Robb. Web Developer. Nerd. Cat Dad.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;