import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box bg="gray.900" color="white" py={4}>
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" maxW="1200px" mx="auto">
      <Text>© 2023 Company Name. All rights reserved.</Text>
      <Flex>
        <Link mx={2}>Privacy Policy</Link>
        <Link mx={2}>Terms of Service</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
