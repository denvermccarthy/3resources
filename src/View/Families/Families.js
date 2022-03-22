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
  return <div>Families</div>;
}
