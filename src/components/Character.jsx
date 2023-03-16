import { Location } from './Location';
import { EpisodesList } from './EpisodesList';

export const Character = ({ character }) => {
  const {
    name = '',
    origin,
    location: currentLocation,
    episode: episodes
  } = character;
  return (
    <div data-cy={`cy-character-${character.id}`}>
      <p>Name: {name}</p>
      <Location label='Origin location' location={origin} />
      <Location label='Current location' location={currentLocation} />
      <EpisodesList episodesList={episodes} />
    </div>
  );
};
