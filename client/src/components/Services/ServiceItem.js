import React from 'react';
import PropTypes from 'prop-types';

export const ServiceItem = ({ logo, title }) => {
  return (
    <>
      <div className='services-item padd-15'>
        <div className='services-item-inner'>
          <div className='icon'>
            <i className={logo}></i>
          </div>
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis beatae, inventore dolorem necessitatibus dolores natus,
            quasi omnis accusamus quam iste earum quo exercitationem ipsam eaque
            provident dicta ipsa ratione.
          </p>
        </div>
      </div>
    </>
  );
};

ServiceItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
