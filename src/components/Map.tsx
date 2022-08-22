import React, {useState} from 'react'
import {
  LoadScript,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
import {useMapData} from "../MapDataProvider"

type Props = {
  GOOGLE_API_KEY: string;
}

const Map: React.FC<Props> = ({GOOGLE_API_KEY}) => {
  const {mapData} = useMapData();
  console.log(mapData.location);
  const containerStyle = {
    width: '300px',
    height: '300px'
  };
  return (
    <>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={mapData.location} zoom={13}>
          <Marker key={mapData.place_id} position={mapData.location} />
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default Map