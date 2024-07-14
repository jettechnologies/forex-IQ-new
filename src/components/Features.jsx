import { Box, Flex, Text, Image } from '@chakra-ui/react';
import enrollmentIcon from '../assets/icons/enrollment.png';
import paymentIcon from '../assets/icons/payment.png';
import mentorIcon from '../assets/icons/mentor.png';
import builderIcon from '../assets/icons/builder.png';
import reportIcon from '../assets/icons/report.png';
import certificateIcon from '../assets/icons/certificate.png';

const featuresData = [
  { image: enrollmentIcon, text: 'Automation' },
  { image: paymentIcon, text: 'Algorithm' },
  { image: mentorIcon, text: 'Risk management' },
  { image: builderIcon, text: 'Real-time' },
  { image: reportIcon, text: 'Backtesting' },
  { image: certificateIcon, text: 'Customization' }
];

const Features = () => {
  return (
    <Box bg="#0e1113" py={4} px={{ base: 4, md: 8 }}>
      <Flex wrap="wrap" justify="center" gap={4}>
        {featuresData.map((feature, index) => (
          <Flex
            key={index}
            flexDirection={"column"}
            align={"center"}
            p={4}
            borderRadius="md"
            textAlign="center"
            flexBasis={{ base: 'calc(50% - 1rem)', xl: 'calc(16.66% - 1rem)' }}
            maxWidth={{ base: 'calc(50% - 1rem)', xl: 'calc(16.66% - 1rem)' }}
          >
            <Box mb={2}>
              <Image src={feature.image} alt={`Feature ${index + 1}`} loading="lazy" />
            </Box>
            <Text as="h4" fontSize="lg" color="#fff">
              {feature.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Features;
