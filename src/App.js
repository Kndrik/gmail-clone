import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
