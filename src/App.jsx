

 import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Home from './pages/About.jsx'
import Home from './pages/Contact.jsx'
function App() {



  return (
      <div>

        <Router>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users/:username" element={<Users />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

        </Router>
      </div>
    
  )
}

export default App








