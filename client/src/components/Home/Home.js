import profile from '../../img/about.jpg';
import Typical from 'react-typical';
import { ImFacebook, ImTwitter, ImLinkedin2, ImGithub } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';

export const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='container'>
        <div className='intro'>
          <img src={profile} alt='Profile' className='shadow-dark' />
          <h1 title='Rohan Shakya'>Rohan Shakya</h1>
          <p className='change-content'>
            I'm a{' '}
            <Typical
              steps={[
                'Student.',
                2000,
                'Programmer.',
                2000,
                'Developer.',
                2000,
                'Technology Enthusiast.',
                2000,
              ]}
              loop={Infinity}
              wrapper='span'
            />
          </p>
          <div className='social-links'>
            <a
              href='https://www.facebook.com/Rohan.Shakya254/'
              target='blank'
              title='Facebook'
            >
              <ImFacebook />
            </a>
            <a
              href='https://twitter.com/rohan_saqya'
              target='blank'
              title='Twitter'
            >
              <ImTwitter />
            </a>
            <a
              href='https://www.instagram.com/rohan_saqya/'
              target='blank'
              title='Instagram'
            >
              <SiInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/rohan-shakya/'
              target='blank'
              title='Linkin'
            >
              <ImLinkedin2 />
            </a>
            <a
              href='https://github.com/Rohan-Shakya'
              target='blank'
              title='Github'
            >
              <ImGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
