// // import { useState } from 'react';
// // import { Box, Grid, Heading, Text, VStack, Collapse, ListItem, ListIcon, Image, useBreakpointValue } from '@chakra-ui/react';
// // import { motion } from 'framer-motion';
// // import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
// // import aboutUsImage from '../assets/charts_2.jpg'; // Adjust the import path according to your project structure
// // import Banner from '../components/Banner'; // Adjust the import path according to your project structure
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import { Pagination } from 'swiper';

// // const AboutUs = () => {
// //   const [openItems, setOpenItems] = useState({});
// //   const showImage = useBreakpointValue({ base: false, lg: true });

// //   const toggleItem = (index) => {
// //     setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
// //   };

// //   const items = [
// //     {
// //       header: 'State-of-the-Art Algorithms',
// //       content: 'Forex IQ employs cutting-edge algorithms that have been rigorously tested and optimized for the Indian markets. Our algorithms are designed to help you make data-driven, informed trading decisions.'
// //     },
// //     {
// //       header: 'User-Friendly Interface',
// //       content: 'Our intuitive user interface makes algorithmic trading accessible to all. You do not need to be a tech wizard to use our platform. It is designed to be user-friendly, ensuring a seamless and efficient trading experience.'
// //     },
// //     {
// //       header: 'Robust Backtesting',
// //       content: 'Test your trading strategies rigorously with our powerful backtesting tools. You can gain insights into how your strategies would have performed historically, helping you refine and optimize your trading approach.'
// //     },
// //     {
// //       header: 'Real-Time Data',
// //       content: 'Stay on top of the markets with real-time data and analytics. Our platform provides up-to-the-minute information to ensure that you do not miss out on trading opportunities.'
// //     },
// //     {
// //       header: 'Risk Management',
// //       content: 'Protect your capital with our built-in risk management tools. Forex IQ empowers you to set risk parameters to minimize potential losses and safeguard your investments.'
// //     },
// //     {
// //       header: 'Dedicated Support',
// //       content: 'Our team of experts is here to provide you with top-notch support. Whether you are a beginner or an experienced trader, we are ready to assist you in making the most of our platform.'
// //     },
// //     {
// //       header: 'Community',
// //       content: 'Join the Forex IQ community to connect with like-minded traders and share insights, tips, and strategies. Learn from the experiences of others and stay informed about market trends.'
// //     }
// //   ];

// //   const contentVariants = {
// //     hidden: { opacity: 0, x: -100 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
// //   };

// //   const imageVariants = {
// //     hidden: { opacity: 0, x: 100 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
// //   };

// //   return (
// //     <Box color="white" py={20} px={10} bg="#191b20">
// //       <Banner 
// //         title="About Us"
// //         subtitle="Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!"
// //         banner={aboutUsImage}
// //       />
// //       <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
// //         <motion.div initial="hidden" whileInView="visible" variants={contentVariants} viewport={{ once: true }}>
// //           <VStack spacing={6} align="flex-start">
// //             <Heading as="h2" size="xl" mb={4} textTransform={"capitalize"}>
// //               Who we are
// //             </Heading>
// //             <Text fontSize="lg">
// //               Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!
// //             </Text>
// //             <Text fontSize="lg">
// //               At Forex IQ, we empower traders, investors, and financial enthusiasts to navigate the complex world of the Indian financial markets with confidence and precision. Our cutting-edge algorithmic trading software is designed to revolutionize the way you engage with the stock markets, providing you with a powerful arsenal of tools to enhance your trading experience.
// //             </Text>
// //             <Heading as="h3" size="lg" mt={10}>
// //               Our Vision
// //             </Heading>
// //             <Text fontSize="lg">
// //               Our vision at Forex IQ is to democratize algorithmic trading, making it accessible to both seasoned professionals and aspiring traders in the Indian markets. We believe that technology should level the playing field, and with our platform, we aim to do just that.
// //             </Text>
// //             <Heading as="h3" size="lg" mt={10} bg="#191b20">
// //               Why Choose Forex IQ?
// //             </Heading>
// //             <Swiper
// //               spaceBetween={20}
// //               slidesPerView={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
// //               pagination={{ clickable: true }}
// //               modules={[Pagination]}
// //               className="mySwiper"
// //             >
// //               {items.map((item, index) => (
// //                 <SwiperSlide key={index}>
// //                   <Box p={4} border="1px solid" borderColor="gray.600" borderRadius="md" bg="#0e1113">
// //                     <ListItem onClick={() => toggleItem(index)} cursor="pointer">
// //                       <Text fontSize="lg">
// //                         <b>{item.header}</b> <ListIcon as={openItems[index] ? ChevronUpIcon : ChevronDownIcon} />
// //                       </Text>
// //                     </ListItem>
// //                     <Collapse in={openItems[index]} animateOpacity>
// //                       <Text fontSize="lg" pl={4}>{item.content}</Text>
// //                     </Collapse>
// //                   </Box>
// //                 </SwiperSlide>
// //               ))}
// //             </Swiper>
// //           </VStack>
// //         </motion.div>
// //         {showImage && (
// //           <motion.div initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true }}>
// //             <Box position="sticky" top="0" width="100%" height="100vh">
// //               <Image
// //                 loading='lazy'
// //                 src={aboutUsImage}
// //                 alt="About Us"
// //                 borderRadius="md"
// //                 width="100%"
// //                 height="100%"
// //                 objectFit="cover"
// //               />
// //             </Box>
// //           </motion.div>
// //         )}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default AboutUs;


// // import { useState } from 'react';
// // import { Box, Grid, Heading, Text, VStack, Collapse, Image, useBreakpointValue, Card, CardHeader, CardBody } from '@chakra-ui/react';
// // import { motion } from 'framer-motion';
// // // ChevronUpIcon
// // import { ChevronDownIcon } from '@chakra-ui/icons';
// // import aboutUsImage from '../assets/charts_2.jpg'; // Adjust the import path according to your project structure
// // import Banner from '../components/Banner'; // Adjust the import path according to your project structure
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import SwiperCore, { Navigation } from 'swiper';

// // SwiperCore.use([Navigation]);

// // const AboutUs = () => {
// //   const [openItems, setOpenItems] = useState({});
// //   const showImage = useBreakpointValue({ base: false, lg: true });

// //   const toggleItem = (index) => {
// //     setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
// //   };

// //   const items = [
// //     {
// //       header: 'State-of-the-Art Algorithms',
// //       content: 'Forex IQ employs cutting-edge algorithms that have been rigorously tested and optimized for the Indian markets. Our algorithms are designed to help you make data-driven, informed trading decisions.'
// //     },
// //     {
// //       header: 'User-Friendly Interface',
// //       content: 'Our intuitive user interface makes algorithmic trading accessible to all. You do not need to be a tech wizard to use our platform. It is designed to be user-friendly, ensuring a seamless and efficient trading experience.'
// //     },
// //     {
// //       header: 'Robust Backtesting',
// //       content: 'Test your trading strategies rigorously with our powerful backtesting tools. You can gain insights into how your strategies would have performed historically, helping you refine and optimize your trading approach.'
// //     },
// //     {
// //       header: 'Real-Time Data',
// //       content: 'Stay on top of the markets with real-time data and analytics. Our platform provides up-to-the-minute information to ensure that you do not miss out on trading opportunities.'
// //     },
// //     {
// //       header: 'Risk Management',
// //       content: 'Protect your capital with our built-in risk management tools. Forex IQ empowers you to set risk parameters to minimize potential losses and safeguard your investments.'
// //     },
// //     {
// //       header: 'Dedicated Support',
// //       content: 'Our team of experts is here to provide you with top-notch support. Whether you are a beginner or an experienced trader, we are ready to assist you in making the most of our platform.'
// //     },
// //     {
// //       header: 'Community',
// //       content: 'Join the Forex IQ community to connect with like-minded traders and share insights, tips, and strategies. Learn from the experiences of others and stay informed about market trends.'
// //     }
// //   ];

// //   const contentVariants = {
// //     hidden: { opacity: 0, x: -100 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
// //   };

// //   const imageVariants = {
// //     hidden: { opacity: 0, x: 100 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
// //   };

// //   return (
// //     <Box color="white" py={20} px={10} bg="#0e1113">
// //       <Banner 
// //         title="About Us"
// //         subtitle="Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!"
// //         banner={aboutUsImage}
// //         height="100vh" // Make the banner take the full height of its area
// //       />
// //       <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
// //         <motion.div initial="hidden" whileInView="visible" variants={contentVariants} viewport={{ once: true }}>
// //           <VStack spacing={6} align="flex-start">
// //             <Heading as="h2" size="xl" mb={4} textTransform={"capitalize"}>
// //               Who we are
// //             </Heading>
// //             <Text fontSize="lg">
// //               Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!
// //             </Text>
// //             <Text fontSize="lg">
// //               At Forex IQ, we empower traders, investors, and financial enthusiasts to navigate the complex world of the Indian financial markets with confidence and precision. Our cutting-edge algorithmic trading software is designed to revolutionize the way you engage with the stock markets, providing you with a powerful arsenal of tools to enhance your trading experience.
// //             </Text>
// //             <Heading as="h3" size="lg" mt={10}>
// //               Our Vision
// //             </Heading>
// //             <Text fontSize="lg">
// //               Our vision at Forex IQ is to democratize algorithmic trading, making it accessible to both seasoned professionals and aspiring traders in the Indian markets. We believe that technology should level the playing field, and with our platform, we aim to do just that.
// //             </Text>
// //             <Heading as="h3" size="lg" mt={10} bg="#0e1113">
// //               Why Choose Forex IQ?
// //             </Heading>
// //             <Swiper
// //               spaceBetween={20}
// //               slidesPerView={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
// //               className="mySwiper"
// //             >
// //               {items.map((item, index) => (
// //                 <SwiperSlide key={index}>
// //                   <Card p={4} border="1px solid" borderColor="gray.600" borderRadius="md" bg="#0e1113">
// //                     <CardHeader onClick={() => toggleItem(index)} cursor="pointer">
// //                       <Heading size="md" color="#008080">{item.header}</Heading>
// //                       <Box ml="auto">
// //                         <ChevronDownIcon
// //                           h={6}
// //                           w={6}
// //                           transform={openItems[index] ? 'rotate(180deg)' : ''}
// //                           transition="transform 0.2s"
// //                         />
// //                       </Box>
// //                     </CardHeader>
// //                     <Collapse in={openItems[index]} animateOpacity>
// //                       <CardBody>
// //                         <Text fontSize="lg" pl={4}>{item.content}</Text>
// //                       </CardBody>
// //                     </Collapse>
// //                   </Card>
// //                 </SwiperSlide>
// //               ))}
// //             </Swiper>
// //           </VStack>
// //         </motion.div>
// //         {showImage && (
// //           <motion.div initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true }}>
// //             <Box position="sticky" top="0" width="100%" height="100vh">
// //               <Image
// //                 loading='lazy'
// //                 src={aboutUsImage}
// //                 alt="About Us"
// //                 borderRadius="md"
// //                 width="100%"
// //                 height="100%"
// //                 objectFit="cover"
// //               />
// //             </Box>
// //           </motion.div>
// //         )}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default AboutUs;


// import { useState } from 'react';
// import { Box, Grid, Heading, Text, VStack, Collapse, Image, useBreakpointValue, Card, CardHeader, CardBody, IconButton } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
// import aboutUsImage from '../assets/charts_2.jpg'; // Adjust the import path according to your project structure
// import Banner from '../components/Banner'; // Adjust the import path according to your project structure
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import SwiperCore, { Navigation } from 'swiper';

// SwiperCore.use([Navigation]);

// const AboutUs = () => {
//   const [openItems, setOpenItems] = useState({});
//   const showImage = useBreakpointValue({ base: false, lg: true });

//   const toggleItem = (index) => {
//     setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const items = [
//     {
//       header: 'State-of-the-Art Algorithms',
//       content: 'Forex IQ employs cutting-edge algorithms that have been rigorously tested and optimized for the Indian markets. Our algorithms are designed to help you make data-driven, informed trading decisions.'
//     },
//     {
//       header: 'User-Friendly Interface',
//       content: 'Our intuitive user interface makes algorithmic trading accessible to all. You do not need to be a tech wizard to use our platform. It is designed to be user-friendly, ensuring a seamless and efficient trading experience.'
//     },
//     {
//       header: 'Robust Backtesting',
//       content: 'Test your trading strategies rigorously with our powerful backtesting tools. You can gain insights into how your strategies would have performed historically, helping you refine and optimize your trading approach.'
//     },
//     {
//       header: 'Real-Time Data',
//       content: 'Stay on top of the markets with real-time data and analytics. Our platform provides up-to-the-minute information to ensure that you do not miss out on trading opportunities.'
//     },
//     {
//       header: 'Risk Management',
//       content: 'Protect your capital with our built-in risk management tools. Forex IQ empowers you to set risk parameters to minimize potential losses and safeguard your investments.'
//     },
//     {
//       header: 'Dedicated Support',
//       content: 'Our team of experts is here to provide you with top-notch support. Whether you are a beginner or an experienced trader, we are ready to assist you in making the most of our platform.'
//     },
//     {
//       header: 'Community',
//       content: 'Join the Forex IQ community to connect with like-minded traders and share insights, tips, and strategies. Learn from the experiences of others and stay informed about market trends.'
//     }
//   ];

//   const contentVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
//   };

//   return (
//     <Box color="white" py={20} px={10} bg="#0e1113">
//       <Banner 
//         title="About Us"
//         subtitle="Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!"
//         banner={aboutUsImage}
//         height="100vh" // Make the banner take the full height of its area
//       />
//       <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
//         <motion.div initial="hidden" whileInView="visible" variants={contentVariants} viewport={{ once: true }}>
//           <VStack spacing={6} align="flex-start">
//             <Heading as="h2" size="xl" mb={4} textTransform={"capitalize"}>
//               Who we are
//             </Heading>
//             <Text fontSize="lg">
//               Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!
//             </Text>
//             <Text fontSize="lg">
//               At Forex IQ, we empower traders, investors, and financial enthusiasts to navigate the complex world of the Indian financial markets with confidence and precision. Our cutting-edge algorithmic trading software is designed to revolutionize the way you engage with the stock markets, providing you with a powerful arsenal of tools to enhance your trading experience.
//             </Text>
//             <Heading as="h3" size="lg" mt={10}>
//               Our Vision
//             </Heading>
//             <Text fontSize="lg">
//               Our vision at Forex IQ is to democratize algorithmic trading, making it accessible to both seasoned professionals and aspiring traders in the Indian markets. We believe that technology should level the playing field, and with our platform, we aim to do just that.
//             </Text>
//             <Heading as="h3" size="lg" mt={10} bg="#0e1113">
//               Why Choose Forex IQ?
//             </Heading>
//             <Swiper
//               spaceBetween={20}
//               slidesPerView={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
//               navigation={true}
//               className="mySwiper"
//             >
//               {items.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <Card p={4} border="1px solid" borderColor="gray.600" borderRadius="md" bg="#0e1113" maxW="25rem">
//                     <CardHeader onClick={() => toggleItem(index)} cursor="pointer" display="flex" alignItems="center" justifyContent="space-between">
//                       <Heading size="md" color="#008080">{item.header}</Heading>
//                       <IconButton
//                         aria-label={openItems[index] ? "Collapse" : "Expand"}
//                         icon={openItems[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
//                         onClick={() => toggleItem(index)}
//                         variant="ghost"
//                       />
//                     </CardHeader>
//                     <Collapse in={openItems[index]} animateOpacity>
//                       <CardBody>
//                         <Text fontSize="lg" pl={4}>{item.content}</Text>
//                       </CardBody>
//                     </Collapse>
//                   </Card>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </VStack>
//         </motion.div>
//         {showImage && (
//           <motion.div initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true }}>
//             <Box position="sticky" top="0" width="100%" height="100vh">
//               <Image
//                 loading='lazy'
//                 src={aboutUsImage}
//                 alt="About Us"
//                 borderRadius="md"
//                 width="100%"
//                 height="100%"
//                 objectFit="cover"
//               />
//             </Box>
//           </motion.div>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default AboutUs;

// new updated code 

import { useState } from 'react';
import { Box, Grid, Heading, Text, VStack, Collapse, Flex, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import banner from '../assets/charts_2.jpg'; // Adjust the import path according to your project structure
import Banner from '../components/Banner';

// Adjust the import path according to your project structure
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import SwiperCore, { Navigation } from 'swiper';

// SwiperCore.use([Navigation]);

const AboutUs = () => {
  const [openItems, setOpenItems] = useState({});
//   const showImage = useBreakpointValue({ base: false, lg: true });

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
      content: 'Forex IQ employs cutting-edge algorithms that have been rigorously tested and optimized for the Indian markets. Our algorithms are designed to help you make data-driven, informed trading decisions.'
    },
    {
      header: 'User-Friendly Interface',
      content: 'Our intuitive user interface makes algorithmic trading accessible to all. You do not need to be a tech wizard to use our platform. It is designed to be user-friendly, ensuring a seamless and efficient trading experience.'
    },
    {
      header: 'Robust Backtesting',
      content: 'Test your trading strategies rigorously with our powerful backtesting tools. You can gain insights into how your strategies would have performed historically, helping you refine and optimize your trading approach.'
    },
    {
      header: 'Real-Time Data',
      content: 'Stay on top of the markets with real-time data and analytics. Our platform provides up-to-the-minute information to ensure that you do not miss out on trading opportunities.'
    },
    {
      header: 'Risk Management',
      content: 'Protect your capital with our built-in risk management tools. Forex IQ empowers you to set risk parameters to minimize potential losses and safeguard your investments.'
    },
    {
      header: 'Dedicated Support',
      content: 'Our team of experts is here to provide you with top-notch support. Whether you are a beginner or an experienced trader, we are ready to assist you in making the most of our platform.'
    },
    {
      header: 'Community',
      content: 'Join the Forex IQ community to connect with like-minded traders and share insights, tips, and strategies. Learn from the experiences of others and stay informed about market trends.'
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <Box color="white" bg="#0e1113">
      <Banner 
        title="About Us"
        subtitle="Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!"
        height="100vh" 
        banner={banner}// Make the banner take the full height of its area
      />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10} px = {{base: 10, md: 20}}>
        <motion.div initial="hidden" whileInView="visible" variants={contentVariants} viewport={{ once: true }}>
          <VStack spacing={6} align="flex-start">
            <Heading as="h2" size="xl" mb={4} textTransform={"capitalize"}>
              Who we are
            </Heading>
            <Text fontSize="lg">
              Welcome to Forex IQ - Your Gateway to Algorithmic Trading in the Indian Markets!
            </Text>
            <Text fontSize="lg">
              At Forex IQ, we empower traders, investors, and financial enthusiasts to navigate the complex world of the Indian financial markets with confidence and precision. Our cutting-edge algorithmic trading software is designed to revolutionize the way you engage with the stock markets, providing you with a powerful arsenal of tools to enhance your trading experience.
            </Text>
            <Heading as="h3" size="lg" mt={10}>
              Our Vision
            </Heading>
            <Text fontSize="lg">
              Our vision at Forex IQ is to democratize algorithmic trading, making it accessible to both seasoned professionals and aspiring traders in the Indian markets. We believe that technology should level the playing field, and with our platform, we aim to do just that.
            </Text>
          </VStack>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true }}>
            <Box>
                <Heading as="h3"  size="lg" mb={10} bg="#0e1113">
                Why Choose Forex IQ?
                </Heading>
                <Flex
                flexWrap="wrap"
                justify="space-between"
                >
                {items.map((item, index) => (
                    <Box key={index} p={4} border="1px solid" borderColor="gray.600" borderRadius="md" bg="#0e1113" width={{ base: "100%", sm: "100%", md: "calc(50% - 1rem)", lg: "calc(50% - 1rem)" }} mb={4}>
                    <Box onClick={() => toggleItem(index)} cursor="pointer" display="flex" alignItems="center" justifyContent="space-between">
                        <Heading size="md" color="white">{item.header}</Heading>
                        <IconButton
                        aria-label={openItems[index] ? "Collapse" : "Expand"}
                        icon={openItems[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        onClick={() => toggleItem(index)}
                        variant="ghost"
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
      </Grid>
    </Box>
  );
};

export default AboutUs;
