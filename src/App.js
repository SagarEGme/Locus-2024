import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Team from './pages/Team'
import Pulchowk from './pages/Pulchowk'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Error from './pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pulchowk" element={<Pulchowk />} />
          <Route path="/404" element={<Error/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
