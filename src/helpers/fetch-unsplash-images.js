import { buildURL } from '@helpers';

export const fetchUnsplashImages = async (query) => {
  const params = { client_id: process.env.API_KEY, per_page: 30, query };
  const url = buildURL('https://api.unsplash.com/search/photos', params);
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
