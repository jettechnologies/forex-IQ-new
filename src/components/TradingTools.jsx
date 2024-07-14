import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const TradingTools = () => (
  <Box bg="gray.800" color="white" py={20} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={8}>Trading Tools</Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>EUR/USD</Text>
        <Text>Buy 1.12</Text>
        <Text>Sell 1.13</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>EUR/CAD</Text>
        <Text>Buy 1.42</Text>
        <Text>Sell 1.43</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>USD/JPY</Text>
        <Text>Buy 110.12</Text>
        <Text>Sell 110.13</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default TradingTools;
