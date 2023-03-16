import { Card } from 'antd';
import { Location } from './Location';
import { EpisodesList } from './EpisodesList';
const { Meta } = Card;

export const Character = ({ character }) => {
  const {
    name,
    status,
    species,
    gender,
    origin,
    location: currentLocation,
    episode: episodes,
    image
  } = character;
  return (
    <Card
      hoverable
      style={{
        width: 240,
        margin: 20
      }}
      cover={<img alt='character image' src={image} />}
      data-cy={`cy-character-${character.id}`}
    >
      <Meta
        title={name}
        description={
          <>
            <p><b>Status:</b> {status}</p>
            <p><b>Species:</b> {species}</p>
            <p><b>Gender:</b> {gender}</p>
            <Location label='Origin location' location={origin} />
            <Location label='Current location' location={currentLocation} />
          </>
      }
      />
      <EpisodesList episodesList={episodes} />
    </Card>

  );
};
