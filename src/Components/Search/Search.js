import React, { useEffect, useState } from 'react';

export default function Search({ setter }) {
  const [debounced, setDebounced] = useState('');
  useEffect(() => {
    const searchTimer = setTimeout(() => setter(debounced), 500);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [debounced, setter]);
  return <input type={'text'} value={debounced} onChange={(e) => setDebounced(e.target.value)} />;
}
