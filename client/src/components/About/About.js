import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Skill } from './Skill';
import { Education } from './Education';
import { Experience } from './Experience';
import Context from '../../context/Context';

export const About = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.getInfo();
  }, []);

  const {
    name,
    description,
    dob,
    location,
    age,
    phone,
    email,
    degree,
    website,
    skills,
    education,
    experience,
  } = context.data.user;

  return (
    <>
      <section className='about section' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2>About Me</h2>
            </div>
            <div className='row'>
              <div className='about-content padd-15'>
                <div className='row'>
                  <div className='about-text padd-15'>
                    <h3>
                      Hi, I'm <span>{name}.</span>
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='personal-info padd-15'>
                    <div className='row'>
                      <div className='info-item padd-15'>
                        <p>
                          Birthday : <span>{dob}</span>
                        </p>
                      </div>
                      <div className='info-item padd-15'>
                        <p>
                          Age : <span>{age}</span>
                        </p>
                      </div>

                      <div className='info-item padd-15'>
                        <p>
                          City : <span>{location}</span>
                        </p>
                      </div>
                      <div className='info-item padd-15'>
                        <p>
                          Freelance : <span>Available</span>
                        </p>
                      </div>
                      <div className='info-item padd-15'>
                        <p>
                          Phone : <span>{phone}</span>
                        </p>
                      </div>
                      <div className='info-item padd-15'>
                        <p>
                          Degree :{' '}
                          <span style={{ fontSize: 14 }}>{degree}</span>
                        </p>
                      </div>
                      <div className='info-item padd-15'>
                        <p>
                          Email : <span>{email}</span>
                        </p>
                      </div>
                      <div className='info-item padd-15'>
                        <p>
                          Website : <span>{website}</span>
                        </p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='buttons padd-15'>
                        <a
                          href='https://drive.google.com/file/d/1dNSg78Rs-lWnXedgGt8dsTwEkG-0qwjH/view?usp=sharing'
                          target='blank'
                          className='btn'
                        >
                          Download CV
                        </a>
                        <Link to='/contact' className='btn hire-me'>
                          Hire Me
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='skills padd-15'>
                    <div className='row'>
                      {skills &&
                        skills.map((skill, index) => (
                          <Skill key={index} skill={skill} />
                        ))}
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='education padd-15'>
                    <h3 className='title'>Education</h3>
                    <div className='row'>
                      <div className='timeline-box padd-15'>
                        <div className='timeline shadow-dark'>
                          {education &&
                            education.map((item, idx) => (
                              <Education key={idx} edu={item} />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='experience padd-15'>
                    <h3 className='title'>Experience</h3>
                    <div className='row'>
                      <div className='timeline-box padd-15'>
                        <div className='timeline shadow-dark'>
                          {experience &&
                            experience.map((item, idx) => (
                              <Experience key={idx} exp={item} />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
