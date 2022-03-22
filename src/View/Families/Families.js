import React, { useState, useEffect } from 'react';
import { fetchFamilies } from '../../services/lovingFamilies';

export default function Families() {
  const [families, setFamilies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchFamilies();
        setFamilies(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {families.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
