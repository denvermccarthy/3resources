import React, { useState, useEffect } from 'react';

export default function Families() {
  const [families, setFamilies] = useState([]);
  useEffect(() => {
    const fetch = () => {
      try {
        console.log('families');
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return <div>Families</div>;
}
