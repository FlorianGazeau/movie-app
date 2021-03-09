import React from 'react'
import { Link } from 'react-router-dom'

import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Logo from '../../assets/movieapp.png'
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
              <Link to="/" className='nav__link'>Films</Link>
            </li>
            <li>
              <TvIcon />
              <Link to="/" className='nav__link'>Séries</Link>
            </li>
            <li>
              <CalendarTodayIcon />
              <Link to="/" className='nav__link'>Calendrier</Link>
            </li>
            <li>
              <AccountCircleIcon />
              <Link to="/" className='nav__link'>Profil</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar