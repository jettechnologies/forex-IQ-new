import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import revolution from "../assets/revolution_3.jpg";

const JoinForexIQRevolution = () => {
  return (
    <Box
      position="relative"
      minHeight="100vh"
      width="100%"
      bg="#191b20"
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
            lineHeight = {1.5}
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
