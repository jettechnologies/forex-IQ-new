/* eslint-disable react/prop-types */
import { Box, Flex, Text, Image, Grid, Heading } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const steps = [
  { text: 'Signup', image: 'https://via.placeholder.com/300x500' },
  { text: 'Purchase a bot', image: 'https://via.placeholder.com/300x500' },
  { text: 'Connect your trading account or coin', image: 'https://via.placeholder.com/300x500' },
  { text: 'Activate the bot', image: 'https://via.placeholder.com/300x500' },
];

const StartStep = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box minHeight="120vh" backgroundColor="#0e1113" overflowY="auto" py={10} display="flex" flexDirection={"column"} px={{ base: 10, lg: 16 }} alignItems="center" justifyContent="center" overflowX="clip">
        <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="600"
            color="#010494"
            mb={6}
            textTransform="uppercase"
        >
            HOW TO START
        </Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} height={"100vh"}>
        <Flex direction="column" width={"fit"} justifyContent={"space-evenly"}>
          {steps.map((step, index) => (
            <InViewStep key={index} index={index} setActiveStep={setActiveStep}>
              <Text
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color={activeStep === index ? '#007377' : '#fff'}
                mb={6}
              >
                {step.text}
              </Text>
            </InViewStep>
          ))}
        </Flex>
        <Flex position="relative" height={{base: "300px", md: "50vh",lg:"70vh"}} alignSelf={"center"}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={activeStep === index ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, x: '100%' },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', height: '100%', width: '100%' }}
            >
              <Image src={step.image} alt={step.text} width="100%" height="100%" objectFit="cover" rounded = "lg" />
            </motion.div>
          ))}
        </Flex>
      </Grid>
    </Box>
  );
};

const InViewStep = ({ children, index, setActiveStep }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-25% 0px' });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    } else if (!isInView && setActiveStep === index) {
      setActiveStep(prev => (prev > 0 ? prev - 1 : 0));
    }
  }, [isInView, index, setActiveStep]);

  return (
    <Box ref={ref} as={motion.div} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : '100%' }} transition={{ duration: 0.5 }}>
      {children}
    </Box>
  );
};

export default StartStep;
