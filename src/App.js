import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import TravelPackage from './Components/TravelPackage';
import TravellerHistory from './Components/TravellerHistory';
import ContactUs from './Components/ContactUs'
import ScrollToTop from './Components/ScrollToTop';
import UseEffect from './Components/UseEffect';
import Footer from './Components/Footer';





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About title='About us'
            props='Our Team'
          />} />
          <Route exact path='/TravelPackage' element={<TravelPackage title='Select Your Best Package For Your Travel'
            props='Facilities You Want' />} />
          <Route exact path='/TravellerHistory' element={<TravellerHistory title='Traveller History' />} />
          <Route exact path='/ContactUs' element={<ContactUs title='Contact Us / Log In' />} />
        </Routes>
        <ScrollToTop />
        <UseEffect />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
