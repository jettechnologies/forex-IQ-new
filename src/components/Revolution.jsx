// import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
// import { useRef } from 'react';
// import revolutionVideo from "../assets/revolution.mp4";
// // import { motion } from 'framer-motion';

// const JoinForexIQRevolution = () => {
//   const videoRef = useRef(null);

//   return (
//     <Box position="relative" height="100vh" width="100%" overflow="hidden">
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           top: '50%',
//           left: '50%',
//           objectFit: 'cover',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 0,
//         }}
//       >
//         <source src={revolutionVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg="#0e1113"
//         opacity={0.8}
//         zIndex={1}
//       />
//       <Flex
//         direction="column"
//         align="center"
//         justify="center"
//         height="100%"
//         position="relative"
//         zIndex={2}
//         textAlign="center"
//         px={{ base: 4, md: 8 }}
//       >
//         <Heading
//           fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
//           color="white"
//           mb={4}
//           width={{ base: '80%', md: '60%' }}
//         >
//           Join the Forex IQ Revolution
//         </Heading>
//         <Text
//           fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
//           color="white"
//           mb={8}
//           width={{ base: '80%', md: '60%' }}
//         >
//          Don&apos;t let market volatility impact your trading. With Forex IQ, leverage algorithmic trading to make informed, data-driven decisions that enhance your performance and confidence. Upgrade your trading experience today and see the difference.
//         </Text>
//         <Button
//           px={{ md: '4rem' }}
//           bg="#011b3d"
//           color="white"
//           _hover={{ bg: '#00284d' }}
//           size="lg"
//           width={{ base: '80%', md: 'auto' }}
//           rounded="md"
//         >
//           Start Trading Now
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default JoinForexIQRevolution;

// import { Box, Flex, Heading, Text, Button, Grid } from '@chakra-ui/react';
// import revolution from "../assets/revolution_2.png";

// const JoinForexIQRevolution = () => {
//   return (
//     <Box
//       position="relative"
//       min-height="100vh"
//       width="100%"
//       bg="#0e1113"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       px={{ base: 4, md: 8 }}
//       border = "2px solid red"
//     >
//       <Grid
//         templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
//         gap={6}
//         width="100%"
//         maxWidth="1200px"
//         alignItems="center"
//       >
//         <Flex
//           direction="column"
//           justify="center"
//           align={{ base: 'center', lg: 'flex-start' }}
//           textAlign={{ base: 'center', lg: 'left' }}
//           px={{ base: 4, md: 8 }}
//           bg="#191b20"
//           borderRadius="md"
//           shadow="md"
//           boxShadow="0 0 10px #0e1113"
//           p={{ base: 6, md: 8 }}
//         >
//           <Heading
//             fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
//             color="white"
//             mb={8}
//           >
//             Join the Forex IQ Revolution
//           </Heading>
//           <Text
//             fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
//             color="white"
//             mb={16}
//           >
//             Don&apos;t let market volatility impact your trading. With Forex IQ, leverage algorithmic trading to make informed, data-driven decisions that enhance your performance and confidence. Upgrade your trading experience today and see the difference.
//           </Text>
//           <Button
//             px={{ base: '2rem', md: '4rem' }}
//             bg="#011b3d"
//             color="white"
//             _hover={{ bg: '#00284d' }}
//             size="lg"
//             rounded="md"
//           >
//             Start Trading Now
//           </Button>
//         </Flex>
//         <Flex align="center" justify="center">
//           <Box
//             width={{ base: '100%', lg: '80%' }}
//             height={{base: "300px",lg:"auto"}}
//             bg="gray.300"
//             borderRadius="md"
//             boxShadow="lg"
//             overflow="hidden"
//           >
//             <img
//               src={revolution}
//               alt="revolution image"
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </Box>
//         </Flex>
//       </Grid>
//     </Box>
//   );
// };

// export default JoinForexIQRevolution;


import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import revolution from "../assets/revolution_3.jpg";

const JoinForexIQRevolution = () => {
  return (
    <Box
      position="relative"
      minHeight="100vh"
      width="100%"
      bg="#0e1113"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
    >
      <Box
        width="100%"
        maxWidth="1200px"
        bgImage={`url(${revolution})`}
        bgSize="cover"
        bgPosition="center"
        borderRadius="md"
        shadow="md"
        boxShadow="0 0 10px #0e1113"
        p={{ base: 6, md: 8 }}
        position="relative"
        zIndex={1}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(14, 17, 19, 0.8)",
          borderRadius: "md",
          zIndex: -1,
        }}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            color="white"
            mb={8}
          >
            Join the Forex IQ Revolution
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color="white"
            mb={16}
            lineHeight = {'1.5em'}
          >
            Don&apos;t let market volatility impact your trading. With Forex IQ, leverage algorithmic trading to make informed, data-driven decisions that enhance your performance and confidence. Upgrade your trading experience today and see the difference.
          </Text>
          <Button
            px={{ base: '2rem', md: '4rem' }}
            bg="#011b3d"
            color="white"
            _hover={{ bg: '#00284d' }}
            size="lg"
            rounded="md"
          >
            Start Trading Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JoinForexIQRevolution;
