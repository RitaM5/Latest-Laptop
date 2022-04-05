import React, { useEffect, useState } from 'react';
//hooks
const useLaptop = () => {
  const [reviewLaptop, setReviewLaptop] = useState([]);
  useEffect(() =>{
      fetch('laptop.json')
      .then(res => res.json())
      .then(data => setReviewLaptop(data));
  }, []);
  return [reviewLaptop, setReviewLaptop];
};

export default useLaptop;