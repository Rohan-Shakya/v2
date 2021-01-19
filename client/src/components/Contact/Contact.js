import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { ImPhone, ImLocation2 } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.getInfo();
  }, []);

  const [data, setData] = useState({
    userName: '',
    userEmail: '',
    subject: '',
    message: '',
  });

  const { phone, location, email } = context.data.user;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    context.postInfo(data);

    setData({
      ...data,
      userName: '',
      userEmail: '',
      subject: '',
      message: '',
    });
  };

  const { userName, userEmail, subject, message } = data;

  return (
    <>
      <section className='contact section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className='row'>
            <div className='contact-info-item padd-15'>
              <div className='icon'>
                <ImPhone />
              </div>
              <h4>Call Me On</h4>
              <p>{phone}</p>
            </div>

            <div className='contact-info-item padd-15'>
              <div className='icon'>
                <ImLocation2 />
              </div>
              <h4>Location</h4>
              <p>{location}</p>
            </div>

            <div className='contact-info-item padd-15'>
              <div className='icon'>
                <FaEnvelope />
              </div>
              <h4>Email</h4>
              <p>{email}</p>
            </div>
          </div>

          <div className='row'>
            <form className='contact-form padd-15' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='form-item col-6 padd-15'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='userName'
                      value={userName}
                      className='form-control'
                      placeholder='Name*'
                      onChange={handleChange}
                      autoComplete='off'
                      required
                    />
                  </div>
                </div>
                <div className='form-item col-6 padd-15'>
                  <div className='form-group'>
                    <input
                      type='email'
                      name='userEmail'
                      value={userEmail}
                      className='form-control'
                      placeholder='Email*'
                      onChange={handleChange}
                      autoComplete='off'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='form-item col-12 padd-15'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='subject'
                      value={subject}
                      className='form-control'
                      placeholder='Subject*'
                      onChange={handleChange}
                      autoComplete='off'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='form-item col-12 padd-15'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      className='form-control'
                      value={message}
                      placeholder=' Your Message*'
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 padd-15'>
                  <button type='submit' className='btn'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
