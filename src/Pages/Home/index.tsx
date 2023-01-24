import { useState } from "react";

import { useAppDispatch } from "../../Store/Hooks/useAppDispatch";
import { updatePlacemarkCoordinates } from "../../Store/Reducers/placemarkSlice";
import { useAppSelector } from "../../Store/Hooks/useAppSelector";

import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import { Container, Sidebar } from "../../Components";

import "./Home.styles.scss";

const Home = () => {
  const dispatch = useAppDispatch();
  const { placemarks } = useAppSelector((state) => state.placemarks);
  const defaultCenter = [55.75, 37.57];
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const handleMapMove = (e: any) => {
    const newCenter = e.get("newCenter");
    setMapCenter(newCenter);
  };

  const onPointDrag = (e: any, index: number) => {
    const placemarksArr = JSON.parse(JSON.stringify([...placemarks]));
    const newCoords = e.get("target").geometry.getCoordinates();
    placemarksArr[index].coordinates = newCoords;
    dispatch(updatePlacemarkCoordinates(placemarksArr));
  };

  return (
    <Container variant="m">
      <Sidebar mapCenter={mapCenter} />
      <YMaps
        query={{
          load: "package.full",
          apikey: "f6765f8c-c5ba-427a-ab3a-73957a80a660",
        }}
      >
        <Map
          onBoundsChange={handleMapMove}
          className="map"
          defaultState={{ center: [55.75, 37.57], zoom: 8 }}
        >
          {placemarks.map((placemark, index) => (
            <Placemark
              onDrag={(e: any) => onPointDrag(e, index)}
              onDragEnd={(e: any) => onPointDrag(e, index)}
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
                  geometry={[
                    line.coordinates,
                    placemarks[index + 1].coordinates,
                  ]}
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
    </Container>
  );
};

export default Home;
