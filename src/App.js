import Movies from './components/Movies'
import { Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>Movies</h3>
      <Routes>
        <Route index element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
