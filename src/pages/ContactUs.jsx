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
      <Box id="contact-us" bg="#191b20" py={{ base: 20, lg: 16 }} px={4} minHeight="100vh">
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
            color="#f4f4f4"
            fontSize={{ base: 'md', sm: 'xl' }}
          >
            Got a technical issue? Want to send feedback about a beta feature? Need details about our
            Business plan? Let us know.
          </Text>
          <Flex direction="column" gap={8}>
            <Flex width = {{lg: "60%"}} alignSelf = "center" 	justifyContent="space-around" direction={{ base: 'column', md: 'row' }} gap={4}>
              <Box
                width = "fit-content"
                bg="#0e1113"
                px={8}
                py={6}
                rounded="md"
                shadow={"md"}
                display="flex"
                alignItems="center"
                color="white"
              >
                <FaMapMarkerAlt size={20} />
                <Text ml={2}>1234 Street Name, City, Country</Text>
              </Box>
              <Box
                width = "fit-content"
                bg="#0e1113"
                px={8}
                py={6}
                rounded="md"
                shadow={"md"}
                display="flex"
                alignItems="center"
                color="white"
              >
                <FaPhoneAlt size={20} />
                <Text ml={2}>+123 456 7890</Text>
              </Box>
              <Box
                width = "fit-content"
                bg="#0e1113"
                px={8}
                py={6}
                rounded="md"
                shadow={"md"}
                display="flex"
                alignItems="center"
                color="white"
              >
                <FaEnvelope size={20} />
                <Text ml={2}>info@example.com</Text>
              </Box>
            </Flex>
            <Flex mt = {8} direction={{ base: 'column', lg: 'row' }} justify={"center"} gap={8}>
              <Box width = {{lg: "60%"}}>
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
                      mt = {8}
                      fontSize="md"
                      fontWeight="medium"
                      textAlign="center"
                      color="white"
                      rounded="lg"
                      bg="#1b6e4e"
                      _hover={{ bg: '#29ce56' }}
                      _focus={{ ring: 4, outline: 'none', ringColor: '#4f5150' }}
                    >
                      {loading ? 'Loading..' : 'Send message'}
                    </Button>
                  </Stack>
                </form>
              </Box>
              {/* <Box flex={1}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8397886044!2d77.06889969550207!3d28.527582105455467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a52866b891%3A0x6f19f2a760ca234e!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1625834496391!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box> */}
            </Flex>
          </Flex>
        </Container>
      </Box>
    );
  };
  
  export default ContactUs;
  