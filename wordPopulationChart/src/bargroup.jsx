import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

 const data = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

  const formatPopulation = (value) => {
    return value.toLocaleString();
  };
  
  const BarChartComponent = () => {
    return (
      <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" angle={-45} textAnchor="end" height={100} />
        <YAxis />
        <Tooltip formatter={formatPopulation} />
        <Legend />
        <Bar dataKey="population" fill="#8884d8" />
      </BarChart>
    );
  };

export default BarChartComponent;
