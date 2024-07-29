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
  { search: 'EUR', convert: ['USD', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY', 'AUD'] },
  { search: 'USD', convert: ['EUR', 'AUD', 'CAD', 'CHF', 'GBP', 'INR', 'JPY', 'AUD'] },
  { search: 'GBP', convert: ['USD', 'AUD', 'CAD', 'CHF', 'EUR', 'INR', 'JPY', 'AUD'] },
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