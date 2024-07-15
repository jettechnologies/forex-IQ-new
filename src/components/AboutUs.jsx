import { Box, Grid, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
import aboutUsImage from '../assets/aboutUs_2.jpg'; // Adjust the import path according to your project structure

const AboutUs = () => {
//   const showImage = useBreakpointValue({ base: false, lg: true });

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <Box id='about-us' color="white" py={20} px={10} bg="#191b20">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10} alignItems={"center"}>
          <motion.div initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true }}>
            <Box position="sticky" top="0" width="100%" height={{ base: "300px", lg: "auto" }} >
              <Image
                loading='lazy'
                src={aboutUsImage}
                alt="About Us"
                borderRadius="md"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={contentVariants} viewport={{ once: true }}>
          <VStack spacing={6} align="flex-start">
            <Heading as="h2" size="xl" mb={4} textTransform={"capitalize"}>
              Who we are
            </Heading>
            <Text fontSize="lg">
              Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the International Markets!
            </Text>
            <Text fontSize="lg">
              At Forex IQ, we empower traders, investors, and financial enthusiasts to navigate the complex world of the financial markets with confidence and precision. Our cutting-edge algorithmic trading software is designed to revolutionize the way you engage with the stock markets, providing you with a powerful arsenal of tools to enhance your trading experience.
            </Text>
            {/* <Link href="/about-us" px= {4} py={2} rounded={"md"} backgroundColor="#011b3d" color = "#fff" display="flex" alignItems="center" mt={6} shadow = {"md"}>
              Read more <Icon as={ArrowForwardIcon} ml={2} />
            </Link> */}
          </VStack>
        </motion.div>
      </Grid>
    </Box>
  );
};

export default AboutUs;
