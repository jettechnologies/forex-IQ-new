import { useState, useEffect } from 'react';
import { Box, Flex, Button, Link, IconButton, useBreakpointValue, keyframes, Image, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, useAnimation } from 'framer-motion';
import Logo from "../assets/logo.png";

const Navbar = () => {
  // Keyframes for glowing border effect
  const glow = keyframes`
    0% { box-shadow: 0 0 5px #007377; }
    50% { box-shadow: 0 0 10px blue; }
    100% { box-shadow: 0 0 5px #001b3d; }
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
        transform: 'translateX(-50%)',
        width: '60%',
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
        bg="#0e1113"
        color="white"
        px={{base: "2rem", md: "4rem"}}
        h="4rem"
        width="100%"
        position={{ base: 'fixed', lg: 'relative' }}
        top={0}
        zIndex={10}
      >
        <Flex h="100%" alignItems="center" justifyContent="space-between" py={4}>
          <Box display={"flex"} alignItems={"center"}>
            <Image src={Logo} alt="Logo" height="4rem" loading='lazy'/>
            <Text display={{base: "none", md: "inline-block"}} fontSize="2xl" fontWeight="bold">TheforexIQ</Text>
          </Box>
          <Flex display={{ base: "none", lg: "flex" }} alignItems="center" gap={"2rem"} justifyContent="space-between" width="65vw">
            <Box display={{ base: "none", lg: "flex" }} gap={"1.5rem"} flex={1} px={2} py={2}>
              <Link href="/" px={2} py={2} mr={4}>Home</Link>
              <Link href="/#about-us" px={2} py={2} mr={4}>About Us</Link>
              <Link href="/#features" display="block" py={2}>Features</Link>
              <Link href="/#contact-us" px={2} py={2}>Contact Us</Link>
            </Box>
            <Box>
              <Button
                variant="outline"
                border="1px solid"
                borderColor="#46484b"
                colorScheme="#007377"
                mr={4}
                bg="transparent"
                animation={`${glow} 2s infinite`}
                width={buttonWidth}
                my={2}
              >
                Login
              </Button>
              <Button
                bg="#011b3d"
                color="white"
                width={buttonWidth}
                my={2}
                _hover={{ bg: "#011b3d" }}
              >
                Sign Up
              </Button>
            </Box>
          </Flex>
          <IconButton
            aria-label="Toggle Menu"
            icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "flex", lg: "none" }}
            onClick={toggleMobileMenu}
          />
        </Flex>
        {isMobileMenuOpen && (
          <Box
            width="100%"
            display={{ base: "block", lg: "none" }}
            bg="black"
            zIndex={999}
            color="#f4f4f4"
            p={4}
            position="absolute"
            top="4rem"
            left="0"
          >
            <Link href="/" display="block" py={2}>Home</Link>
            <Link href="/#about-us" display="block" py={2}>About Us</Link>
            <Link href="/#features" display="block" py={2}>Features</Link>
            <Link href="/#contact-us" display="block" py={2}>Contact Us</Link>
            <Flex gap={"2rem"}>
            <Button
                variant="outline"
                border="1px solid"
                borderColor="#46484b"
                colorScheme="#007377"
                mr={4}
                bg="transparent"
                animation={`${glow} 2s infinite`}
                width={buttonWidth}
                my={2}
              >
                Login
              </Button>
              <Button
                bg="#011b3d"
                color="white"
                width={buttonWidth}
                my={2}
                _hover={{ bg: "#011b3d" }}
              >
                Sign Up
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
            bg="#0e1113"
            color="white"
            px="2rem"
            h="4rem"
            position="fixed"
            top={0}
            rounded="md"
            zIndex={100}
          >
            <Flex h="100%" alignItems="center" justifyContent="space-between" gap={10} py={4}>
              <Box display={"flex"} alignItems={"center"}>
                <Image src={Logo} alt="Logo" height="4rem" />
              </Box>
              <Flex display={{ base: "none", lg: "block" }}>
                <Box display={{ base: "none", lg: "flex" }} gap={"1.5rem"} flex={1} px={2} py={2}>
                  <Link href="/" px={2} py={2} mr={4}>Home</Link>
                  <Link href="/#about-us" px={2} py={2} mr={4}>About Us</Link>
                  <Link href="/#features" display="block" py={2}>Features</Link>
                  <Link href="/#contact-us" px={2} py={2}>Contact Us</Link>
                </Box>
              </Flex>
              <Button
                bg="#011b3d"
                color="white"
                width={buttonWidth}
                my={2}
                _hover={{ bg: "#011b3d" }}
              >
                Sign Up
              </Button>
            </Flex>
          </Box>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
