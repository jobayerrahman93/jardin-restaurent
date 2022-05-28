import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './Pages/About/AboutPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Reservation from './Pages/Reservation/Reservation';

function App() {
  return (
    <>

     <BrowserRouter>
     
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path="/nav" element={<Navigation/>} />
       <Route path="/about-us" element={<AboutPage/>} />
       <Route path="/reservation" element={<Reservation/>} />
       <Route path="/contact" element={<ContactUs/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
