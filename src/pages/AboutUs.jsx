import { useState } from 'react';
import { Box, Heading, Text, Collapse, Flex, IconButton, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import banner from '../assets/aboutUs_2.jpg';
import sideImg from "../assets/3.png"; // Adjust the import path according to your project structure
import Banner from '../components/Banner';

const AboutUs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
  };

  const items = [
    {
      header: 'State-of-the-Art Algorithms',
      content: 'Forex IQ employs cutting-edge algorithms that have been rigorously tested and optimized for the Indian markets. Our algorithms are designed to help you make data-driven, informed trading decisions.',
    },
    {
      header: 'User-Friendly Interface',
      content: 'Our intuitive user interface makes algorithmic trading accessible to all. You do not need to be a tech wizard to use our platform. It is designed to be user-friendly, ensuring a seamless and efficient trading experience.',
    },
    {
      header: 'Robust Backtesting',
      content: 'Test your trading strategies rigorously with our powerful backtesting tools. You can gain insights into how your strategies would have performed historically, helping you refine and optimize your trading approach.',
    },
    {
      header: 'Real-Time Data',
      content: 'Stay on top of the markets with real-time data and analytics. Our platform provides up-to-the-minute information to ensure that you do not miss out on trading opportunities.',
    },
    {
      header: 'Risk Management',
      content: 'Protect your capital with our built-in risk management tools. Forex IQ empowers you to set risk parameters to minimize potential losses and safeguard your investments.',
    },
    {
      header: 'Dedicated Support',
      content: 'Our team of experts is here to provide you with top-notch support. Whether you are a beginner or an experienced trader, we are ready to assist you in making the most of our platform.',
    },
    {
      header: 'Community',
      content: 'Join the Forex IQ community to connect with like-minded traders and share insights, tips, and strategies. Learn from the experiences of others and stay informed about market trends.',
    },
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <Box color="white" bg="#191b20">
      <Banner 
        title="About Us"
        subtitle="Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Foreign Markets!"
        height="100vh" 
        banner={banner}
      />
      <Box px={{ base: 10, md: 20 }} py={10}>
        <motion.div initial="hidden" whileInView="visible" variants={contentVariants} viewport={{ once: true }}>
          <Flex direction="column" align="flex-start">
            <Box flex="1" pr={{ base: 0, md: 8 }}>
              <Heading as="h2" size="xl" mb={4} textTransform="capitalize">
                Who we are
              </Heading>
              <Text fontSize="lg">
                Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!
              </Text>
              <Text fontSize="lg" mt={4}>
                At Forex IQ, we empower traders, investors, and financial enthusiasts to navigate the complex world of the Indian financial markets with confidence and precision. Our cutting-edge algorithmic trading software is designed to revolutionize the way you engage with the stock markets, providing you with a powerful arsenal of tools to enhance your trading experience.
              </Text>
              <Image 
                src={sideImg} 
                alt="side Image placeholder" 
                float={{ base: 'none', lg: 'right' }} 
                ml={{ base: 0, md: 4 }} 
                my = {6}
                width={{ base: '300px', md: '500px' }} 
                height={{ base: '200px', md: '400px' }}
                display={{ base: 'none', md: 'block' }}
              />
              <Heading as="h3" size="lg" mt={10}>
                Our Vision
              </Heading>
              <Text fontSize="lg">
                Our vision at Forex IQ is to democratize algorithmic trading, making it accessible to both seasoned professionals and aspiring traders in the Indian markets. We believe that technology should level the playing field, and with our platform, we aim to do just that.
              </Text>
            </Box>
          </Flex>
        </motion.div>
        <Image 
          src={sideImg}
          alt="side image placeholder" 
          width="300px" 
          height="200px"
          mx="auto"
          my={8}
          display={{ base: 'block', md: 'none' }}
        />
        <motion.div initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true }}>
          <Box>
            <Heading as="h3" size="lg" mb={10}>
              Why Choose Forex IQ?
            </Heading>
            <Flex flexWrap="wrap" justify="space-between">
              {items.map((item, index) => (
                <Box 
                  key={index} 
                  p={4} 
                  border="1px solid" 
                  borderColor="gray.600" 
                  borderRadius="md" 
                  bg="#0e1113" 
                  width={{ base: "100%", md: "calc(50% - 1rem)" }} 
                  mb={4} 
                  // height="200px" 
                  overflowY="auto"
                > 
                  <Box onClick={() => toggleItem(index)} cursor="pointer" display="flex" alignItems="center" justifyContent="space-between">
                    <Heading size="md" color="white">{item.header}</Heading>
                    <IconButton
                      aria-label={openItems[index] ? "Collapse" : "Expand"}
                      icon={openItems[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
                      onClick={() => toggleItem(index)}
                      variant="ghost"
                      color="white"
                    />
                  </Box>
                  <Collapse in={openItems[index]} animateOpacity>
                    <Box mt={2}>
                      <Text fontSize="lg" pl={4} color="white">{item.content}</Text>
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Flex>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutUs;
