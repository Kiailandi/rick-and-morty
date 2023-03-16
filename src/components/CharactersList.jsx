import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Col, Row } from 'antd';
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
            <Row key={i} span={{ sm: 12, md: 24, lg: 32 }} gutter={[24, 24]} justify='space-around' align='top'>
              {page.results.map((character) => (
                <Col key={character.id} sm={12} md={6} lg={6} justify='space-around' align='middle'>
                  <Character
                    character={character}
                  />
                </Col>
              ))}
            </Row>
          ))}
          <Row justify='space-around' align='middle'>
            <Col>
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
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col>
              {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </Col>
          </Row>
        </>
        );
};
