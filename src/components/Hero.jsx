// import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import heroImg from "../assets/charts.jpg";

// const HeroSection = () => (
//   <Box
//     position="relative"
//     bgImage={`url(${heroImg})`}
//     bgPosition="center"
//     bgSize="cover"
//     color="white"
//     px={{ base: 4, md: 16 }}
//     py={20}
//     height="calc(100dvh - 4rem)"
//   >
//     {/* Overlay */}
//     <Box
//       position="absolute"
//       top={0}
//       left={0}
//       right={0}
//       bottom={0}
//       bg="#0e1113"
//       opacity={0.8}
//       zIndex={1}
//     />

//     {/* Content */}
//     <Flex
//       direction={{ base: 'column', md: 'row' }}
//       align="center"
//       justifyContent={{base: "center", md:"space-between"}}
//       h="100%"
//       position="relative"
//       zIndex={2}
//       textAlign={{ base: 'center', md: 'left' }}
//       border = "2px solid blue"
//     >
//       <Box  border = "2px solid green" width = "100%" mb={{ base: 8, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
//         <Heading as="h1" size="2xl" mb={4}>Unleash the power of AI Trading</Heading>
//         <Text
//           fontSize={{ base: "md", md: "lg", lg: "xl" }}
//           mb={10}
//           whiteSpace="nowrap"
//           overflow="hidden"
//           borderRight="0.15em solid white"
//         >
//           THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING
//         </Text>
//         <Button
//           px={{ md: "4rem" }}
//           bg="#011b3d"
//           color="white"
//           _hover={{ bg: "#00284d" }}
//           size="lg"
//           width={{ base: "100%", md: "auto" }}
//           rounded="md"
//         >
//           Start Trading Now
//         </Button>
//       </Box>
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}
//       >
//         {/* Optional Image or any other component you want to place here */}
//       </motion.div>
//     </Flex>
//   </Box>
// );

// export default HeroSection;

import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import heroImg from "../assets/charts.jpg";

const HeroSection = () => (
  <Box
    position="relative"
    bgImage={`url(${heroImg})`}
    bgPosition="center"
    bgSize="cover"
    color="white"
    px={{ base: 4, md: 16 }}
    py={20}
    height="calc(100dvh - 4rem)"
  >
    {/* Overlay */}
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="#0e1113"
      opacity={0.8}
      zIndex={1}
    />

    {/* Content */}
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={{base: "center", md:"space-between"}}
      h="100%"
      position="relative"
      zIndex={2}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <Box width="fit" mb={{ base: 8, md: 0 }}>
        <Heading as="h1" size="2xl" mb={4}>Unleash the power of AI Trading</Heading>
        <Text
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          mb={10}
          borderRight="0.15em solid white"
        >
          THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING
        </Text>
        <Button
          px={{ md: "4rem" }}
          bg="#011b3d"
          color="white"
          _hover={{ bg: "#00284d" }}
          size="lg"
          width={{ base: "100%", md: "auto" }}
          rounded="md"
        >
          Start Trading Now
        </Button>
      </Box>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}
      >
        {/* Optional Image or any other component you want to place here */}
      </motion.div>
    </Flex>
  </Box>
);

export default HeroSection;
