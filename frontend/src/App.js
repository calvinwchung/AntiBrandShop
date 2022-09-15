import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
// import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <NavBar />
        <Routes>
          <Route path='/cart' exact element={<Cart />} />
          {/* <Route path='/not-found' component={NotFound} /> */}
          <Route path='/' exact element={<Home />} />
          {/* <Navigate to='/not-found' /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
