import axios from 'axios';
import { limit, page } from '../main';

export async function fetchImages(query) {
  query = encodeURIComponent(query);
  const myApiKey = '42993969-e1e40ca3c1daeface777227d4';
  const params = new URLSearchParams({
    per_page: limit,
    page: page,
    key: myApiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}`
  );
  return response.data;
}