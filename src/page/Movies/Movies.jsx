import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Card from '../../components/Card/Card'

import './Movies.scss'

const Watchlist = () => {

  const [Movies, setMovies] = useState()

  const fetchMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=81aa61866a4b8deb760704a6e2f11e52&language=en-US&page=1')
    const dataArray = await res.json()
    setMovies(dataArray)
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
      <div className='grid'>
        {Movies && Movies.results.map((movie, i) => {
          return (
            <Card key={i} {...movie} />
          )
        })}
      </div>
  )
}

const Watched = () => {
  return (
    <div>
      Watched
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

  return (
    <div className="movies">
      <h1>Films</h1>
      <ul className="menu">
        <li><Link to={`${url}/a-voir`}>A Voir</Link></li>
        <li><Link to={`${url}/vu`}>Vu</Link></li>
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
