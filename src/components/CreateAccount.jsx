import { Box, Heading, Text, Button } from '@chakra-ui/react';

const CreateAccount = () => (
  <Box bg="gray.800" color="white" py={20} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={8}>Lets create your account</Heading>
    <Text textAlign="center" mb={4}>Complete registration form, add funds, start trading!</Text>
    <Box textAlign="center">
      <Button colorScheme="red">Start Trading</Button>
    </Box>
  </Box>
);

export default CreateAccount;
