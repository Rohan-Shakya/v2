import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendar } from 'react-icons/fa';

export const Experience = ({ exp }) => {
  return (
    <>
      <div className='timeline-item'>
        <div className='circle-dot'></div>
        <h6 className='timeline-date'>
          <FaCalendar /> {exp.year}
        </h6>
        <h4 className='timeline-title'>{exp.position}</h4>
        <p className='timeline-text'>{exp.description}</p>
      </div>
    </>
  );
};

Experience.propTypes = {
  exp: PropTypes.object.isRequired,
};
