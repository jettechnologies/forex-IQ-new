import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const WhyChooseUs = () => (
  <Box bg="gray.900" color="white" py={20} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={8}>Why Choose Us?</Heading>
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>120</Text>
        <Text>Trading Products</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>$0.00</Text>
        <Text>Account Keeping Fees</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>200:1</Text>
        <Text>Leverage</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>MT4</Text>
        <Text>Trading Platforms</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default WhyChooseUs;
