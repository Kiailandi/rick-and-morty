import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchEpisodes } from '../api/api';
import { Episode } from './Episode';

export const EpisodesList = ({ episodesList }) => {
  const episodesIds = episodesList.map(episodeUrl => episodeUrl.replace(/.*\//, '')).join(',');
  const {
    data,
    error,
    status
  } = useQuery({
    queryKey: ['episodes', episodesIds],
    queryFn: fetchEpisodes
  });

  const renderEpisodesList = useCallback((episodes) => {
    if (Array.isArray(episodes)) {
      return episodes.map(episode => <Episode key={episode.id} episode={episode} />);
    } else {
      return <Episode key={episodes.id} episode={episodes} />;
    }
  }, [data, episodesIds]);

  return (
    <div data-cy={`cy-episodes-${episodesIds}`}>
      {status === 'loading'
        ? (
          <p>Loading...</p>
          )
        : status === 'error'
          ? (
            <p>Error: {error.message}</p>
            )
          : (
            <div>
              <p>Episodes: </p>
              {renderEpisodesList(data)}
            </div>
            )}
    </div>
  );
};
