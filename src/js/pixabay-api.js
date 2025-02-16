import axios from 'axios';

export default async function axiosReguest(value, page, limit) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '48820344-d1ffc058fda0b82549bb04a16';

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
