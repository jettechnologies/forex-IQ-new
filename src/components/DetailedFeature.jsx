import { useState, useEffect } from 'react';
import { Box, Flex, Text, useMediaQuery, Image, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import vectorOne from "/src/assets/1.png";
import vectorTwo from "/src/assets/7.png";

const features = [
  {
    title: 'AUTOMATION',
    description: 'Automation is also known as algorithmic trading using computer programs to execute trades in financial markets based on predefined criteria.',
  },
  {
    title: 'ALGORITHMS',
    description: 'Explore a wide array of pre-built strategies or develop your own custom algorithms to personalize your trading approach.',
  },
  {
    title: 'RISK MANAGEMENT',
    description: 'Utilize stop-loss, take-profit, and position sizing mechanisms to manage and mitigate risks, ensuring the protection of your investments.',
  },
  {
    title: 'REAL-TIME',
    description: 'Stay current with real-time market data and execute orders promptly, ensuring you make well-informed, timely decisions.',
  },
  {
    title: 'BACKTESTING',
    description: 'Backtesting involves testing trading strategies on historical data to evaluate performance and refine strategies before live trading.',
  },
  {
    title: 'CUSTOMIZATION',
    description: 'Customize your user interface and strategy to align with your trading style, enriching your overall trading experience.',
  },
];

const MotionBox = motion(Box);

const DetailedFeature = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)'); // 48em is equal to 768px
  const [currentGraphic, setCurrentGraphic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGraphic((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const featureAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <Flex direction="column" align="center" p={4} bg="#0e1113" color="#f4f4f4" minH="100vh">
      <Heading as="h2" size="2xl" mb={2} color="white" textAlign="center">
        Unleash the full financial potential with our best features
      </Heading>
      <Text mb={6} color="white" textAlign="center">
        Discover the tools and functionalities designed to enhance your trading experience.
      </Text>
      <Flex
        direction={isLargerThanMD ? 'row' : 'column'}
        wrap="wrap"
        justify="center"
        align="center"
        width="full"
      >
        {isLargerThanMD ? (
          <>
            <Flex flex="1" justify="center" align="center">
              <MotionBox
                key={currentGraphic}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image src={currentGraphic === 0 ? vectorOne : vectorTwo} alt="Vector graphic" />
              </MotionBox>
            </Flex>
            <Flex flex="1" direction="column" justify="center" align="flex-start" p={4}>
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={featureAnimation}
                  p={2}
                >
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    {feature.title}
                  </Text>
                  <Text>{feature.description}</Text>
                </MotionBox>
              ))}
            </Flex>
          </>
        ) : (
          <Flex flex="1" direction="column" justify="center" align="center">
            <Flex flex="1" justify="center" align="center" mb={isLargerThanMD ? 0 : 4}>
              <MotionBox
                key={currentGraphic}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image src={currentGraphic === 0 ? vectorOne : vectorTwo} alt="Vector graphic" />
              </MotionBox>
            </Flex>
            <Box width="100%">
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={featureAnimation}
                  p={4}
                  m={2}
                  borderWidth="1px"
                  borderRadius="lg"
                  maxW="full"
                  textAlign="center"
                  bg="#1a1a1a"
                >
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    {feature.title}
                  </Text>
                  <Text>{feature.description}</Text>
                </MotionBox>
              ))}
            </Box>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default DetailedFeature;