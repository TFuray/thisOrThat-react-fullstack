import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/Main/index"
import Navbar from "./components/Navbar/index"
import Login from './pages/Login/index'
import Register from './pages/Register/index'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
