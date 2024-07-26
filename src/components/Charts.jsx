// /* eslint-disable react/prop-types */
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const Charts = ({ data, currencies, baseCurrency }) => {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
//         <XAxis dataKey="name" stroke="#ccc" />
//         <YAxis stroke="#ccc" />
//         <Tooltip />
//         <Legend />
//         {currencies.find(currency => currency.search === baseCurrency).convert.map((currency, index) => (
//           <Line key={index} type="monotone" dataKey={`value.${currency}`} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
//         ))}
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default Charts;


/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ data, currencies, baseCurrency }) => {
  return (
    <ResponsiveContainer width="100%" height={400} >
      <BarChart data={data} margin={{ top: 5, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        {currencies.find(currency => currency.search === baseCurrency).convert.map((currency, index) => (
          <Bar key={index} dataKey={`value.${currency}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;