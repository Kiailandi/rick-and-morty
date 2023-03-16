import { Typography } from 'antd';

const { Text } = Typography;

export const Episode = ({ episode }) => {
  return (
    <Text italic data-cy={`cy-episode-${episode.id}`}>{episode.name}</Text>
  );
};
