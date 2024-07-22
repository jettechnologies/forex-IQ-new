import { Box, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import automationIcon from '../assets/automation.png';
import algorithmIcon from '../assets/algorithm.png';
import riskIcon from '../assets/risk.png';
import realtimeIcon from '../assets/real_time.png';
import backtestingIcon from '../assets/backtesting.png';
import customizationIcon from '../assets/customization.png';

const featuresData = [
  { image: automationIcon, text: 'Automation' },
  { image: algorithmIcon, text: 'Algorithm' },
  { image: riskIcon, text: 'Risk management' },
  { image: realtimeIcon, text: 'Real-time' },
  { image: backtestingIcon, text: 'Backtesting' },
  { image: customizationIcon, text: 'Customization' }
];

const Features = () => {

  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: true,
  });

  return (
    <Box bg="#0e1113" py={4} px={{ base: 4, md: 8 }}>
      <Flex wrap="wrap" justify="center" gap={4}>
        {featuresData.map((feature, index) => (
          <Flex
            key={index}
            position={"relative"}
            flexDirection={"column"}
            align={"center"}
            p={4}
            borderRadius="md"
            textAlign="center"
            flexBasis={{ base: 'calc(50% - 1rem)', xl: 'calc(16.66% - 1rem)' }}
            maxWidth={{ base: 'calc(50% - 1rem)', xl: 'calc(16.66% - 1rem)' }}
          >
            <Box>
              <Image src={feature.image} alt={`Feature ${index + 1}`} loading="lazy" />
            </Box>
            {isTablet && <Text as="h4" fontSize="lg" color="#fff" position={"absolute"} bottom={{sm: 5, base: "1.45rem", md: "12", xl: "1.75rem", "2xl": "1.9rem"}}>
              {feature.text}
            </Text>}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Features;
