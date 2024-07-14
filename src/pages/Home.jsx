import { Box } from "@chakra-ui/react"
import HeroSection from '../components/Hero';
import TradingTools from '../components/TradingTools';
import AccountTypes from '../components/AccountTypes';
import CreateAccount from '../components/CreateAccount';
import CustomerReviews from '../components/CustomerReviews';
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <Box width={"100%"} minHeight = "100vh">
        <HeroSection />
        <Features />
        <AboutUs />
        <TradingTools />
        <AccountTypes />
        <CreateAccount />
        <CustomerReviews />
    </Box>
  )
}

export default Home