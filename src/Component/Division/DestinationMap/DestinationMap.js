import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '150rem'
};

const location = {
  lat: 23.732743, lng: 90.429040
};

function DestinationMap() {
  const [directionRes, setDirectionRes] = useState(null);
  const destination = JSON.parse(sessionStorage.getItem('countryAndCity'));
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD2-nrDZp4YnXXjvkFcrJlF8Ap2V-10P50"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >
        {
          destination[0].country !== '' && <DirectionsService
            options={{
              destination: destination[0].country,
              origin: 'Dhaka',
              travelMode: 'DRIVING'
            }}
            callback={res => {
              if (res !== null) {
                setDirectionRes(res);
              }
            }}
          />
        }

        {
          directionRes && <DirectionsRenderer
            options={{
              directions: directionRes
            }}
          />
        }
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(DestinationMap);