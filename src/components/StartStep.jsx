// /* eslint-disable react/prop-types */
// import { Box, Flex, Text, Grid, Heading, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import form from "../assets/form.png";
// import purchase from "../assets/purchase.png";
// import connect from "../assets/connect.png";
// import activate from "../assets/activation.png";

// const steps = [
//   { text: 'Signup', description: 'Sign up to create your account', image: form },
//   { text: 'Purchase a bot', description: 'Buy a trading bot', image: purchase },
//   { text: 'Connect your trading account or coin', description: 'Link your trading account or cryptocurrency', image: connect },
//   { text: 'Activate the bot', description: 'Turn on the bot and start trading', image: activate },
// ];

// const StartStep = () => {
//   const [activeStep, setActiveStep] = useState(null);

//   return (
//     <Box minHeight="100vh" backgroundColor="#0e1113" py={10} px={{ base: 4, md: 10 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//       <Heading
//         fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
//         fontWeight="600"
//         color="#fff"
//         mb={6}
//         textTransform="uppercase"
//       >
//         How to Start
//       </Heading>
//       <Flex>
//         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} maxWidth="1200px">
//           {steps.map((step, index) => (
//             <Flex
//               key={index}
//               direction="column"
//               p={6}
//               borderRadius="md"
//               backgroundColor={activeStep === index ? '#191b20' : '#0e1113'}
//               onMouseEnter={() => setActiveStep(index)}
//               onMouseLeave={() => setActiveStep(null)}
//               transition="background-color 0.3s"
//               cursor="pointer"
//             >
//               <Text
//                 fontSize={{ base: 'xl', md: '2xl' }}
//                 color="#fff"
//                 fontWeight="bold"
//                 mb={2}
//               >
//                 {step.text}
//               </Text>
//               <Text
//                 fontSize={{ base: 'md', md: 'lg' }}
//                 color="#b0b0b0"
//               >
//                 {step.description}
//               </Text>
//             </Flex>
//           ))}
//         </Grid>
//         <Box mt={10} width={{ base: '100%', md: '80%', lg: '60%' }} height={{ base: '200px', md: '300px', lg: '400px' }} position="relative">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: activeStep === index ? 1 : 0 }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 position: activeStep === index ? 'relative' : 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%'
//               }}
//             >
//               <Image src={step.image} alt={step.text} width="100%" height="100%" objectFit="cover" />
//             </motion.div>
//           ))}
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default StartStep;


/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { Box, Flex, Text, Grid, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import form from "../assets/form.png";
import purchase from "../assets/purchase.png";
import connect from "../assets/connect.png";
import activate from "../assets/activation.png";

const steps = [
  { text: 'Signup', description: 'Sign up to create your account', image: form },
  { text: 'Purchase a bot', description: 'Buy a trading bot', image: purchase },
  { text: 'Connect your trading account or coin', description: 'Link your trading account or cryptocurrency', image: connect },
  { text: 'Activate the bot', description: 'Turn on the bot and start trading', image: activate },
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

  return (
    <Box minHeight="100vh" backgroundColor="#0e1113" py={10} px={{ base: 4, md: 10 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
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
            >
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
          <Box mt={10} width={{ base: '100%', md: '80%', lg: '60%' }} height={{ base: '200px', md: '300px', lg: '400px' }} position="relative">
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
                <Image src={step.image} alt={step.text} width="100%" height="100%" objectFit="cover" />
              </motion.div>
            ))}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default StartStep;
