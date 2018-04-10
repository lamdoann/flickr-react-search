import axios from 'axios';

const baseUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

export async function fetchPhotos(input) {
  const url = `${baseUrl}&tags=${input}`;
  const { data } = await axios.get(url);
  return data.items;
}
