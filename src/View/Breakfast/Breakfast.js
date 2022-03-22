import React, { useState, useEffect } from 'react';
import Search from '../../Components/Search/Search';
import { fetchFoods } from '../../services/breakfastFoods';

export default function Breakfast() {
  const [breakfast, setBreakfast] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchFoods(query);
        setBreakfast(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, [query]);

  return (
    <div>
      <Search setter={setQuery} />
      {breakfast.map((item) => (
        <div key={item.id}>
          <h3>
            {item.name}, Tier: {item.tier}
          </h3>
          <p>{item.about}</p>
        </div>
      ))}
    </div>
  );
}
