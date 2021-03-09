import React from 'react'
import Logo from '../../assets/movieapp.png'

import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="img-wrapper">
        <img src={Logo} alt="logo movieapp"/>
      </div>
      <div className='sidebar__content'>
        {/* <form action="" className='form-control'>
          <input type="text" placeholder="Search..."/>
        </form> */}
        <nav className='sidebar__nav'>
          <ul>
            <li className='active'>
              <MovieIcon />
              <a className='nav__link' href="">Films</a>
            </li>
            <li>
              <TvIcon />
              <a className='nav__link' href="">Séries</a>
            </li>
            <li>
              <CalendarTodayIcon />
              <a className='nav__link' href="">Calendrier</a>
            </li>
            <li>
              <AccountCircleIcon />
              <a className='nav__link' href="">Profil</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar