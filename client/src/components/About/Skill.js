import React from 'react';
import PropTypes from 'prop-types';

export const Skill = ({ skill }) => {
  const title = skill[0];
  const value = skill[1];
  return (
    <>
      <div className='skill-item padd-15'>
        <h5>{title}</h5>
        <div className='progress'>
          <div className='progress-in' style={{ width: value }}></div>
          <div className='skill-percent'>{value}</div>
        </div>
      </div>
    </>
  );
};

Skill.propTypes = {
  skill: PropTypes.array.isRequired,
};
