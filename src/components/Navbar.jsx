import { useState, useEffect } from 'react';
import { Box, Flex, Button, IconButton, useBreakpointValue, keyframes, Image, Text, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, useAnimation } from 'framer-motion';
import Logo from "../assets/logo_2.png";

const Navbar = () => {
  // Keyframes for glowing border effect
  const glow = keyframes`
    0% { box-shadow: 0 0 5px #29ce56; }
    50% { box-shadow: 0 0 10px green; }
    100% { box-shadow: 0 0 5px #1b6e4e; }
  `;

  // Responsive width for buttons
  const buttonWidth = useBreakpointValue({ base: "100%", md: "8rem" });

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for header visibility
  const [isFixed, setIsFixed] = useState(false);

  const controls = useAnimation();

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight * 0.15; // 15% of the viewport height

      if (scrollTop > triggerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFixed) {
      controls.start({
        opacity: 1,
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: "translateX(-40%)",
        width: "60%",
        zIndex: 100,
        transition: { duration: 0.3 },
      });
    } else {
      controls.start({
        opacity: 0,
        position: 'relative',
        width: '100%',
        transition: { duration: 0.3 },
      });
    }
  }, [isFixed, controls]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Initial Navbar */}
      <Box
        // bg="#0e1113"
        bg = "#000401"
        color="white"
        px={{ base: "2rem", md: "4rem" }}
        h="4rem"
        width="100%"
        position={{ base: 'fixed', lg: 'relative' }}
        top={0}
        zIndex={10}
      >
        <Flex h="100%" alignItems="center" justifyContent="space-between" py={4}>
          <Link className='noSelect' to="/" style={{ display: 'flex', alignItems: 'center' }} _focus={{ outline: "none" }} _active={{ outline: "none" }}>
            <Box height={"4rem"} position = "relative">
              <Image src={Logo} alt="Logo" h="100%" w="100%" objectFit="contain" loading="lazy" />
                <Heading 
                  color = "#29ce56"
                  display= "block" 
                  fontSize= {{base:"xs", md: "sm"}} 
                  position = "absolute" 
                  bottom="0"
                  left = {{base:"0.85rem", md: "0.65rem"}}
                >
                  TheForexIQ
                </Heading>
            </Box>
            {/* <Heading display= {{base:"none", md: "inline-block"}} fontSize={{sm: "lg", md:"2xl"}}>TheForexIQ</Heading> */}
          </Link>
          <Flex display={{ base: "none", lg: "flex" }} alignItems="center" gap="2rem" justifyContent="space-between" width="65vw">
          <Box display={{ base: "none", lg: "flex" }} gap="1.5rem" justifyContent="space-around" rounded="lg" flex={1} px={2} border="1px solid #4f5150">
            <Link
              as={RouterLink}
              to="/"
              px="0.5rem"
              py="1rem"
              _hover={{ color: "#29ce56" }}
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
              fontFamily="'Rajdhani', sans-serif"
              className="noSelect"
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/about-us"
              px="0.5rem"
              py="1rem"
              _hover={{ color: "#29ce56" }}
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
              fontFamily="'Rajdhani', sans-serif"
              className="noSelect"
            >
              About Us
            </Link>
            <Link
              as={RouterLink}
              to="/contact-us"
              px="0.5rem"
              py="1rem"
              _hover={{ color: "#29ce56" }}
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
              fontFamily="'Rajdhani', sans-serif"
              className="noSelect"
            >
              Contact Us
            </Link>
            </Box>
            <Box>
              <Button
                variant="outline"
                border="1px solid"
                borderColor="#4f5150"
                colorScheme="#1b6e4e"
                mr={4}
                bg="transparent"
                animation={`${glow} 2s infinite`}
                width={buttonWidth}
                my={2}
              >
                <Text fontSize="md">Login</Text>
              </Button>
              <Button
                bg="#1b6e4e"
                color="white"
                width={buttonWidth}
                my={2}
                _hover={{ bg: "#29ce56 " }}
              >
                <Text fontSize="md">Sign Up</Text>
              </Button>
            </Box>
          </Flex>
          <IconButton
            aria-label="Toggle Menu"
            backgroundColor="#0e1113"
            _focus={{ outline: "none", backgroundColor: 'transparent' }}
            color="#f4f4f4"
            icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "flex", lg: "none" }}
            onClick={toggleMobileMenu}
          />
        </Flex>
        {isMobileMenuOpen && (
          <Box
            width="100%"
            display={{ base: "block", lg: "none" }}
            bg="#1c1d20"
            zIndex={999}
            color="#f4f4f4"
            p={4}
            position="absolute"
            top="4rem"
            left="0"
          >
            <Flex direction="column" rowGap={4}>
              <Link className='noSelect' to="/" style={{ padding: '0.5rem 1rem' }} onClick={toggleMobileMenu} _hover={{ color: "#29ce56 " }} _focus={{ outline: "none" }} _active={{ outline: "none" }} fontFamily="'Rajdhani', sans-serif">Home</Link>
              <Link className='noSelect' to="/about-us" style={{ padding: '0.5rem 1rem' }} onClick={toggleMobileMenu} _hover={{ color: "#29ce56 " }} _focus={{ outline: "none" }} _active={{ outline: "none" }} fontFamily="'Rajdhani', sans-serif">About Us</Link>
              <Link className='noSelect' to="/contact-us" style={{ padding: '0.5rem 1rem' }} onClick={toggleMobileMenu} _hover={{ color: "#29ce56 " }} _focus={{ outline: "none" }} _active={{ outline: "none" }} fontFamily="'Rajdhani', sans-serif">Contact Us</Link>
            </Flex>
            <Flex mt={10} columnGap="2rem" rowGap={4} flexDirection={{ base: "column", md: "row" }}>
              <Button
                variant="outline"
                border="1px solid"
                borderColor="#4f5150"
                colorScheme="#1b6e4e"
                mr={4}
                bg="transparent"
                animation={`${glow} 2s infinite`}
                width={{ base: "100%", md: "calc(50% - 2rem)" }}
                onClick={toggleMobileMenu}
              >
                <Text fontSize="md">Login</Text>
              </Button>
              <Button
                bg="#1b6e4e"
                color="white"
                width={{ base: "100%", md: "calc(50% - 2rem)" }}
                _hover={{ bg: "#29ce56"}}
                onClick={toggleMobileMenu}
              >
                <Text fontSize="md">Sign Up</Text>
              </Button>
            </Flex>
          </Box>
        )}
      </Box>

      {/* Fixed Navbar for Desktop */}
      {isDesktop && (
        <motion.div
          animate={controls}
          initial={{ position: 'relative', width: '100%' }}
          style={{ display: isFixed ? 'block' : 'none', opacity: 0 }}
        >
          <Box
            // bg="#0e1113"
            bg = "#000401"
            color="white"
            px="2rem"
            h="4rem"
            position="fixed"
            top={0}
            rounded="lg"
            zIndex={100}
            border="1px solid #4f5150"
          >
            <Flex h="100%" alignItems="center" justifyContent="space-between" gap={10} py={4}>
              <Link className='noSelect' to="/" style={{ display: 'flex', alignItems: 'center' }} _focus={{ outline: "none" }} _active={{ outline: "none" }}>
                <Image src={Logo} alt="Logo" height="4rem" />
              </Link>
              <Flex display={{ base: "none", lg: "block" }}>
                <Box display={{ base: "none", lg: "flex" }} gap="1.5rem" flex={1} px={2} py={2}>
                  {/* <Link className='noSelect' to="/" style={{ padding: '0.5rem 1rem' }} _focus={{ outline: "none" }} _hover={{ color: "#29ce56 " }} _active={{ outline: "none" }} fontFamily="'Rajdhani', sans-serif"><Text fontSize="md">Home</Text></Link>
                  <Link className='noSelect' to="/about-us" style={{ padding: '0.5rem 1rem' }} _focus={{ outline: "none" }} _hover={{ color: "#29ce56 " }} _active={{ outline: "none" }} fontFamily="'Rajdhani', sans-serif"><Text fontSize="md">About Us</Text></Link>
                  <Link className='noSelect' to="/contact-us" style={{ padding: '0.5rem 1rem' }} _focus={{ outline: "none" }} _hover={{ color: "#29ce56 " }} _active={{ outline: "none" }} fontFamily="'Rajdhani', sans-serif"><Text fontSize="md">Contact Us</Text></Link> */}
                  <Link
                    as={RouterLink}
                    to="/"
                    px="0.5rem"
                    py="1rem"
                    _hover={{ color: "#29ce56" }}
                    _focus={{ outline: "none" }}
                    _active={{ outline: "none" }}
                    fontFamily="'Rajdhani', sans-serif"
                    className="noSelect"
                  >
                    Home
                  </Link>
                  <Link
                    as={RouterLink}
                    to="/about-us"
                    px="0.5rem"
                    py="1rem"
                    _hover={{ color: "#29ce56" }}
                    _focus={{ outline: "none" }}
                    _active={{ outline: "none" }}
                    fontFamily="'Rajdhani', sans-serif"
                    className="noSelect"
                  >
                    About Us
                  </Link>
                  <Link
                    as={RouterLink}
                    to="/contact-us"
                    px="0.5rem"
                    py="1rem"
                    _hover={{ color: "#29ce56" }}
                    _focus={{ outline: "none" }}
                    _active={{ outline: "none" }}
                    fontFamily="'Rajdhani', sans-serif"
                    className="noSelect"
                  >
                    Contact Us
                  </Link>
                </Box>
              </Flex>
              <Button
                bg="#1b6e4e"
                color="white"
                width={buttonWidth}
                my={2}
                _hover={{ bg: "#29ce56" }}
              >
                <Text fontSize="md">Sign Up</Text>
              </Button>
            </Flex>
          </Box>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
