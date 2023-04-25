import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import Toolbar from './components/Toolbar';
import RedirectPage from './pages/RedirectPage';
import Login from './pages/Login';
import Mails from './pages/Mails';
import { AuthProvider } from './components/AuthContext';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RedirectPage />} />
          <Route path="/mail/*" element={<Mails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
