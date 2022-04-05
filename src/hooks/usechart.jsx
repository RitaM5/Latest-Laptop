import React, { useEffect, useState } from 'react';
//hooks
const useChart = () => {
  const [useReChart, setUseReChart] = useState([]);
  useEffect(() =>{
      fetch('')
      .then(res => res.json('data.json'))
      .then(data => setUseReChart(data));
      console.log(data);
  }, []);
  return [useReChart, setUseReChart];
};

export default useChart;
