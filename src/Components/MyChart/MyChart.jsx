import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useChart from '../../hooks/usechart';
const MyChart = () => {
    const [useReChart, setUseReChart] = useChart();
    return (
        <div>
                <BarChart
          width={500}
          height={300}
          data={useReChart}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default MyChart;
