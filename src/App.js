import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Outlet, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Services from './components/pages/Services/Services';
import Gallery from './components/pages/Gallery/Gallery';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Home/>} />
        </Route>
      </Routes>
  );
}

const Layout = () => (<>
  <Header/>
  <Outlet/>
  <Footer/>
</>)

export default App;
