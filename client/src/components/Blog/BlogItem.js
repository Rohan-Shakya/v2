import React from 'react';
import PropTypes from 'prop-types';

export const BlogItem = ({ date, title, desc, tag, link, image }) => {
  return (
    <>
      <div className='blog-item padd-15'>
        <div className='blog-item-inner shadow-dark'>
          <div className='blog-img'>
            <img src={image} alt='blog' />
            <div className='blog-date'>{date}</div>
          </div>
          <div className='blog-info'>
            <h4 className='blog-title'>{title}</h4>
            <p className='blog-description'>{desc}</p>
            <p className='blog-tag'>
              Tags : <a href='!#'>{tag}</a>
            </p>
            <button type='button' className='btn'>
              <a href={link}>Read More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

BlogItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
