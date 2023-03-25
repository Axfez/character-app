import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" exact element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
