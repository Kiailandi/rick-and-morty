import { useQuery } from '@tanstack/react-query';
import { fetchLocation } from '../api/api';

export const Location = ({ label, location }) => {
  const locationId = location.url.replace(/.*\//, '');
  const {
    data,
    error,
    status
  } = useQuery({
    queryKey: ['location', locationId],
    queryFn: fetchLocation
  });

  return (
    <div data-cy={`cy-location-${locationId}`}>
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
              <p>{label}: {data.name ?? 'Unknown'}</p>
            </>
            )}
    </div>
  );
};
