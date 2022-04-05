import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useChart from '../../hooks/usechart';
const MyLineChart = () => {
    const [useReChart, setUseReChart] = useChart();
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={useReChart}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default MyLineChart;