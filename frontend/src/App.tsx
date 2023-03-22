import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieList from './MovieLists';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <MovieList />
      </div>
    </QueryClientProvider>
  );
}

export default App;

