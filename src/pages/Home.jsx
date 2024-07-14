import { Box } from "@chakra-ui/react"
import HeroSection from '../components/Hero';
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import StartStep from "../components/StartStep";
import JoinForexIQRevolution from "../components/Revolution";

const Home = () => {
  return (
    <Box minHeight = "100vh">
        <HeroSection />
        <Features />
        <AboutUs />
        <StartStep />
        <JoinForexIQRevolution />
    </Box>
  )
}

export default Home