import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAYcpx0i7X_mqmkfp-tTdplWiFvqok2eYE',
        language: 'en',
      }}
      onFail={err => console.log("onFail", err)}
      onNotFound={err => console.log("onNotFound", err)}
    />
  );
};

export default GooglePlacesInput;