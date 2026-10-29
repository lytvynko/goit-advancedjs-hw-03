import axios from 'axios';

// Paste your key from https://pixabay.com/api/docs/
const API_KEY = '58303341-638c410ebb1bf44bb21757c0a';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
