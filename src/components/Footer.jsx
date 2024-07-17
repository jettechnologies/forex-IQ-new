import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaFacebookF, FaDiscord, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import logo from '../assets/logo_2.png';

const Footer = () => {
  const textColor = useColorModeValue('gray.500', 'gray.400');

  // bg="#0e1113"
  return (
    <Box as="footer"  bg = "#000401"  py={6}>
      <Container maxW="7xl" px={4}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" alignItems="center">
          <Box mb={{ base: 6, md: 0 }} >
            <Link href = "/">
              <HStack spacing={3} alignItems="center">
                <Image src={logo} h="4rem" alt="ForexIQ Logo"/>
                <Heading size="lg" fontWeight="bold" color="white">
                  TheForexIQ
                </Heading>
              </HStack>
            </Link>
          </Box>
          <Flex width={{ base: '100%', md: '40%' }} justify="space-between" flexWrap="wrap" gap={8}>
            <Box>
              <Heading size="sm" mb={6} textTransform="uppercase" color="white">
                Main nav
              </Heading>
              <Stack spacing={4} color={textColor} fontWeight="medium">
                <Link className='noSelect' href="/" _hover={{ textDecoration: 'underline' }}>
                  Home
                </Link>
                <Link className='noSelect' href="/about-us" _hover={{ textDecoration: 'underline' }}>
                  About Us
                </Link>
                <Link className='noSelect' href="/contact-us" _hover={{ textDecoration: 'underline' }}>
                  Contact Us
                </Link>
              </Stack>
            </Box>
            <Box>
              <Heading size="sm" mb={6} textTransform="uppercase" color="white">
                Legal
              </Heading>
              <Stack spacing={4} color={textColor} fontWeight="medium">
                <Link className='noSelect' href="/privacy-policy" _hover={{ textDecoration: 'underline' }} _focus={{ outline: 'none' }} focus = {{outline: 'none'}}>
                  Privacy Policy
                </Link>
                <Link className='noSelect' href="/refund-policy" _hover={{ textDecoration: 'underline' }}>
                  Refund Policy
                </Link>
                <Link className='noSelect' href="/terms-and-condition" _hover={{ textDecoration: 'underline' }}>
                  Terms & Conditions
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Flex>
        <Box mt={8} borderTopWidth={1} borderColor={useColorModeValue('gray.200', 'gray.700')} pt={6}>
          <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align="center">
            <Text textAlign="center" color={textColor} fontSize="sm">
              © 2024{' '}
              <Link href="https://flowbite.com/" isExternal _hover={{ textDecoration: 'underline' }}>
                TheForexIQ
              </Link>
              . All Rights Reserved.
            </Text>
            <HStack mt={{ base: 4, sm: 0 }} spacing={5}>
              <Link href="#" aria-label="Facebook page" color={textColor} _hover={{ color: 'gray.900' }}>
                <FaFacebookF />
              </Link>
              <Link href="#" aria-label="Discord community" color={textColor} _hover={{ color: 'gray.900' }}>
                <FaDiscord />
              </Link>
              <Link href="#" aria-label="Twitter page" color={textColor} _hover={{ color: 'gray.900' }}>
                <FaTwitter />
              </Link>
              <Link href="#" aria-label="GitHub account" color={textColor} _hover={{ color: 'gray.900' }}>
                <FaGithub />
              </Link>
              <Link href="#" aria-label="Dribbble account" color={textColor} _hover={{ color: 'gray.900' }}>
                <FaDribbble />
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
