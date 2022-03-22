export async function fetchFoods(query) {
  const params = new URLSearchParams();
  params.set('select', '*');
  if (query !== '') {
    params.set('name', `ilike.%${query}%`);
  }
  const url = `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/breakfast_foods?${params.toString()}`;
  const resp = await fetch(url, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
