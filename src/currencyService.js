// import axios from 'axios';

// const API_URL = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/';
// const API_HEADERS = {
//   'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//   'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
// };

// export const fetchCurrencyRates = async (search, convert) => {
//     const requests = convert.map(target =>
//       axios.get(`${API_URL}latest`, {
//         params: { base: search, symbols: target },
//         headers: API_HEADERS
//       })
//     );
  
//     try {
//       const responses = await Promise.all(requests);
//       return responses.map((response, index) => ({
//         target: convert[index],
//         value: response.data.rates[convert[index]]
//       }));
//     } catch (error) {
//       console.error(`Failed to fetch data for ${search}:`, error);
//       return [];
//     }
//   };


import axios from 'axios';
import { format, subWeeks, subMonths } from 'date-fns';

// const API_URL = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/';
// const API_HEADERS = {
//   'x-rapidapi-key': 'a4ac6b344bmsh66cf8220ccc5356p1025b7jsnaff02ccc3427',
//   'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
// };

const FOREX_API_URL = `${import.meta.env.VITE_API_URL_BASE}`;
const FOREX_API_KEY = `${import.meta.env.VITE_API_KEY}`;

export const fetchCurrencyRates = async (search, convert, filter) => {
  if (filter === 'daily') {
    const requestUrl = `${FOREX_API_URL}latest?api_key=${FOREX_API_KEY}&base=${search}&currencies=${convert.join(',')}`;

    console.log(requestUrl);
    try {
      const response = await axios.get(requestUrl);
      return convert.map(target => ({
        target,
        value: response.data.rates[target]
      }));
    } catch (error) {
      console.error(`Failed to fetch daily data for ${search}:`, error);
      return [];
    }
  } else {
    const endDate = new Date();
    const startDate = filter === 'oneWeek' ? subWeeks(endDate, 1) : subMonths(endDate, 1);
    const formattedStartDate = format(startDate, 'yyyy-MM-dd');
    const formattedEndDate = format(endDate, 'yyyy-MM-dd');
    // const requests = convert.map(target => {
      // const requestUrl = `${FOREX_API_URL}timeframe?api_key=${FOREX_API_KEY}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&base=${search}&currencies=${target}`;
    //   console.log(requestUrl)
    //   return axios.get(requestUrl);
    // });

    const requestUrl = `${FOREX_API_URL}timeframe?api_key=${FOREX_API_KEY}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&base=${search}&currencies=${convert.join(",")}`;
    console.log(requestUrl);
    try {
      const responses = await axios.get(requestUrl);
      return responses.map((response, index) => ({
        target: convert[index],
        value: response.data.rates[formattedEndDate][convert[index]]
      }));
    } catch (error) {
      console.error(`Failed to fetch timeframe data for ${search}:`, error);
      return [];
    }
  }
};
