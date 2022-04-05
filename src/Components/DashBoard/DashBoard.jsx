import React from 'react';
import MyChart from '../MyChart/MyChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const DashBoard = () => {
    return (
        <div className="py-5">
            <MyLineChart></MyLineChart>
            <MyChart></MyChart>
        </div>
    );
};

export default DashBoard;