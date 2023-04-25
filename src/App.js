import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import Toolbar from './components/Toolbar';
import { auth, app, SignIn } from './firebaseInit';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { useState } from 'react';

function App() {
  const [reducedSideBar, setReducedSideBar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header changeSideBar={() => setReducedSideBar(!reducedSideBar)} />
        <div className="content">
          <Sidebar reduced={reducedSideBar} />
          <MainSection />
          <Toolbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
