import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/landingPage';
import Footer from './components/Footer';
const App = () => {
  // const location = useLocation();

  return (
    <div className='min-h-screen relative'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
  )
}

export default App
