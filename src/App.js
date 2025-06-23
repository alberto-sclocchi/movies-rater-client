import './App.css';
import NavBar from './components/core/NavBar';
import { Route, Routes } from 'react-router-dom';
import RoutesIndex from './components/core/RoutesIndex';
import { MoviesProvider } from './components/movies/context/MoviesContext.context';
import { ReelBotProvider } from './components/reelbot/context/ReelBotContext.context';
import { AuthProvider } from './components/auth/context/AuthContext.context';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MoviesProvider>
          <ReelBotProvider>
            <NavBar />
            <Routes>
              <Route path="/*" element={<RoutesIndex />} />
            </Routes>
          </ReelBotProvider>
        </MoviesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
