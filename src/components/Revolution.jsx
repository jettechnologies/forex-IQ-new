// import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
// import revolution from "../assets/revolution_3.jpg";

// const JoinForexIQRevolution = () => {
//   return (
//     <Box
//       position="relative"
//       minHeight="100vh"
//       width="100%"
//       bg="#191b20"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       px={{ base: 4, md: 8 }}
//     >
//       <Box
//         width="100%"
//         maxWidth="1200px"
//         bgImage={`url(${revolution})`}
//         bgSize="cover"
//         bgPosition="center"
//         borderRadius="md"
//         shadow="md"
//         boxShadow="0 0 10px #0e1113"
//         p={{ base: 6, md: 8 }}
//         position="relative"
//         zIndex={1}
//         _before={{
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(14, 17, 19, 0.8)",
//           borderRadius: "md",
//           zIndex: -1,
//         }}
//       >
//         <Flex
//           direction="column"
//           justify="center"
//           align="center"
//           textAlign="center"
//           px={{ base: 4, md: 8 }}
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
//             lineHeight = {1.5}
//           >
//             Don&apos;t let market volatility impact your trading. With Forex IQ, leverage algorithmic trading to make informed, data-driven decisions that enhance your performance and confidence. Upgrade your trading experience today and see the difference.
//           </Text>
//           <Button
//             px={{ base: '2rem', md: '4rem' }}
//             bg="#1b6e4e"
//             color="white"
//             _hover={{ bg: '#00284d' }}
//             size="lg"
//             rounded="md"
//           >
//             Start Trading Now
//           </Button>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default JoinForexIQRevolution;


import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import revolution from "../assets/revolution_3.jpg";

const JoinForexIQRevolution = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch('https://res.cloudinary.com/dqnnqmqjx/video/upload/v1721163987/forex-iq/ambetxr4n6n3jgvmqvfy.mp4');
        if (response.ok) {
          setVideoUrl(response.url);
        } else {
          console.error('Failed to fetch video URL');
        }
      } catch (error) {
        console.error('Error fetching video URL:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <Box
      position="relative"
      // minHeight="100vh"
      width="100%"
      bg="#191b20"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 12, lg: 14, xl: 16 }}
      px={{ base: 4, md: 8 }}
    >
      {loading ? (
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
              lineHeight={1.5}
            >
              Don&apos;t let market volatility impact your trading. With Forex IQ, leverage algorithmic trading to make informed, data-driven decisions that enhance your performance and confidence. Upgrade your trading experience today and see the difference.
            </Text>
            <Button
              px={{ base: '2rem', md: '4rem' }}
              bg="#1b6e4e"
              color="white"
              _hover={{ bg: '#00284d' }}
              size="lg"
              rounded="md"
            >
              Start Trading Now
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box
          position="relative"
          width="100%"
          maxWidth="1200px"
          height="60vh"
          rounded={"md"}
          shadow={"md"}
          overflow="hidden"
          zIndex={1}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: '-1',
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(14, 17, 19, 0.8)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={{ base: 4, md: 8 }}
          >
            <Box
              width="100%"
              maxWidth="1200px"
              p={{ base: 6, md: 8 }}
              position="relative"
              zIndex={1}
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
                  lineHeight={1.5}
                >
                  Don&apos;t let market volatility impact your trading. With Forex IQ, leverage algorithmic trading to make informed, data-driven decisions that enhance your performance and confidence. Upgrade your trading experience today and see the difference.
                </Text>
                <Button
                  px={{ base: '2rem', md: '4rem' }}
                  bg="#1b6e4e"
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
        </Box>
      )}
    </Box>
  );
};

export default JoinForexIQRevolution;
