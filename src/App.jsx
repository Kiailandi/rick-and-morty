import './App.css';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { CharactersList } from './components/CharactersList';

const queryClient = new QueryClient();

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersList />
    </QueryClientProvider>
  );
}

export default App;
