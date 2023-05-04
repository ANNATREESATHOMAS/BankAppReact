import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Home from './pages/Home.js'
import Deposit from './pages/Deposit.js'
import Withdraw from './pages/Withdraw.js'
import Transfer from './pages/Transfer.js'
import Statement from './pages/Statement.js'

function App() {
  return (
    <div className="App">
    <Router  >
        <NavBar />
        
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home/>} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/statement" element={<Statement />} />

         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
