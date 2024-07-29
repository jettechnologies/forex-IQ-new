// import { useState, useEffect } from 'react';
// import { fetchCurrencyRates } from '../currencyService';
// import { Box, RadioGroup, Stack, Radio, Grid, Text, Flex, Heading } from '@chakra-ui/react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const currencies = [
//   { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY', 'AUD'] },
//   { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY', 'AUD'] },
//   { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY', 'AUD'] },
//   { search: 'CAD', convert: ['USD', 'AUD', 'GBP', 'CHF', 'EUR', 'INR', 'JPY', 'AUD'] },
// ];

// const CurrencyRates = () => {
//   const [rates, setRates] = useState([]);
//   const [filter, setFilter] = useState('daily'); // Default filter is 'daily'

//   useEffect(() => {
//     const fetchAllCurrencyRates = async () => {
//       const allRequests = currencies.map(currency =>
//         fetchCurrencyRates(currency.search, currency.convert)
//       );

//       try {
//         const results = await Promise.all(allRequests);
//         const formattedResults = results.map((result, index) => ({
//           search: currencies[index].search,
//           rates: result
//         }));
//         setRates(formattedResults);
//       } catch (error) {
//         console.error('Failed to fetch all currency rates:', error);
//       }
//     };

//     fetchAllCurrencyRates();
//   }, []);

//   const filterRates = (rates, filter) => {
//     if (filter === 'daily') {
//       return rates;
//     }
//     // Filter logic for one month and one year
//     const currentDate = new Date();
//     return rates.map(currencyRate => ({
//       ...currencyRate,
//       rates: currencyRate.rates.filter(rate => {
//         const rateDate = new Date(rate.date);
//         if (filter === 'oneMonth') {
//           const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
//           return rateDate >= oneMonthAgo;
//         } else if (filter === 'oneYear') {
//           const oneYearAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
//           return rateDate >= oneYearAgo;
//         }
//         return true;
//       })
//     }));
//   };

//   const filteredRates = filterRates(rates, filter);

//   const sliderSettings = {
//     autoplay: true,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: false,
//   };

//   return (
//     <Flex
//       align="center"
//       justify="center"
//       direction="column"
//       bg="#0e1113"
//       color="#f4f4f4"
//       minHeight="100vh"
//       textAlign="center"
//       p={5}
//     >
//       <Flex justify="space-between" align="center" mb={4} direction="column">
//         <Heading as="h1" size="lg">
//           Market Overview
//         </Heading>
//         <Text>Pictorial monthly analytics of market.</Text>
//       </Flex>
//       <RadioGroup onChange={setFilter} value={filter}>
//         <Stack direction="row">
//           <Radio value="daily">Daily</Radio>
//           <Radio value="oneMonth">One Month</Radio>
//           <Radio value="oneYear">One Year</Radio>
//         </Stack>
//       </RadioGroup>
//       <Grid templateColumns="repeat(2, 22.5rem)" justifyContent={"center"} templateRows="repeat(2, 1fr)" mt={5} width="100%">
//         {filteredRates.map((currencyRate, index) => (
//           <Box
//             key={index}
//             p={8}
//             borderWidth="1px"
//             borderRadius="lg"
//             width={{ base: '22.5rem' }}
//             m="auto"
//           >
//             <Text fontWeight="bold" textAlign={"left"} mb={3}>{currencyRate.search}</Text>
//             <Slider {...sliderSettings}>
//               {currencyRate.rates.map((rate, idx) => (
//                 <Box key={idx} mb={2}>
//                   <Text
//                     color={rate.value < 0 ? 'red.500' : 'green.500'}
//                     fontWeight="bold"
//                   >
//                     {rate.target}: {rate.value.toFixed(2)}
//                   </Text>
//                 </Box>
//               ))}
//             </Slider>
//           </Box>
//         ))}
//       </Grid>
//     </Flex>
//   );
// };

// export default CurrencyRates;

// import { useState, useEffect } from 'react';
// import { fetchCurrencyRates } from '../currencyService';
// import { Box, RadioGroup, Stack, Radio, Grid, Text, Flex, Heading } from '@chakra-ui/react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const currencies = [
//   { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY', 'AUD'] },
//   { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY', 'AUD'] },
//   { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY', 'AUD'] },
//   { search: 'CAD', convert: ['USD', 'AUD', 'GBP', 'CHF', 'EUR', 'INR', 'JPY', 'AUD'] },
// ];

// const CurrencyRates = () => {
//   const [rates, setRates] = useState([]);
//   const [filter, setFilter] = useState('daily'); // Default filter is 'daily'

//   useEffect(() => {
//     const fetchAllCurrencyRates = async () => {
//       const allRequests = currencies.map(currency =>
//         fetchCurrencyRates(currency.search, currency.convert)
//       );

//       try {
//         const results = await Promise.all(allRequests);
//         const formattedResults = results.map((result, index) => ({
//           search: currencies[index].search,
//           rates: result
//         }));
//         setRates(formattedResults);
//       } catch (error) {
//         console.error('Failed to fetch all currency rates:', error);
//       }
//     };

//     fetchAllCurrencyRates();
//   }, []);

//   const filterRates = (rates, filter) => {
//     if (filter === 'daily') {
//       return rates;
//     }
//     // Filter logic for one month and one year
//     const currentDate = new Date();
//     return rates.map(currencyRate => ({
//       ...currencyRate,
//       rates: currencyRate.rates.filter(rate => {
//         const rateDate = new Date(rate.date);
//         if (filter === 'oneMonth') {
//           const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
//           return rateDate >= oneMonthAgo;
//         } else if (filter === 'oneYear') {
//           const oneYearAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
//           return rateDate >= oneYearAgo;
//         }
//         return true;
//       })
//     }));
//   };

//   const filteredRates = filterRates(rates, filter);

//   const sliderSettings = {
//     autoplay: true,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: false,
//   };

//   return (
//     <Flex
//       align="center"
//       justify="center"
//       direction="column"
//       bg="#0e1113"
//       color="#f4f4f4"
//       minHeight="100vh"
//       textAlign="center"
//       p={5}
//     >
//       <Flex justify="space-between" align="center" mb={4} direction="column">
//         <Heading as="h1" size="lg" fontSize={{ base: '2xl', md: '3xl' }}>
//           Market Overview
//         </Heading>
//         <Text fontSize={{ base: 'md', md: 'lg' }}>Pictorial monthly analytics of market.</Text>
//       </Flex>
//       <RadioGroup onChange={setFilter} value={filter}>
//         <Stack direction="row">
//           <Radio value="daily">Daily</Radio>
//           <Radio value="oneMonth">One Month</Radio>
//           <Radio value="oneYear">One Year</Radio>
//         </Stack>
//       </RadioGroup>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(2, 22.5rem)' }}
//         templateRows={{ base: 'auto', md: 'repeat(2, 1fr)' }}
//         justifyContent="center"
//         mt={5}
//         width="100%"
//         // gap={5}
//       >
//         {filteredRates.map((currencyRate, index) => (
//           <Box
//             key={index}
//             p={{ base: 4, md: 8 }}
//             borderWidth="1px"
//             borderRadius="lg"
//             width={{ base: '100%', md: '22.5rem' }}
//             m="auto"
//           >
//             <Text fontWeight="bold" textAlign="left" mb={3}>
//               {currencyRate.search}
//             </Text>
//             <Slider {...sliderSettings}>
//               {currencyRate.rates.map((rate, idx) => (
//                 <Box key={idx} mb={2}>
//                   <Text
//                     color={rate.value < 0 ? 'red.500' : 'green.500'}
//                     fontWeight="bold"
//                   >
//                     {rate.target}: {rate.value.toFixed(2)}
//                   </Text>
//                 </Box>
//               ))}
//             </Slider>
//           </Box>
//         ))}
//       </Grid>
//     </Flex>
//   );
// };

// export default CurrencyRates;


import { useState, useEffect } from 'react';
import { fetchCurrencyRates } from '../currencyService';
import { Box, Grid, Text, Flex, Heading, Button, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const currencies = [
  { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
  { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
  { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY'] },
  { search: 'CAD', convert: ['USD', 'AUD', 'GBP', 'CHF', 'EUR', 'INR', 'JPY'] },
];

const CurrencyRates = () => {
  const [rates, setRates] = useState([]);
  const [filter, setFilter] = useState('daily'); // Default filter is 'daily'

  useEffect(() => {
    const fetchAllCurrencyRates = async () => {
      const allRequests = currencies.map(currency =>
        fetchCurrencyRates(currency.search, currency.convert, filter)
      );

      try {
        const results = await Promise.all(allRequests);
        const formattedResults = results.map((result, index) => ({
          search: currencies[index].search,
          rates: result
        }));
        setRates(formattedResults);
      } catch (error) {
        console.error('Failed to fetch all currency rates:', error);
      }
    };

    fetchAllCurrencyRates();
  }, [filter]);

  const sliderSettings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      bg="#0e1113"
      color="#f4f4f4"
      minHeight="100vh"
      textAlign="center"
      px={{ base: "2rem", md: "4rem" }}
      py = {10}
    >
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={6}
        width="100%"
        justifyItems="center"
        alignItems="center"
      >
        <Box width={{ base: '100%', md: 'auto' }}>
          <Flex justify="space-between" align="center" mb={4} direction="column" textAlign="center">
              <Heading as="h1" size="lg">
                Market Overview
              </Heading>
              <Text>Pictorial monthly analytics of market.</Text>
            </Flex>

          <RadioGroup onChange={setFilter} value={filter}>
            <Stack direction="row" spacing={4} mb={4} justify = {"center"} >
              <Radio colorScheme='green' value="daily">Daily</Radio>
              <Radio colorScheme='green' value="oneWeek">One Week</Radio>
              <Radio colorScheme='green' value="oneMonth">One Month</Radio>
            </Stack>
          </RadioGroup>
          <Grid
            templateColumns={{ base: "repeat(2, 9.5rem)", lg: "repeat(2, 22.5rem)" }}
            templateRows="repeat(2, 1fr)"
            justifyContent="center"
            width="100%"
          >
            {rates.map((currencyRate, index) => (
              <Box
                key={index}
                p={6}
                borderWidth="1px"
                bg="#1a1d21"
                width="100%"
              >
                <Text fontWeight="bold" textAlign="left" mb={3}>
                  {currencyRate.search}
                </Text>
                <Slider {...sliderSettings}>
                  {currencyRate.rates.map((rate, idx) => (
                    <Box key={idx} mb={2}>
                      <Text
                        color={rate.value < 0 ? 'red.500' : 'green.500'}
                        fontWeight="bold"
                      >
                        {rate.target}: {rate.value.toFixed(2)}
                      </Text>
                    </Box>
                  ))}
                </Slider>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box textAlign="left" maxWidth="500px" mx = {{base: "auto", md: 0}}>
          <Heading as="h1" size="lg" fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
            Powering Your Automated Trading Success
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={6} textAlign={{base:"center", md: "left"}}>
            Experience the ultimate in trading efficiency with our auto-trading bot. Harness the power of Raw Spreads, offering spreads from 0.0 pips with no requotes and the best possible prices. Whether you are a high-volume trader, scalper, or rely on automated trading strategies, our platform delivers unparalleled performance with no restrictions. Optimize your trading with our advanced algorithms and take advantage of the multi-asset trading capabilities that cater to sophisticated trading needs.
          </Text>
          <Flex direction="row" gap={6} alignItems="start">
            <Button colorScheme="green" py={5} flex={1}>
              Start Trading
            </Button>
            <Button variant="outline" colorScheme="green" py={5} flex={1}>
              Try a Free Demo
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  );
};

export default CurrencyRates;