// import { Box, Flex, Heading, Button, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import heroImg from "../assets/hero_img.png";

// const HeroSection = () => (
//   <Box bg="gray.800" color="white" py={20} px={8}>
//     <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
//       <Box maxW="600px">
//         <Heading as="h1" size="2xl" mb={4}>Make the most of market moves</Heading>
//         <Button colorScheme="red">Start Trading</Button>
//       </Box>
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Image src={heroImg} alt="Trading platform" />
//       </motion.div>
//     </Flex>
//   </Box>
// );

// export default HeroSection;


import { Box, Flex, Heading, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import heroImg from "../assets/charts.jpg";

const HeroSection = () => (
  <Box bg="#191b20" color="white" px={8} maxH={{ md: '100dvh' }}>
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" h="100%">
      <Box maxW="600px" mb={{ base: 8, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
        <Heading as="h1" size="2xl" mb={4}>Make the most of market moves</Heading>
        <Button colorScheme="red">Start Trading</Button>
      </Box>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}
      >
        <Image 
          src={heroImg} 
          alt="Trading platform" 
          width = {"50%"}
          maxH={{ base: '300px', md: '60%' }} 
          objectFit="contain" 
          borderRadius="md"
        />
      </motion.div>
    </Flex>
  </Box>
);

export default HeroSection;
