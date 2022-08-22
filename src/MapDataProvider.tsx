import React, {createContext, useState, useCallback, useContext} from "react";

type Position = {
  location: {lat: number, lng: number};
  place_id: string;
};

type ThemeContext = {
  mapData : Position,
  inputVal: string,
  handleSetPosition: (current: Position) => void,
  handleSetVal: (current: string) => void
}

const defaulContext: ThemeContext = {
  mapData: {
    location: {lat:0, lng: 0},
    place_id: "default"
  },
  inputVal: "",
  handleSetPosition: () => {},
  handleSetVal: () => {}
}

const MapDataContext = createContext(defaulContext);
export const useMapData = () => useContext(MapDataContext);

type Props = {
  children: React.ReactNode;
};

const initialData: string = "";

const MapDataProvider: React.FC<Props> = ({children}) => {
  const [mapData, setMapData] = useState({
    location: {lat:0, lng: 0},
    place_id: "default"
  });
  const [inputVal, setVal] = useState(initialData);
  const handleSetPosition = useCallback((current: Position): void => {
    setMapData(current);
  }, [mapData]);
  const handleSetVal = useCallback((current: string): void => {
    setVal(current);
  }, [inputVal]);
  return (
    <MapDataContext.Provider value={{mapData, handleSetPosition, inputVal, handleSetVal}}>
      {children}
    </MapDataContext.Provider>
  )
}

export default MapDataProvider;