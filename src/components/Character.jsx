import { Location } from './Location';

export const Character = ({ character }) => {
  const {
    name = '',
    origin,
    location: currentLocation
  } = character;

  return (
    <div data-cy={`cy-character-${character.id}`}>
      <p>Name: {name}</p>
      <Location label='Origin location' location={origin} />
      <Location label='Current location' location={currentLocation} />
    </div>
  );
};
