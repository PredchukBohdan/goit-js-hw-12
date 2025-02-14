import axios from 'axios';

export default function axiosReguest(value) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '48820344-d1ffc058fda0b82549bb04a16';
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
