import { fetchUnsplashImages } from '@helpers';
import { createImage } from '@components';
import { placeholder } from '../components/placeholder/placeholder';

export const createImagesCache = () => {
  const cache = new Map();
  cache.set('', [placeholder(`Type something ;)`)]);

  const getImages = async (query) => {
    const { results } = await fetchUnsplashImages(query);
    const list = results.map(({ alt_description, urls }) => createImage({ src: urls.small, alt: alt_description }));
    cache.set(query, list);
    return list;
  };

  return (query) => cache.get(query) ?? getImages(query);
};
