import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";

import { useAppDispatch } from "../../Store/Hooks/useAppDispatch";
import { useAppSelector } from "../../Store/Hooks/useAppSelector";
import { updatePlacemarkState } from "../../Store/Reducers/placemarkSlice";

const InteractiveMap = ({handleMapMove, defaultCenter}: any) => {
  const dispatch = useAppDispatch();
  const { placemarks } = useAppSelector((state) => state.placemarks);

  const onPlacemarkDrag = (e: any, index: number) => {
    const placemarksArr = JSON.parse(JSON.stringify([...placemarks]));
    const newCoords = e.get("target").geometry.getCoordinates();
    placemarksArr[index].coordinates = newCoords;
    dispatch(updatePlacemarkState(placemarksArr));
  };

  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: "f6765f8c-c5ba-427a-ab3a-73957a80a660",
      }}
    >
      <Map
        onBoundsChange={handleMapMove}
        className="map"
        defaultState={{ center: defaultCenter, zoom: 12 }}
      >
        {placemarks.map((placemark, index) => (
          <Placemark
            onDrag={(e: any) => onPlacemarkDrag(e, index)}
            key={placemark.id}
            options={{
              draggable: true,
              hasBalloon: true,
            }}
            properties={{
              hintContent: placemark.title,
              balloonContent: placemark.title,
            }}
            geometry={placemark.coordinates}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          />
        ))}
        {placemarks.map(
          (line, index) =>
            placemarks[index + 1] && (
              <Polyline
                key={line.id}
                geometry={[line.coordinates, placemarks[index + 1].coordinates]}
                options={{
                  strokeColor: "#000",
                  strokeWidth: 3,
                  strokeOpacity: 1,
                }}
              />
            )
        )}
      </Map>
    </YMaps>
  );
};

export default InteractiveMap;
