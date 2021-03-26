import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import MovieControl from '../MovieControl/MovieControl'

import './Card.scss'

const Card = ({movie, type}) => {

  const TMDB_POSTER = 'https://image.tmdb.org/t/p/original/'

  const [ShowModal, setShowModal] = useState(false)

  const handleAction = () => {
    setShowModal(prevShowModal => !prevShowModal)
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <Link to={`/film/` + movie.id}>
          <img className="thumbnail" src={TMDB_POSTER + movie.poster_path} alt=""/>
        </Link>
        <span className="btn-plus" onClick={handleAction}><i className="fas fa-plus-circle"></i></span>
        <MovieControl movie={movie} type={type} show={ShowModal} />
      </div>
    </div>
  )
}

export default Card