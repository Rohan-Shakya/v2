import React from 'react';
import { ServiceItem } from './ServiceItem';

export const Service = () => {
  return (
    <>
      <section className='services section' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>Services</h2>
            </div>
          </div>
          <div className='row'>
            <ServiceItem logo='fa fa-laptop' title='Web Design' />
            <ServiceItem logo='fa fa-image' title='Photography' />
            <ServiceItem logo='fa fa-code' title='Web Development' />
            <ServiceItem logo='fa fa-film' title='Video Editing' />
            <ServiceItem logo='fa fa-rocket' title='Seo Optimization' />
            <ServiceItem logo='fa fa-paint-brush' title='Logo Design' />
          </div>
        </div>
      </section>
    </>
  );
};
