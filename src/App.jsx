import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { fetchCharacters } from './api/api';
import './App.css';

const Characters = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data?.results?.map((character) => (
        <div key={character.id}>
          <div>
            <p>{character.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const queryClient = new QueryClient();

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}

export default App;
