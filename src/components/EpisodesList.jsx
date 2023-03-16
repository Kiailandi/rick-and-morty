import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { List, Typography } from 'antd';
import { fetchEpisodes } from '../api/api';
import { Episode } from './Episode';

const { Title } = Typography;

const renderEpisode = (episode) => {
  return (
    <List.Item key={episode.id} style={{ justifyContent: 'center' }}>
      <Episode episode={episode} />
    </List.Item>
  );
};

export const EpisodesList = ({ episodesList }) => {
  const episodesIds = useMemo(
    () => episodesList.map(episodeUrl => episodeUrl.replace(/.*\//, '')).join(','),
    [episodesList]
  );
  const {
    data,
    error,
    status
  } = useQuery({
    queryKey: ['episodes', episodesIds],
    queryFn: fetchEpisodes
  });

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
            <>
              <Title level={4}>Episodes:</Title>
              <List
                itemLayout='horizontal'
                dataSource={Array.isArray(data) ? data : [data]}
                renderItem={renderEpisode}
              />
            </>
            )}
    </div>
  );
};
