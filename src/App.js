import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/shop' element={ <Shop /> }/>
          <Route path='/blog' element={ <Blog /> }/>
          <Route path='/cart' element={ <Cart /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
