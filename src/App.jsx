import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route />
          <SideBar />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
