import { Box } from "@chakra-ui/react"
import HeroSection from '../components/Hero';
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import StartStep from "../components/StartStep";
import JoinForexIQRevolution from "../components/Revolution";
import DetailedFeature from "../components/DetailedFeature";
// import ForexChart from "../components/ForexChart";
import CurrencyRates from "../components/CurrencyRates";

const Home = () => {
  return (
    <Box minHeight = "100vh">
        <HeroSection />
        <Features />
        <AboutUs />
        <StartStep />
        {/* <ForexChart /> */}
        <CurrencyRates/>
        <DetailedFeature />
        <JoinForexIQRevolution />
    </Box>
  )
}

export default Home