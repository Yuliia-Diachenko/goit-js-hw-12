import {searchImgs } from '../main';

export function fetchImg() {
  const searchParams = new URLSearchParams({
    key: '42993969-e1e40ca3c1daeface777227d4',    
    q: searchImgs,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}