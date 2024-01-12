import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Home from './components/Home';
import Dettagli from './components/Dettagli';

function App() {
  return (
    <BrowserRouter>
    <div>
      <MyNavbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dettagli' element={<Dettagli/>}/>
      </Routes>
      <MyFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;
