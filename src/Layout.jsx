import { Outlet } from "react-router-dom"
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
        <Navbar />
        <Flex as="main" direction="column" flex="1" minH="100vh" fontFamily="Roboto, sans-serif">
            <Box flex="1">
                <Outlet />
            </Box>
        </Flex>
        <Footer />
    </>
  )
}

export default Layout