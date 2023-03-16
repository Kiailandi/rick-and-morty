export const Episode = ({ episode }) => {
  return (
    <p data-cy={`cy-episode-${episode.id}`}>{episode.name}</p>
  );
};
