import { Box } from "@chakra-ui/react"
import HeroSection from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import TradingTools from '../components/TradingTools';
import AccountTypes from '../components/AccountTypes';
import CreateAccount from '../components/CreateAccount';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box width={"100%"} minHeight = "100vh">
        <Navbar />
        <HeroSection />
        <WhyChooseUs />
        <TradingTools />
        <AccountTypes />
        <CreateAccount />
        <CustomerReviews />
        <Footer />
    </Box>
  )
}

export default Home