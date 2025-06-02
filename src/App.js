import './App.css';
import NavBar from './components/core/NavBar';
import { Route, Routes } from 'react-router-dom';
import RoutesIndex from './components/core/RoutesIndex';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" element={<RoutesIndex />} />
      </Routes>
    </div>
  );
}

export default App;
