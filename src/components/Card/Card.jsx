import React, { useState } from 'react'

import './Card.scss'

const Card = () => {

  const [ShowModal, setShowModal] = useState(false)


  const handleAction = () => {
    setShowModal(prevShowModal => !prevShowModal)
    console.log(ShowModal)
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <img className="thumbnail" src="https://image.tmdb.org/t/p/original//6KErczPBROQty7QoIsaa6wJYXZi.jpg" alt=""/>
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