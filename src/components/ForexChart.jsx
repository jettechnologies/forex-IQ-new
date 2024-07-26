// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { format, subWeeks, subMonths } from 'date-fns';
// import Charts from './Charts'; // Adjust the import path as needed

// const currencies = [
//   { search: "EUR", convert: ["USD", "AUD", "CAD", "CHF", "GBP", "HKD", "INR", "JPY", "KRW", "MXN"] },
//   { search: "USD", convert: ["EUR", "AUD", "CAD", "CHF", "GBP", "HKD", "INR", "JPY", "KRW", "MXN"] },
//   { search: "GBP", convert: ["USD", "AUD", "CAD", "CHF", "EUR", "HKD", "INR", "JPY", "KRW", "MXN"] },
// ];

// const ForexChart = () => {
//   const [data, setData] = useState([]);
//   const [baseCurrency, setBaseCurrency] = useState('GBP');
//   const [period, setPeriod] = useState('week');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

//   useEffect(() => {
//     const currentEndDate = new Date();
//     setEndDate(format(currentEndDate, 'yyyy-MM-dd'));

//     if (period === 'week') {
//       setStartDate(format(subWeeks(currentEndDate, 1), 'yyyy-MM-dd'));
//     } else {
//       setStartDate(format(subMonths(currentEndDate, 1), 'yyyy-MM-dd'));
//     }
//   }, [period]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries', {
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             // from: baseCurrency,
//             to: baseCurrency,
//           },
//           headers: {
//             'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//             'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
//           }
//         });

//         const responseData = response.data.rates;
//         const formattedData = Object.keys(responseData).map(date => {
//           const filteredValues = {};
//           currencies.forEach(currency => {
//             if (currency.search === baseCurrency) {    
//               currency.convert.forEach(conv => {
//                 if (responseData[date][conv] !== undefined) {
//                   filteredValues[conv] = responseData[date][conv];
//                 }
//               });
//             }
//           });
//           return {
//             name: date,
//             value: filteredValues
//           };
//         });
//         setData(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     if (startDate && endDate) {
//       fetchData();
//     }
//   }, [startDate, endDate, baseCurrency]);

//   return (
//     <div className="chart-container">
//       <h1>Market Overview</h1>
//       <form className="form-container">
//         <div className="radio-group">
//           {['GBP', 'EUR', 'USD'].map(currency => (
//             <label key={currency}>
//               <input 
//                 type="radio" 
//                 value={currency} 
//                 checked={baseCurrency === currency} 
//                 onChange={() => setBaseCurrency(currency)} 
//               />
//               {currency}
//             </label>
//           ))}
//         </div>
//         <div className="select-group">
//           <select value={period} onChange={(e) => setPeriod(e.target.value)}>
//             <option value="week">Week</option>
//             <option value="month">Month</option>
//           </select>
//         </div>
//       </form>
//       <Charts data={data} currencies={currencies} baseCurrency={baseCurrency} />
//     </div>
//   );
// };

// export default ForexChart;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { format, subWeeks, subMonths } from 'date-fns';
// import { Box, Flex, FormControl, FormLabel, Heading, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react';
// import Charts from './Charts'; // Adjust the import path as needed

// const currencies = [
//   { search: "EUR", convert: ["USD", "AUD", "CAD", "CHF", "GBP", "INR", "JPY"] },
//   { search: "USD", convert: ["USD", "AUD", "CAD", "CHF", "GBP", "INR", "JPY"] },
//   { search: "GBP", convert: ["USD", "AUD", "CAD", "CHF", "GBP", "INR", "JPY"]},
// ];

// const ForexChart = () => {
//   const [data, setData] = useState([]);
//   const [baseCurrency, setBaseCurrency] = useState('GBP');
//   const [period, setPeriod] = useState('week');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

//   useEffect(() => {
//     const currentEndDate = new Date();
//     setEndDate(format(currentEndDate, 'yyyy-MM-dd'));

//     if (period === 'week') {
//       setStartDate(format(subWeeks(currentEndDate, 1), 'yyyy-MM-dd'));
//     } else {
//       setStartDate(format(subMonths(currentEndDate, 1), 'yyyy-MM-dd'));
//     }
//   }, [period]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries', {
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             from: baseCurrency,
//             to: 'EUR',
//           },
//           headers: {
//             'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//             'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
//           }
//         });

//         const responseData = response.data.rates;
//         const formattedData = Object.keys(responseData).map(date => {
//           const filteredValues = {};
//           currencies.forEach(currency => {
//             if (currency.search === baseCurrency) {    
//               currency.convert.forEach(conv => {
//                 if (responseData[date][conv] !== undefined) {
//                   filteredValues[conv] = responseData[date][conv];
//                 }
//               });
//             }
//           });
//           return {
//             name: date,
//             value: filteredValues
//           };
//         });
//         setData(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     if (startDate && endDate) {
//       fetchData();
//     }
//   }, [startDate, endDate, baseCurrency]);

//   return (
//     <Box className="chart-container" p={4}>
//       <Heading as="h1" size="lg" mb={4}>Market Overview</Heading>
//       <Flex className="form-container" mb={4} align="center" justify="space-between">
//         <FormControl as="fieldset" className="radio-group">
//           <FormLabel as="legend">Currency</FormLabel>
//           <RadioGroup value={baseCurrency} onChange={setBaseCurrency}>
//             <Stack direction="row">
//               {['GBP', 'EUR', 'USD'].map(currency => (
//                 <Radio key={currency} value={currency}>{currency}</Radio>
//               ))}
//             </Stack>
//           </RadioGroup>
//         </FormControl>
//         <FormControl as="fieldset" className="select-group">
//           <FormLabel>Period</FormLabel>
//           <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
//             <option value="week">Week</option>
//             <option value="month">Month</option>
//           </Select>
//         </FormControl>
//       </Flex>
//       <Charts data={data} currencies={currencies} baseCurrency={baseCurrency} />
//     </Box>
//   );
// };

// export default ForexChart;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { format, subWeeks, subMonths } from 'date-fns';
// import {
//   Box,
//   Flex,
//   FormControl,
// //   FormLabel,
//   Heading,
//   Radio,
//   RadioGroup,
//   Select,
// //   Stack,
//   Text,
//   HStack,
// //   Switch,
// } from '@chakra-ui/react';
// import Charts from './Charts'; // Adjust the import path as needed

// const currencies = [
//   { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
//   { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
//   { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY'] },
// ];

// const ForexChart = () => {
//   const [data, setData] = useState([]);
//   const [baseCurrency, setBaseCurrency] = useState('GBP');
//   const [period, setPeriod] = useState('week');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

//   useEffect(() => {
//     const currentEndDate = new Date();
//     setEndDate(format(currentEndDate, 'yyyy-MM-dd'));

//     if (period === 'week') {
//       setStartDate(format(subWeeks(currentEndDate, 1), 'yyyy-MM-dd'));
//     } else {
//       setStartDate(format(subMonths(currentEndDate, 1), 'yyyy-MM-dd'));
//     }
//   }, [period]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries', {
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             from: baseCurrency,
//             to: 'EUR',
//           },
//           headers: {
//             'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//             'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
//           },
//         });

//         const responseData = response.data.rates;
//         const formattedData = Object.keys(responseData).map((date) => {
//           const filteredValues = {};
//           currencies.forEach((currency) => {
//             if (currency.search === baseCurrency) {
//               currency.convert.forEach((conv) => {
//                 if (responseData[date][conv] !== undefined) {
//                   filteredValues[conv] = responseData[date][conv];
//                 }
//               });
//             }
//           });
//           return {
//             name: date,
//             value: filteredValues,
//           };
//         });
//         setData(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     if (startDate && endDate) {
//       fetchData();
//     }
//   }, [startDate, endDate, baseCurrency]);

//   return (
//     <Box className="chart-container" p={4} bg="#0e1113" color="#f4f4f4">
//       <Flex justify="space-between" align="center" mb={4}>
//         <Heading as="h1" size="lg">
//           Market Overview
//         </Heading>
//         <Text>Pictorial monthly analytics of market.</Text>
//       </Flex>
//       <Flex className="form-container" mb={4} align="center" justify="space-between">
//         <FormControl as="fieldset" className="radio-group">
//           <RadioGroup value={baseCurrency} onChange={setBaseCurrency}>
//             <HStack spacing={4}>
//               {['GBP', 'EUR', 'USD'].map((currency) => (
//                 <Radio key={currency} value={currency} colorScheme="orange">
//                   {currency}
//                 </Radio>
//               ))}
//             </HStack>
//           </RadioGroup>
//         </FormControl>
//         <FormControl as="fieldset" className="select-group" width="200px">
//           <Select value={period} onChange={(e) => setPeriod(e.target.value)} colorScheme="orange">
//             <option value="week">Weekly</option>
//             <option value="month">Monthly</option>
//           </Select>
//         </FormControl>
//       </Flex>
//       <Charts data={data} currencies={currencies} baseCurrency={baseCurrency} />
//     </Box>
//   );
// };

// export default ForexChart;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { format, subWeeks, subMonths } from 'date-fns';
// import {
//   Box,
//   Flex,
//   FormControl,
//   Heading,
//   Radio,
//   RadioGroup,
//   Select,
//   Text,
//   HStack,
//   VStack,
// } from '@chakra-ui/react';
// import Charts from './Charts'; // Adjust the import path as needed

// const currencies = [
//   { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
//   { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
//   { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY'] },
// ];

// const ForexChart = () => {
//   const [data, setData] = useState([]);
//   const [baseCurrency, setBaseCurrency] = useState('GBP');
//   const [period, setPeriod] = useState('week');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

//   useEffect(() => {
//     const currentEndDate = new Date();
//     setEndDate(format(currentEndDate, 'yyyy-MM-dd'));

//     if (period === 'week') {
//       setStartDate(format(subWeeks(currentEndDate, 1), 'yyyy-MM-dd'));
//     } else {
//       setStartDate(format(subMonths(currentEndDate, 1), 'yyyy-MM-dd'));
//     }
//   }, [period]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries', {
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             from: baseCurrency,
//             to: 'EUR',
//           },
//           headers: {
//             'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//             'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
//           },
//         });

//         const responseData = response.data.rates;
//         const formattedData = Object.keys(responseData).map((date) => {
//           const filteredValues = {};
//           currencies.forEach((currency) => {
//             if (currency.search === baseCurrency) {
//               currency.convert.forEach((conv) => {
//                 if (responseData[date][conv] !== undefined) {
//                   filteredValues[conv] = responseData[date][conv];
//                 }
//               });
//             }
//           });
//           return {
//             name: date,
//             value: filteredValues,
//           };
//         });
//         setData(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     if (startDate && endDate) {
//       fetchData();
//     }
//   }, [startDate, endDate, baseCurrency]);

//   return (
    // <Box className="chart-container" p={4} bg="#0e1113" color="#f4f4f4">
    //   <Flex justify="space-between" align="center" mb={4} direction={{ base: 'column', md: 'row' }} textAlign={{ base: 'center', md: 'left' }}>
    //     <Heading as="h1" size="lg">
    //       Market Overview
    //     </Heading>
    //     <Text>Pictorial monthly analytics of market.</Text>
    //   </Flex>
    //   <VStack className="form-container" mb={4} align="stretch" spacing={4}>
    //     <FormControl as="fieldset" className="radio-group">
    //       <RadioGroup value={baseCurrency} onChange={setBaseCurrency}>
    //         <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
    //           {['GBP', 'EUR', 'USD'].map((currency) => (
    //             <Radio key={currency} value={currency} colorScheme="orange">
    //               {currency}
    //             </Radio>
    //           ))}
    //         </HStack>
    //       </RadioGroup>
    //     </FormControl>
    //     <FormControl as="fieldset" className="select-group" width={{ base: '100%', md: '200px' }}>
    //       <Select value={period} onChange={(e) => setPeriod(e.target.value)} colorScheme="orange">
    //         <option value="week">Weekly</option>
    //         <option value="month">Monthly</option>
    //       </Select>
    //     </FormControl>
    //   </VStack>
    //   <Charts data={data} currencies={currencies} baseCurrency={baseCurrency} />
    // </Box>
//   );
// };

// export default ForexChart;

// import { useCallback, useEffect, useState } from 'react';
// import axios from 'axios';
// import { format, subWeeks, subMonths } from 'date-fns';
// import {
//   Box,
//   Flex,
//   Heading,
//   Select,
//   Text,
//   // VStack,
//   FormControl,
//   HStack,
//   RadioGroup,
//   Radio,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import Charts from './Charts';

// const currencies = [
//   { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
//   { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
//   { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY'] },
// ];

// const ForexChart = () => {
//   const [data, setData] = useState([]);
//   const [baseCurrency, setBaseCurrency] = useState('GBP');
//   const [period, setPeriod] = useState('week');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

//   const isMobile = useBreakpointValue({base: true, lg: false});

//   useEffect(() => {
//     const currentEndDate = new Date();
//     setEndDate(format(currentEndDate, 'yyyy-MM-dd'));

//     if (period === 'week') {
//       setStartDate(format(subWeeks(currentEndDate, 1), 'yyyy-MM-dd'));
//     } else {
//       setStartDate(format(subMonths(currentEndDate, 1), 'yyyy-MM-dd'));
//     }
//   }, [period]);


//   // for the graph in laptop screen sizes
//    const fetchTimeseriesData = useCallback(async () => {
//       try {
//         const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries', {
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             base: baseCurrency,
//           },
//           headers: {
//             'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//             'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
//           },
//         });

//         const responseData = response.data.rates;
//         const formattedData = Object.keys(responseData).map((date) => {
//           const filteredValues = {};
//           currencies.forEach((currency) => {
//             if (currency.search === baseCurrency) {
//               currency.convert.forEach((conv) => {
//                 if (responseData[date][conv] !== undefined) {
//                   filteredValues[conv] = responseData[date][conv];
//                 }
//               });
//             }
//           });
//           return {
//             name: date,
//             value: filteredValues,
//           };
//         });
//         setData(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }, [baseCurrency, endDate, startDate]);

//     console.log(data)

//     // for the table in mobile
    
//     const fetchLatestData = useCallback(async (baseCurrency, setData) => {
//       try {
//         const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest', {
//           params: {
//             base: baseCurrency,
//           },
//           headers: {
//             'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//             'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
//           },
//         });
    
//         const responseData = response.data.rates;
//         const currencyConfig = currencies.find(currency => currency.search === baseCurrency);

//         console.log(currencyConfig, baseCurrency)

//         if (!currencyConfig) {
//           console.error('Invalid base currency:', baseCurrency);
//           return;
//         }
    
//         if (currencyConfig) {
//           const formattedData = Object.keys(responseData)
//             .filter(currency => currencyConfig.convert.includes(currency))
//             .map(currency => ({
//               name: currency,
//               value: responseData[currency],
//             }));
    
//           console.log(formattedData);
    
//           setData(formattedData);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }, []);
    

//   useEffect(() => {
//     if(isMobile){
//       fetchLatestData(baseCurrency, setData);
//     }
//     else{
//       if (startDate && endDate) {
//         fetchTimeseriesData();
//       }
//     }
//   }, [startDate, endDate, baseCurrency, fetchTimeseriesData, isMobile, fetchLatestData]);

//   console.log(isMobile);

//   return (
//     <>
//       {isMobile ? <Box className="chart-container" p={4} bg="#0e1113" color="#f4f4f4">
//       <Heading as="h1" size="lg" mb={4}>
//         Recent Trading Activities
//       </Heading>
//       <Text mb={4} textAlign={"center"}>Lorem ipsum is placeholder text commonly.</Text>
//       {/* <Flex justify="center" mb={4}>
//       <RadioGroup onChange={(e) => setBaseCurrency(e.target.value)} value={baseCurrency}>
//         <Radio value="EUR" colorScheme="orange" mr={4}>EUR</Radio>
//         <Radio value="GBP" colorScheme="orange" mr={4}>GBP</Radio>
//         <Radio value="USD" colorScheme="orange">USD</Radio>
//       </RadioGroup>
//     </Flex> */}
//      <RadioGroup value={baseCurrency} onChange={setBaseCurrency} mb = {8}>
//             <HStack spacing={4} justify={{ base: 'center'}}>
//               {['GBP', 'EUR', 'USD'].map((currency) => (
//                 <Radio key={currency} value={currency} colorScheme="orange">
//                   {currency}
//                 </Radio>
//               ))}
//             </HStack>
//           </RadioGroup>
//           <Table variant="simple" colorScheme="whiteAlpha">
//       <Thead>
//         <Tr>
//           <Th color="#f4f4f4">Name</Th>
//           <Th color="#f4f4f4">Rates</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {data.map((item) => (
//           <Tr key={item.name}>
//             <Td>{item.name}</Td>
//             <Td>{item.value}</Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//     </Box>
//     :<Box className="chart-container" p={10} bg="#0e1113" color="#f4f4f4">
//       <Box px = {12}>
//         <Flex justify="space-between" align="center" mb={4} direction={"column"} textAlign={"center"}>
//           <Heading as="h1" size="lg">
//             Market Overview
//           </Heading>
//           <Text>Pictorial monthly analytics of market.</Text>
//         </Flex>
//         <HStack justify={"center"} mb={8} align="center" spacing={4}>
//           <FormControl as="fieldset" className="radio-group">
//             <RadioGroup value={baseCurrency} onChange={setBaseCurrency}>
//               <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
//                 {['GBP', 'EUR', 'USD'].map((currency) => (
//                   <Radio key={currency} value={currency} colorScheme="green">
//                     {currency}
//                   </Radio>
//                 ))}
//               </HStack>
//             </RadioGroup>
//           </FormControl>
//           <FormControl as="fieldset" className="select-group" width={{ base: '100%', md: '200px' }}>
//             <Select value={period} onChange={(e) => setPeriod(e.target.value)} colorScheme="green">
//               <option value="week">Weekly</option>
//               <option value="month">Monthly</option>
//             </Select>
//           </FormControl>
//         </HStack>
//         </Box>
//       <Charts data={data} currencies={currencies} baseCurrency={baseCurrency} />
//     </Box>
//   }
//     </>
//   );
// };

// export default ForexChart;


import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { format, subWeeks, subMonths } from 'date-fns';
import {
  Box,
  Flex,
  Heading,
  Select,
  Text,
  FormControl,
  HStack,
  RadioGroup,
  Radio,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import Charts from './Charts';

const currencies = [
  { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
  { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY'] },
  { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY'] },
];

const ForexChart = () => {
  const [data, setData] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('GBP');
  const [period, setPeriod] = useState('week');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const currentEndDate = new Date();
    setEndDate(format(currentEndDate, 'yyyy-MM-dd'));

    if (period === 'week') {
      setStartDate(format(subWeeks(currentEndDate, 1), 'yyyy-MM-dd'));
    } else {
      setStartDate(format(subMonths(currentEndDate, 1), 'yyyy-MM-dd'));
    }
  }, [period]);

  const fetchTimeseriesData = useCallback(async () => {
    try {
      const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries', {
        params: {
          start_date: startDate,
          end_date: endDate,
          base: baseCurrency,
        },
        headers: {
          'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
          'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        },
      });

      const responseData = response.data.rates;
      const formattedData = Object.keys(responseData).map((date) => {
        const filteredValues = {};
        currencies.forEach((currency) => {
          if (currency.search === baseCurrency) {
            currency.convert.forEach((conv) => {
              if (responseData[date][conv] !== undefined) {
                filteredValues[conv] = responseData[date][conv];
              }
            });
          }
        });
        return {
          name: date,
          value: filteredValues,
        };
      });
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [baseCurrency, endDate, startDate]);

  const fetchLatestData = useCallback(async () => {
    try {
      const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest', {
        params: {
          base: baseCurrency,
        },
        headers: {
          'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
          'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        },
      });

      const responseData = response.data.rates;
      const currencyConfig = currencies.find((currency) => currency.search === baseCurrency);

      if (!currencyConfig) {
        console.error('Invalid base currency:', baseCurrency);
        return;
      }

      const formattedData = Object.keys(responseData)
        .filter((currency) => currencyConfig.convert.includes(currency))
        .map((currency) => ({
          name: currency,
          value: responseData[currency],
        }));

      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [baseCurrency]);

  useEffect(() => {
    if (isMobile) {
      fetchLatestData();
    } else {
      if (startDate && endDate) {
        fetchTimeseriesData();
      }
    }
  }, [startDate, endDate, baseCurrency, fetchTimeseriesData, isMobile, fetchLatestData]);

  return (
    <>
      {isMobile ? (
        <Box className="chart-container" p={4} bg="#0e1113" color="#f4f4f4">
          <Heading as="h1" size="lg" mb={4}>
            Recent Trading Activities
          </Heading>
          <Text mb={4} textAlign="center">
            Lorem ipsum is placeholder text commonly.
          </Text>
          <RadioGroup value={baseCurrency} onChange={setBaseCurrency} mb={8}>
            <HStack spacing={4} justify="center">
              {['GBP', 'EUR', 'USD'].map((currency) => (
                <Radio key={currency} value={currency} colorScheme="orange">
                  {currency}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          <Table variant="simple" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color="#f4f4f4">Name</Th>
                <Th color="#f4f4f4">Rates</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item.name}>
                  <Td>{item.name}</Td>
                  <Td>{item.value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Box className="chart-container" p={10} bg="#0e1113" color="#f4f4f4">
          <Box px={12}>
            <Flex justify="space-between" align="center" mb={4} direction="column" textAlign="center">
              <Heading as="h1" size="lg">
                Market Overview
              </Heading>
              <Text>Pictorial monthly analytics of market.</Text>
            </Flex>
            <HStack justify="center" mb={8} align="center" spacing={4}>
              <FormControl as="fieldset" className="radio-group">
                <RadioGroup value={baseCurrency} onChange={setBaseCurrency}>
                  <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
                    {['GBP', 'EUR', 'USD'].map((currency) => (
                      <Radio key={currency} value={currency} colorScheme="green">
                        {currency}
                      </Radio>
                    ))}
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl as="fieldset" className="select-group" width={{ base: '100%', md: '200px' }}>
                <Select value={period} onChange={(e) => setPeriod(e.target.value)} colorScheme="green">
                  <option value="week">Weekly</option>
                  <option value="month">Monthly</option>
                </Select>
              </FormControl>
            </HStack>
          </Box>
          <Charts data={data} currencies={currencies} baseCurrency={baseCurrency} />
        </Box>
      )}
    </>
  );
};

export default ForexChart;