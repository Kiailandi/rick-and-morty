import { useQuery } from '@tanstack/react-query';
import { Typography } from 'antd';
import { fetchLocation } from '../api/api';

const { Title } = Typography;

const LocationInfo = ({ location }) => {
  const {
    name,
    type,
    dimension,
    residents
  } = location;

  return (
    <>
      <p><b>Name:</b> {name ?? 'Unknown'}</p>
      <p><b>Type:</b> {type ?? 'Unknown'}</p>
      <p><b>Dimension:</b> {dimension ?? 'Unknown'}</p>
      <p><b>Amount of residents:</b> {residents?.length ?? 'Unknown'}</p>
    </>
  );
};

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
      <Title level={5}>{label}</Title>
      {status === 'loading'
        ? (
          <p>Loading...</p>
          )
        : status === 'error'
          ? (
            <p>Error: {error.message}</p>
            )
          : (
            <LocationInfo label={label} location={data} />
            )}
    </div>
  );
};
