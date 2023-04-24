import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import Toolbar from './components/Toolbar';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar />
          <MainSection />
          <Toolbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
