import { checkError, client } from './client';

export async function getJokes() {
  const resp = await client.from('jokes').select('*, genre_id (*)');
  return checkError(resp);
}
