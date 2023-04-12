import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/Main/index"
import Navbar from "./components/Navbar/index"
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Dashboard from './pages/Dashboard/index'

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
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/Register"
            element={<Register/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
