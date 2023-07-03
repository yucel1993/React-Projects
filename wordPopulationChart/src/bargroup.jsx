import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from "./data"


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
