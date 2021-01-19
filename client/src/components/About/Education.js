import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendar } from 'react-icons/fa';

export const Education = ({ edu }) => {
  return (
    <>
      <div className='timeline-item'>
        <div className='circle-dot'></div>
        <h6 className='timeline-date'>
          <FaCalendar /> {edu.year}
        </h6>
        <h4 className='timeline-title'>{edu.level}</h4>
        <p className='timeline-text'>{edu.description}</p>
      </div>
    </>
  );
};

Education.propTypes = {
  edu: PropTypes.object.isRequired,
};
