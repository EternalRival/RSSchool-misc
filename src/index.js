import '@assets/styles.scss';
import { createImagesCache, debounce } from '@helpers';
import { createFAB, createLogo, createSearch, createHeader, createMain, createGallery, placeholder } from '@components';

const elements = {
  fab: createFAB(),
  header: createHeader(),
  main: createMain(),
  logo: createLogo(),
  search: createSearch(),
  gallery: createGallery(),
};

const render = (root, elements) => {
  const { fab, header, main, logo, search, gallery } = elements;

  root.append(fab, header, main);
  header.append(logo, search);
  main.append(gallery);
};

const setupGallery = (galleryRoot) => {
  const getCachedImages = createImagesCache();

  const handlePopState = async () => {
    const url = new URL(location.href);
    const query = url.searchParams.get('query') ?? '';
    const images = await getCachedImages(query.trim());

    const listToRender = images.length > 0 ? images : [placeholder(`No content for query "${query}" found :(`)];
    galleryRoot.replaceChildren(...listToRender);
  };

  addEventListener('popstate', handlePopState);
  dispatchEvent(new PopStateEvent('popstate'));
};

const setupSearch = (searchInput) => {
  const handleInput = ({ target: { value } }) => {
    const query = value.trim();
    const url = new URL(location.href);

    if (query) {
      url.searchParams.set('query', query);
    } else {
      url.searchParams.delete('query');
    }

    history.pushState(null, null, url);
    dispatchEvent(new PopStateEvent('popstate'));
  };
  const handleInputDebounced = debounce(handleInput, 1000);

  searchInput.value = new URLSearchParams(location.search).get('query');
  searchInput.addEventListener('input', handleInputDebounced);
  searchInput.focus();
};

const setupColors = (colorInput) => {
  const colorKey = '[ER]ImageGalleryMainColor';

  const handleInput = ({ target: { value } }) => document.body.style.setProperty('--main-color', value);

  colorInput.value = localStorage[colorKey] ?? '#ffa500';
  colorInput.addEventListener('input', handleInput);
  colorInput.dispatchEvent(new InputEvent('input'));

  const handleBeforeUnload = () => (localStorage[colorKey] = colorInput.value);

  addEventListener('beforeunload', handleBeforeUnload);
};

const setupEasterEggRotate = (button, list) => {
  const toggleRotate = (el) => el.classList.toggle('easter-egg-rotate');
  button.addEventListener('click', () => Array.from(list).forEach(toggleRotate));
};

addEventListener('DOMContentLoaded', () => {
  render(document.body, elements);

  setupSearch(elements.search);
  setupGallery(elements.gallery);
  setupColors(elements.fab);
  setupEasterEggRotate(elements.logo, elements.gallery.children);
});
