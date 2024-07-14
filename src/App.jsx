import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';

function App() {
  return (
    <Box width="100vw" border="2px solid black" overflowX="hidden" fontFamily="Roboto, sans-serif">
      <Routes>
        <Route path='/' element = {<Layout/>} >
          <Route index element = {<Home />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
