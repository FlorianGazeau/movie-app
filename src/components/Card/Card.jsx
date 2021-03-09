import React, { useState } from 'react'

import './Card.scss'

const Card = (props) => {

  const TMDB_POSTER = 'https://image.tmdb.org/t/p/original/'

  const [ShowModal, setShowModal] = useState(false)


  const handleAction = () => {
    setShowModal(prevShowModal => !prevShowModal)
    console.log(ShowModal)
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <img className="thumbnail" src={TMDB_POSTER + props.poster_path} alt=""/>
        <span className="btn-plus" onClick={handleAction}><i className="fas fa-plus-circle"></i></span>
        <div className={ShowModal ? 'modal active' : 'modal'}>
          <div><button>Vu</button></div>
          <div><button>A Voir</button></div>
          <div><button>Fermer</button></div>
        </div>
      </div>
    </div>
  )
}

export default Card