// import { auth } from '../firebase/firebase';
// import 'firebase/firestore'
// import firebase from 'firebase/app'
// import 'firebase/auth'

// import { addMovieToWatched, addMovieToWatchlist, fetchMovieFromWatched, fetchMovieFromWatchlist} from './MovieContext'

// export const firestore = firebase.firestore()

// export const MovieReducer = (state, action) => {
//   switch(action.type) {
//     case "ADD_MOVIE_TO_WATCHED" :
//       addMovieToWatched(state, action)
//       return state;
//     case "FETCH_MOVIE_FROM_WATCHED" :
//       fetchMovieFromWatched(state, action)
//       return state;

//     case "ADD_MOVIE_TO_WATCHLIST" :
//       addMovieToWatchlist(state, action)
//       return state;

//     case "FETCH_MOVIE_FROM_WATCHLIST" :
//       fetchMovieFromWatchlist(state, action)
//     default :
//       return state
//   }
// }