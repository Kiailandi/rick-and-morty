import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/api';
import { getNextPageParam } from '../api/utils';
import { Character } from './Character';

export const CharactersList = () => {
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
                <Character
                  key={character.id}
                  character={character}
                />
              ))}
            </React.Fragment>
          ))}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              data-cy='cy-load-more'
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
