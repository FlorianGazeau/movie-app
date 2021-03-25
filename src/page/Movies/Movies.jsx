import React, {useContext } from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Card from '../../components/Card/Card'
import {MovieContext} from '../../context/MovieContext'

import './Movies.scss'

const Watchlist = () => {

  const { watchlist } = useContext(MovieContext)

  return (
    <div className='grid'>
      {watchlist && watchlist.map((movie, i) => {
        return (
          <Card key={i} movie={movie} type={"watchlist"} />
        )
      })}
    </div>
  )
}

const Watched = () => {

  const { watched } = useContext(MovieContext)

  return (
    <div className='grid'>
      {watched && watched.map((movie, i) => {
        return (
          <Card key={i} movie={movie} type={"watched"} />
        )
      })}
    </div>
  )
}

const ComingSoon = () => {
  return (
    <div>
      ComingSoon
    </div>
  )
}

const Movies = () => {

  let { path, url} = useRouteMatch()
  const { watchlist, watched } = useContext(MovieContext)

  return (
    <div className="movies">
      <h1>Films</h1>
      <ul className="menu">
        <li><Link to={`${url}/a-voir`}>A Voir <span>{watchlist.length}</span> </Link></li>
        <li><Link to={`${url}/vu`}>Vu  <span>{watched.length}</span></Link></li>
        <li><Link to={`${url}/a-venir`}>A Venir</Link></li>
      </ul>
      <Switch>
        <Route exact path={`${path}/:a-voir`}>
          <Watchlist />
        </Route>
        <Route exact path={`${path}/:a-venir`}>
          <ComingSoon />
        </Route>
        <Route exact path={`${path}/:vu`}>
          <Watched />
        </Route>
      </Switch>
    </div>
  )
}

export default Movies
