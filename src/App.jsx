import React from 'react';
import Home from './pages/Home';
import News from './pages/News';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </Header>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
