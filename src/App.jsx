import { Box } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {
  return (
    <Box width="100vw" border="2px solid black" overflowX="hidden" fontFamily="Roboto, sans-serif">
      <Home />
    </Box>
  );
}

export default App;
