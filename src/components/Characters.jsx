import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/api';
import { getNextPageParam } from '../api/utils';

export const Characters = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    getNextPageParam
  });

  return status === 'loading'
    ? (
      <p>Loading...</p>
      )
    : status === 'error'
      ? (
        <p>Error: {error.message}</p>
        )
      : (
        <>
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((character) => (
                <div key={character.id} id={`cy-character-${character.id}`}>
                  <div>
                    <p>Name: {character.name}</p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
        );
};
