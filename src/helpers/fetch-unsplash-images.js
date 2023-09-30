const baseURL = 'https://api.unsplash.com';
const endpoint = '/search/photos';
const staticParams = new Map([
  ['client_id', process.env.API_KEY],
  ['per_page', 30],
]);

export const fetchUnsplashImages = async (query) => {
  const url = new URL(endpoint, baseURL);
  staticParams.forEach((value, key) => url.searchParams.set(key, value));

  url.searchParams.set('query', query);
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
