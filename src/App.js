import './App.css';
import NavBar from './components/core/NavBar';
import { Route, Routes } from 'react-router-dom';
import RoutesIndex from './components/core/RoutesIndex';
import { MoviesProvider } from './components/movies/context/MoviesContext.context';
import { ReelBotProvider } from './components/reelbot/context/ReelBotContext.context';

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <ReelBotProvider>
          <NavBar />
          <Routes>
            <Route path="/*" element={<RoutesIndex />} />
          </Routes>
        </ReelBotProvider>
      </MoviesProvider>
    </div>
  );
}

export default App;
