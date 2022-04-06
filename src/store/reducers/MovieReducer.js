import { GET_MOVIES } from '../types'

const initialState = {
  movies: []
}

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}

export default MovieReducer
