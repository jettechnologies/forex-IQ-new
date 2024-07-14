import { Box } from "@chakra-ui/react"
import HeroSection from '../components/Hero';
import AccountTypes from '../components/AccountTypes';
import CreateAccount from '../components/CreateAccount';
import CustomerReviews from '../components/CustomerReviews';
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import StartStep from "../components/StartStep";

const Home = () => {
  return (
    <Box width={"100%"} minHeight = "100vh">
        <HeroSection />
        <Features />
        <AboutUs />
        <StartStep />
        <AccountTypes />
        <CreateAccount />
        <CustomerReviews />
    </Box>
  )
}

export default Home