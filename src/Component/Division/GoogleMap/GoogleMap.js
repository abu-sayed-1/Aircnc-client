// import { GoogleApiWrapper, Map } from 'google-maps-react';
// import React from 'react';
// {/* https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2 */ }


// const GoogleMap = () => {
//     const mapStyle = {
//         width: '100%',
//         height: '100%'
//     }
//     return (
//         <>
//             <h1>this is Google Map</h1>
//             <Map
//                 google={this.props.google}
//                 zoom={8}
//                 style={mapStyle}
//                 initialCenter={{ lat: 47.444, lng: -122.176 }}
//             />
//         </>
//     );
// };

// export default GoogleApiWrapper({
//     apiKey: 'Token'
// })(GoogleMap);


import React from 'react';

const GoogleMap = () => {
    return (
        <div>
            <h1>this is Google Map</h1>
        </div>
    );
};

export default GoogleMap;