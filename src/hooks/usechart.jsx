import React, { useEffect, useState } from 'react';
//hooks
const useChart = () => {
  const [useReChart, setUseReChart] = useState([]);
  useEffect(() =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setUseReChart(data));
  }, []);
  return [useReChart, setUseReChart];
};

export default useChart;
