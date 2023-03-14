export const fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  if (!response.ok) {
    throw new Error('Unable to fetch characters');
  } else {
    return response.json();
  }
};
