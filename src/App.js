import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<Watchhistory/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
