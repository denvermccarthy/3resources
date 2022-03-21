import React, { useState, useEffect } from 'react';

export default function Breakfast() {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    const fetch = () => {
      try {
        console.log('breakfast');
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return <div>Breakfast</div>;
}
