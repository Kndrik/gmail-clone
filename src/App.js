import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import Toolbar from './components/Toolbar';
import RedirectPage from './components/RedirectPage';
import { AuthProvider } from './components/AuthContext';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

function App() {
  const [reducedSideBar, setReducedSideBar] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RedirectPage />} />
          <Route path="/mail/*" 
            element={
              <div className="App">
                <Header changeSideBar={() => setReducedSideBar(!reducedSideBar)} />
                <div className="content">
                  <Sidebar reduced={reducedSideBar} />
                  <MainSection />
                  <Toolbar />
                </div>
              </div>
            } />
          <Route path="/login" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
