/* eslint-disable react/prop-types */
import { Box, Flex, Text, Grid, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaRegFileAlt, FaWallet, FaPlug, FaPowerOff } from 'react-icons/fa';
import form from "../assets/signup.png";
import purchase from "../assets/purchase_2.png";
import connect from "../assets/connect_2.png";
import activate from "../assets/activate_2.png";

const steps = [
  { text: 'Signup', description: 'Sign up to create your account', image: form, icon: <FaRegFileAlt /> },
  { text: 'Purchase a bot', description: 'Buy a trading bot', image: purchase, icon: <FaWallet /> },
  { text: 'Connect your trading account or coin', description: 'Link your trading account or cryptocurrency', image: connect, icon: <FaPlug /> },
  { text: 'Activate the bot', description: 'Turn on the bot and start trading', image: activate, icon: <FaPowerOff /> },
];

const StartStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // 000401
  // backgroundColor="#0e1113"

  return (
    <Box minHeight="100vh" backgroundColor="#000401"  py={10} px={{ base: 4, md: 10 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Heading
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontWeight="600"
        color="#fff"
        mb={6}
        textTransform="uppercase"
      >
        How to Start
      </Heading>
      <Flex>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} maxWidth="1200px">
          {steps.map((step, index) => (
            <Flex
              key={index}
              direction="column"
              p={6}
              borderRadius="md"
              backgroundColor={activeStep === index ? '#46484b' : '#191b20'}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              transition="background-color 0.3s"
              cursor="pointer"
              alignItems="center"
              textAlign="center"
            >
              <Box mb={4} color={activeStep === index ? '#29ce56' : '#1b6e4e '} fontSize="2xl">
                {step.icon}
              </Box>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color="#fff"
                fontWeight="bold"
                mb={2}
              >
                {step.text}
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="#b0b0b0"
              >
                {step.description}
              </Text>
            </Flex>
          ))}
        </Grid>
        {isLargeScreen && (
          <Box mt={10} width={{ base: '100%', md: '80%', lg: '70%' }} height={{ base: '200px', md: '300px', lg: '400px' }} position="relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeStep === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: activeStep === index ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <Image src={step.image} alt={step.text} width="100%" height="100%" objectFit="contain" />
              </motion.div>
            ))}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default StartStep;
