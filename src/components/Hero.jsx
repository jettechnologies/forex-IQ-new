import { Box, Flex, Heading, Button, Text, keyframes, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImg from "../assets/hero_img_2.jpg";

const HeroSection = () => {

  const isMobile = useBreakpointValue({base: true, md: false});

  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const typing = keyframes`
    from { width: 50% }
    to { width: 100% }
  `;

  const blink = keyframes`
    0% { border-color: transparent }
    50% { border-color: white }
    100% { border-color: transparent }
  `;

  const tickerItems = [
    "BTC/USD $985.76 (+0.86%)",
    "ETH/USD $1500.43 (-1.23%)",
    "XRP/USD $0.25 (+2.34%)",
    "LTC/USD $150.56 (-0.56%)",
    "BCH/USD $305.76 (+1.12%)",
    "ADA/USD $1.23 (+0.45%)",
    "DOGE/USD $0.07 (-2.45%)",
    "DOT/USD $20.45 (+1.56%)",
    "UNI/USD $25.78 (-0.89%)",
    "LINK/USD $30.12 (+0.99%)"
  ];

  const shuffledItems = shuffleArray(tickerItems);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
  };

  const sliderSettingsTwo = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Custom slider settings with variations
  const sliderSettingsFast = {
    ...sliderSettings,
    speed: 1500,
    autoplaySpeed: 1500,
  };

  const sliderSettingsSlow = {
    ...sliderSettings,
    speed: 2500,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <Box
        position="relative"
        bgImage={`url(${heroImg})`}
        bgPosition="center"
        bgSize="cover"
        color="white"
        py={20}
        height={{ base: "100vh", lg: "calc(100vh - 4rem)" }}
      >
        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="#0e1113"
          opacity={0.8}
          zIndex={1}
          px={{ base: 4, md: 16 }}
        />

        {/* Content */}
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          h="100%"
          position="relative"
          zIndex={2}
          textAlign={{ base: 'center', md: 'left' }}
          px={{ base: 4, md: 16 }}
        >
          <Box my="4rem" width="fit-content" mb={{ base: 8, md: 0 }}>
            <Heading as="h1" size="2xl" mb={4}>Unleash the power of AI Trading</Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              mb={10}
              borderRight="0.15em solid white"
              animation={`${typing} 3.5s steps(40, end) 1s, ${blink} 0.75s step-end infinite`}
            >
              THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING
            </Text>
            <Button
              px={{ md: "4rem" }}
              bg="#1b6e4e"
              color="white"
              _hover={{ bg: "#29ce56" }}
              size="lg"
              width={{ base: "100%", md: "auto" }}
              rounded="md"
            >
              <Text variants="subheading" fontSize={{ base: "md", xl: "xl" }}>Start Trading Now</Text>
            </Button>
          </Box>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}
          >
            {/* Optional Image or any other component you want to place here */}
          </motion.div>
        </Flex>
        {isMobile ? 
          <Box 
          px={{ base: 4, md: 16 }}
          py={2} 
          bg="#0e1113" 
          opacity={0.7}
          width="100vw" 
          display="flex" 
          justifyContent="center" 
          position="absolute" 
          bottom="0"
          zIndex={2}
        >
          <Box maxWidth="90vw">
            <Slider {...sliderSettingsTwo}>
              {tickerItems.map((item, index) => (
                <Box key={index} px={4} display="inline-block" color={item.includes("+") ? "#29ce56 " : "red.400"}>
                  <Text fontSize="md">{item}</Text>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
          :
          <Flex 
            px={{ base: 4, md: 16 }}
            py={2} 
            bg="#0e1113" 
            opacity={0.7}
            width="100vw" 
            display="flex" 
            justifyContent="space-between" 
            position="absolute" 
            bottom="0"
            zIndex={2}
          >
            <Box width = "30%">
              <Slider {...sliderSettingsFast}>
                {shuffledItems.map((item, index) => (
                  <Box key={index} px={4} display="inline-block" color={item.includes("+") ? "#29ce56  " : "red.400"}>
                    <Text fontSize="md">{item}</Text>
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box width = "30%">
              <Slider {...sliderSettings}>
                {shuffledItems.map((item, index) => (
                  <Box key={index} px={4} display="inline-block" color={item.includes("+") ? "#29ce56 " : "red.400"}>
                    <Text fontSize="md">{item}</Text>
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box width = "30%">
              <Slider {...sliderSettingsSlow}>
                {shuffledItems.map((item, index) => (
                  <Box key={index} px={4} display="inline-block" color={item.includes("+") ? "#29ce56 " : "red.400"}>
                    <Text fontSize="md">{item}</Text>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Flex>
        }
      </Box>
    </>
  );
}

export default HeroSection;
