import React, { useState, useEffect } from 'react';
import { fetchFoods } from '../../services/breakfastFoods';

export default function Breakfast() {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchFoods();
        setBreakfast(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return <div>Breakfast</div>;
}
