// import { Box, Flex, Heading, Button, Text, keyframes } from '@chakra-ui/react';
// import { useEffect, useRef } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import { motion } from 'framer-motion';
// import heroImg from "../assets/charts.jpg";

// const HeroSection = () => {
//   const typing = keyframes`
//     from { width: 50% }
//     to { width: 100% }
//   `;

//   const blink = keyframes`
//     0% { border-color: transparent }
//     50% { border-color: white }
//     100% { border-color: transparent }
//   `;

//   const tickerItems = [
//     "BTC/USD $985.76 (+0.86%)",
//     "ETH/USD $1500.43 (-1.23%)",
//     "XRP/USD $0.25 (+2.34%)",
//     "LTC/USD $150.56 (-0.56%)",
//     "BCH/USD $305.76 (+1.12%)",
//     "ADA/USD $1.23 (+0.45%)",
//     "DOGE/USD $0.07 (-2.45%)",
//     "DOT/USD $20.45 (+1.56%)",
//     "UNI/USD $25.78 (-0.89%)",
//     "LINK/USD $30.12 (+0.99%)"
//   ];

//   const [sliderRef, slider] = useKeenSlider({
//     loop: true,
//     duration: 1000,
//     slidesPerView: 5,
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1024: {
//         slidesPerView: 5,
//       },
//     },
//     created: (s) => {
//       s.moveToIdx(1, true, { duration: 2000 });
//     },
//   });

//   const sliderInstanceRef = useRef(null);

//   useEffect(() => {
//     sliderInstanceRef.current = slider.current;

//     const interval = setInterval(() => {
//       if (sliderInstanceRef.current) {
//         sliderInstanceRef.current.next();
//       }
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [slider]);

//   return (
//     <>
//       <Box
//         position="relative"
//         bgImage={`url(${heroImg})`}
//         bgPosition="center"
//         bgSize="cover"
//         color="white"
//         py={20}
//         height={{ base: "100vh", lg: "calc(100vh - 4rem)" }}
//       >
//         {/* Overlay */}
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           right={0}
//           bottom={0}
//           bg="#0e1113"
//           opacity={0.8}
//           zIndex={1}
//           px={{ base: 4, md: 16 }}
//         />

//         {/* Content */}
//         <Flex
//           direction="column"
//           align="flex-start"
//           justify="flex-start"
//           h="100%"
//           position="relative"
//           zIndex={2}
//           textAlign={{ base: 'center', md: 'left' }}
//           px={{ base: 4, md: 16 }}
//         >
//           <Box my="4rem" width="fit-content" mb={{ base: 8, md: 0 }}>
//             <Heading as="h1" size="2xl" mb={4}>Unleash the power of AI Trading</Heading>
//             <Text
//               fontSize={{ base: "md", md: "lg", lg: "xl" }}
//               mb={10}
//               borderRight="0.15em solid white"
//               animation={`${typing} 3.5s steps(40, end) 1s, ${blink} 0.75s step-end infinite`}
//             >
//               THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING
//             </Text>
//             <Button
//               px={{ md: "4rem" }}
//               bg="#011b3d"
//               color="white"
//               _hover={{ bg: "#00284d" }}
//               size="lg"
//               width={{ base: "100%", md: "auto" }}
//               rounded="md"
//             >
//               Start Trading Now
//             </Button>
//           </Box>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}
//           >
//             {/* Optional Image or any other component you want to place here */}
//           </motion.div>
//         </Flex>
//         <Box 
//           px={4} 
//           py={2} 
//           bg="#0e1113" 
//           opacity={0.7}
//           width="100vw" 
//           display="flex" 
//           justifyContent="center" 
//           position="absolute" 
//           bottom="0"
//           zIndex={2}
//         >
//           <Box maxWidth="90vw" ref={sliderRef} className="keen-slider">
//             {tickerItems.map((item, index) => (
//               <Box key={index} className="keen-slider__slide" px={4} display="inline-block" color={item.includes("+") ? "green.400" : "red.400"}>
//                 {item}
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default HeroSection;


import { Box, Flex, Heading, Button, Text, keyframes } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import heroImg from '../assets/charts.jpg';

const HeroSection = () => {
  const typing = keyframes`
    from { width: 50% }
    to { width: 100% }
  `;

  const blink = keyframes`
    0% { border-color: transparent }
    50% { border-color: white }
    100% { border-color: transparent }
  `;

  const tickerItems = [
    'BTC/USD $985.76 (+0.86%)',
    'ETH/USD $1500.43 (-1.23%)',
    'XRP/USD $0.25 (+2.34%)',
    'LTC/USD $150.56 (-0.56%)',
    'BCH/USD $305.76 (+1.12%)',
    'ADA/USD $1.23 (+0.45%)',
    'DOGE/USD $0.07 (-2.45%)',
    'DOT/USD $20.45 (+1.56%)',
    'UNI/USD $25.78 (-0.89%)',
    'LINK/USD $30.12 (+0.99%)'
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    breakpoints: {
      '(max-width: 320px)': {
        slidesPerView: 1,
      },
      '(max-width: 768px)': {
        slidesPerView: 3,
      },
      '(min-width: 1024px)': {
        slidesPerView: 5,
      },
    },
    slidesPerView: 5,
    created: (s) => {
      s.moveToIdx(1, true, { duration: 2000 });
    },
  });

  const sliderInstanceRef = useRef(null);

  useEffect(() => {
    sliderInstanceRef.current = slider.current;

    const interval = setInterval(() => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.next();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <>
      <Box
        position="relative"
        bgImage={`url(${heroImg})`}
        bgPosition="center"
        bgSize="cover"
        color="white"
        py={20}
        height={{ base: '100vh', lg: 'calc(100vh - 4rem)' }}
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
          px={{ base: 4, md: 16 }}
        />

        {/* Content */}
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          h="100%"
          position="relative"
          zIndex={2}
          textAlign={{ base: 'center', md: 'left' }}
          px={{ base: 4, md: 16 }}
        >
          <Box my="4rem" width="fit-content" mb={{ base: 8, md: 0 }}>
            <Heading as="h1" size="2xl" mb={4}>
              Unleash the power of AI Trading
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              mb={10}
              borderRight="0.15em solid white"
              animation={`${typing} 3.5s steps(40, end) 1s, ${blink} 0.75s step-end infinite`}
            >
              THE FOREX IQ - YOUR TRUSTED PARTNER IN AUTOMATED TRADING
            </Text>
            <Button
              px={{ md: '4rem' }}
              bg="#011b3d"
              color="white"
              _hover={{ bg: '#00284d' }}
              size="lg"
              width={{ base: '100%', md: 'auto' }}
              rounded="md"
            >
              Start Trading Now
            </Button>
          </Box>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              height: '100%',
            }}
          >
            {/* Optional Image or any other component you want to place here */}
          </motion.div>
        </Flex>
        <Box
          px={4}
          py={2}
          bg="#0e1113"
          opacity={0.7}
          width="100vw"
          display="flex"
          justifyContent="center"
          position="absolute"
          bottom="0"
          zIndex={2}
        >
          <Box maxWidth="90vw" ref={sliderRef} className="keen-slider">
            {tickerItems.map((item, index) => (
              <Box
                key={index}
                className="keen-slider__slide"
                px={4}
                display="inline-block"
                color={item.includes('+') ? 'green.400' : 'red.400'}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
