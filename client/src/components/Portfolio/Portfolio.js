import React from 'react';
import photography from '../../img/portfolio/photography.jpg';
import photography123 from '../../img/portfolio/photography123.jpg';
import photography555 from '../../img/portfolio/photography555.jpg';
import webdesign222 from '../../img/portfolio/webdesign222.jpg';
import webdesign111 from '../../img/portfolio/webdesign111.png';
import wordpress from '../../img/portfolio/wordpress.jpg';

export const Portfolio = () => {
  return (
    <>
      <section className='portfolio section' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className='row'>
            <div className='portfolio-filter padd-15'>
              <button type='button' className='active' data-filter='all'>
                All
              </button>
              <button type='button' data-filter='photography'>
                Photography
              </button>
              <button type='button' data-filter='web-design'>
                Web Design
              </button>
              <button type='button' data-filter='wordpress'>
                Wordpress
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='portfolio-item padd-15' data-category='photography'>
              <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                  <img src={photography} alt='portfolio' />
                </div>
                <div className='portfolio-info'>
                  <h4>Photography</h4>
                  <div className='icon'>
                    <i className='fa fa-search'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='portfolio-item padd-15' data-category='photography'>
              <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                  <img src={photography123} alt='portfolio' />
                </div>
                <div className='portfolio-info'>
                  <h4>Photography</h4>
                  <div className='icon'>
                    <i className='fa fa-search'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='portfolio-item padd-15' data-category='photography'>
              <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                  <img src={photography555} alt='portfolio' />
                </div>
                <div className='portfolio-info'>
                  <h4>Photography</h4>
                  <div className='icon'>
                    <i className='fa fa-search'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='portfolio-item padd-15' data-category='web-design'>
              <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                  <img src={webdesign222} alt='portfolio' />
                </div>
                <div className='portfolio-info'>
                  <h4>Web-design</h4>
                  <div className='icon'>
                    <i className='fa fa-search'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='portfolio-item padd-15' data-category='web-design'>
              <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                  <img src={webdesign111} alt='portfolio' />
                </div>
                <div className='portfolio-info'>
                  <h4>Web-design</h4>
                  <div className='icon'>
                    <i className='fa fa-search'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='portfolio-item padd-15' data-category='wordpress'>
              <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                  <img src={wordpress} alt='portfolio' />
                </div>
                <div className='portfolio-info'>
                  <h4>Wordpress</h4>
                  <div className='icon'>
                    <i className='fa fa-search'></i>
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
