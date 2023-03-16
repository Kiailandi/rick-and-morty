const baseUrl = 'https://rickandmortyapi.com/api/';
const characterUrl = `${baseUrl}character/`;
const locationUrl = `${baseUrl}location/`;
const episodeUrl = `${baseUrl}episode/`;

export const fetchCharacters = async ({ pageParam = 1 }) => {
  const response = await fetch(`${characterUrl}?page=${pageParam}`);
  if (!response.ok) {
    throw new Error('Unable to fetch characters');
  } else {
    return response.json();
  }
};

export const fetchLocation = async ({ queryKey }) => {
  const query = queryKey[1];
  const response = await fetch(`${locationUrl}${query}`);
  if (!response.ok) {
    throw new Error('Unable to fetch location');
  } else {
    return response.json();
  }
};

export const fetchEpisodes = async ({ queryKey }) => {
  const query = queryKey[1];
  const response = await fetch(`${episodeUrl}${query}`);
  if (!response.ok) {
    throw new Error('Unable to fetch episodes');
  } else {
    return response.json();
  }
};
