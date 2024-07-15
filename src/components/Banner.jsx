// /* eslint-disable react/prop-types */
// import { Box, Text } from '@chakra-ui/react';
// // import banner from "../assets/charts_2.jpg";

// const Banner = ({ title, subtitle, banner }) => (
//   <Box 
//     mb={4} 
//     position="relative" 
//     height="350px" 
//     background={`url(${banner}) center/cover no-repeat`}
//     _after={{
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       bg: 'rgba(0, 0, 0, 0.5)',
//       zIndex: 1,
//     }}
//   >
//     <Box 
//       position="absolute" 
//       top="50%" 
//       left="50%" 
//       transform="translate(-50%, -50%)" 
//       textAlign="center"
//       color="white"
//       zIndex={2} // Ensure text is above the overlay
//     >
//       <Text fontSize="4xl" fontWeight="bold">{title}</Text>
//       <Text fontSize="xl">{subtitle}</Text>
//     </Box>
//   </Box>
// );

// export default Banner;


import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

// Banner Component
const Banner = () => (
  <Box bg="#0e1113" py={{ base: 8, lg: 16 }} px={4}>
    <Container maxW="screen.md" mx="auto" textAlign="center">
      <Heading as="h1" size="2xl" mb={4} color="white">
        Welcome to Our Contact Page
      </Heading>
      <Text color="gray.400" fontSize={{ base: 'md', sm: 'xl' }}>
        We are here to help you. Please reach out with any questions or concerns.
      </Text>
    </Container>
  </Box>
);

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error: ${errorData.message}`);
      }

      const response = await res.json();
      console.log(response);
      setContactData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.log(err);
      setContactData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="contact-us" backgroundColor="#0e1113" py={{ base: 8, lg: 16 }} px={4} minHeight="100vh">
      <Banner />
      <Container maxW="screen.md" mx="auto">
        <Heading
          as="h2"
          size="2xl"
          mb={4}
          textAlign="center"
          fontWeight="extrabold"
          color="white"
        >
          Contact Us
        </Heading>
        <Text
          mb={{ base: 8, lg: 16 }}
          textAlign="center"
          fontWeight="light"
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize={{ base: 'md', sm: 'xl' }}
        >
          Got a technical issue? Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </Text>
        <Flex direction="column" gap={8}>
          <Flex justifyContent="space-between" direction={{ base: 'column', lg: 'row' }} gap={4}>
            <Box
              bg="#191b20"
              px={8}
              py={3}
              rounded="md"
              display="flex"
              alignItems="center"
              color="white"
            >
              <FaMapMarkerAlt size={20} />
              <Text ml={2}>1234 Street Name, City, Country</Text>
            </Box>
            <Box
              bg="#191b20"
              px={8}
              py={3}
              rounded="md"
              display="flex"
              alignItems="center"
              color="white"
            >
              <FaPhoneAlt size={20} />
              <Text ml={2}>+123 456 7890</Text>
            </Box>
            <Box
              bg="#191b20"
              px={8}
              py={3}
              rounded="md"
              display="flex"
              alignItems="center"
              color="white"
            >
              <FaEnvelope size={20} />
              <Text ml={2}>info@example.com</Text>
            </Box>
          </Flex>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
            <Box flex={1}>
              <form onSubmit={handleFormSubmit}>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel htmlFor="name" color="white">
                      Name
                    </FormLabel>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={contactData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                      _focus={{
                        ring: 'primary.500',
                        borderColor: 'primary.500',
                      }}
                      color="black"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email" color="white">
                      Your Email
                    </FormLabel>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleInputChange}
                      placeholder="name@flowbite.com"
                      required
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                      _focus={{
                        ring: 'primary.500',
                        borderColor: 'primary.500',
                      }}
                      color="black"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="subject" color="white">
                      Subject
                    </FormLabel>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contactData.subject}
                      onChange={handleInputChange}
                      placeholder="Let us know how we can help you"
                      required
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                      _focus={{
                        ring: 'primary.500',
                        borderColor: 'primary.500',
                      }}
                      color="black"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="message" color="white">
                      Your Message
                    </FormLabel>
                    <Textarea
                      id="message"
                      rows={6}
                      name="message"
                      value={contactData.message}
                      onChange={handleInputChange}
                      placeholder="Leave a comment..."
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                      _focus={{
                        ring: 'primary.500',
                        borderColor: 'primary.500',
                      }}
                      color="black"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    height="50px"
                    py={5}
                    px={5}
                    fontSize="md"
                    fontWeight="medium"
                    textAlign="center"
                    color="white"
                    rounded="lg"
                    bg="black"
                    _hover={{ bg: 'dark.800' }}
                    _focus={{ ring: 4, outline: 'none', ringColor: 'primary.300' }}
                  >
                    {loading ? 'Loading..' : 'Send message'}
                  </Button>
                </Stack>
              </form>
            </Box>
            <Box flex={1}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8397886044!2d77.06889969550207!3d28.527582105455467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a52866b891%3A0x6f19f2a760ca234e!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1625834496391!5m2!1sen!2sus"
                width="100%"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
