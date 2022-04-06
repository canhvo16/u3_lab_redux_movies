import { GET_MOVIE_DETAILS } from '../types'

const initialState = {
  movieDetails: {}
}

const MovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailsReducer
