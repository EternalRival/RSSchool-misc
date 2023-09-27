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

const setupSearch = (galleryRoot, searchInput) => {
  const getCachedImages = createImagesCache();

  const handleInput = async ({ target: { value } }) => {
    const query = value.trim();
    const images = await getCachedImages(query);
    const listToRender = images.length > 0 ? images : [placeholder(`No content for query "${query}" found :(`)];
    galleryRoot.replaceChildren(...listToRender);
  };
  const handleInputDebounced = debounce(handleInput, 1000);

  searchInput.addEventListener('input', handleInputDebounced);
  searchInput.dispatchEvent(new InputEvent('input'));
  searchInput.focus();
};

const setupColors = (colorInput) => {
  const colorKey = '[ER]ImageGalleryMainColor';

  colorInput.oninput = ({ target: { value } }) => {
    document.body.style.setProperty('--main-color', value);
  };
  window.addEventListener('beforeunload', () => {
    localStorage[colorKey] = colorInput.value;
  });

  colorInput.value = localStorage[colorKey] ?? '#ffa500';
  colorInput.dispatchEvent(new InputEvent('input'));
};

render(document.body, elements);

setupSearch(elements.gallery, elements.search);
setupColors(elements.fab);
