import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';

const AccountTypes = () => (
  <Box bg="gray.900" color="white" py={20} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={8}>Account Types</Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
      <Box textAlign="center" borderWidth={1} borderRadius="md" p={4}>
        <Heading as="h3" size="lg" mb={2}>Basic</Heading>
        <Text mb={2}>$1000</Text>
        <Button colorScheme="red">Start Trading</Button>
      </Box>
      <Box textAlign="center" borderWidth={1} borderRadius="md" p={4}>
        <Heading as="h3" size="lg" mb={2}>Gold</Heading>
        <Text mb={2}>$10,000</Text>
        <Button colorScheme="red">Start Trading</Button>
      </Box>
      <Box textAlign="center" borderWidth={1} borderRadius="md" p={4}>
        <Heading as="h3" size="lg" mb={2}>Platinum</Heading>
        <Text mb={2}>$500,000</Text>
        <Button colorScheme="red">Start Trading</Button>
      </Box>
    </SimpleGrid>
  </Box>
);

export default AccountTypes;
