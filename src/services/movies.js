export async function fetchMovies() {
  const params = new URLSearchParams();
  params.set('select', '*');
  const url = `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/movies?${params.toString()}`;
  const resp = await fetch(url, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
