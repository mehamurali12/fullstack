import './App.css'
import Home from './components/home/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/> 
          <Route path='/dashboard'element={<Dashboard/>}/> 
          <Route path='*' element={<h1>Page not Found</h1>}/> 
      </Routes>
    </Router>
  </div>
  );
}

export default App;