import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ImHome,
  ImUser,
  ImList2,
  ImBriefcase,
  ImBlog,
  ImAddressBook,
} from 'react-icons/im';

export const Aside = (e) => {
  const asideSectionToggler = (e) => {
    document.querySelector('.nav-toggler').classList.toggle('open');
    document.querySelector('.aside').classList.toggle('open');

    if (window.innerWidth <= 500) {
      document.querySelector('#switcher').classList.toggle('hidden');
    }
  };

  const toggleAside = () => {
    if (window.innerWidth <= 1200) asideSectionToggler();
  };

  return (
    <>
      <div className='aside'>
        <div className='logo'>
          <Link to='/' title='Rohan Shakya'>
            Rohan
          </Link>
        </div>

        <div className='nav-toggler' onClick={asideSectionToggler}>
          <span></span>
        </div>

        <ul className='nav'>
          <li onClick={toggleAside}>
            <NavLink exact activeClassName='active' to='/'>
              <ImHome /> Home
            </NavLink>
          </li>
          <li onClick={toggleAside}>
            <NavLink activeClassName='active' to='/about'>
              <ImUser /> About
            </NavLink>
          </li>
          <li onClick={toggleAside}>
            <NavLink activeClassName='active' to='/service'>
              <ImList2 /> Services
            </NavLink>
          </li>
          <li onClick={toggleAside}>
            <NavLink activeClassName='active' to='/portfolio'>
              <ImBriefcase /> Portfolio
            </NavLink>
          </li>
          <li onClick={toggleAside}>
            <NavLink activeClassName='active' to='/blog'>
              <ImBlog /> Blog
            </NavLink>
          </li>
          <li onClick={toggleAside}>
            <NavLink activeClassName='active' to='/contact'>
              <ImAddressBook /> Contact
            </NavLink>
          </li>
        </ul>

        <div className='copyright-text'>
          Rohan Shakya &copy; {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};
