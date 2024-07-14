import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const CustomerReviews = () => (
  <Box bg="gray.900" color="white" py={20} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={8}>Customer Reviews</Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
      <Box textAlign="center">
        <Text fontSize="xl" mb={2}>Daniel Faulkner</Text>
        <Text>Professional service...</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="xl" mb={2}>Jayson McCabe</Text>
        <Text>Great experience...</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="xl" mb={2}>Michael Good</Text>
        <Text>Best broker...</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default CustomerReviews;
