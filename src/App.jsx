import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Box overflowX="hidden" fontFamily="Rajdhani, sans-serif">
        <Routes>
          <Route path='/' element = {<Layout/>} >
            <Route index element = {<Home />} />
            <Route path = "/about-us" element = {<AboutUs/>} />
            <Route path = "/contact-us" element = {<ContactUs/>} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />
          </Route>
        </Routes>
    </Box>
  );
}

export default App;
