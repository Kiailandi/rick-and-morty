export const fetchCharacters = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`);
  if (!response.ok) {
    throw new Error('Unable to fetch characters');
  } else {
    return response.json();
  }
};
