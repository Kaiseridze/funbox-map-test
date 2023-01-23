import { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Container, Sidebar } from "../../Components";

import { useAppSelector } from "../../Store/Hooks/useAppSelector";

import "./Home.styles.scss";

const Home = () => {
  const { placemarks } = useAppSelector((state) => state.placemarks);
  const defaultCenter = [55.75, 37.57];
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const handleMapMove = (evt: any) => {
    const newCenter = evt.get("newCenter");
    setMapCenter(newCenter);
  };

  // function handlePointDrag(evt: MapEvent, index: number) {
  //   const pointsArr = Array.from(points);
  //   const newCoords = evt.get('target').geometry.getCoordinates();

  //   pointsArr[index].point = newCoords;
  //   setPoints(pointsArr);
  // }

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
          {placemarks.map((placemark) => (
            <Placemark
              key={placemark.id}
              options={{
                draggable: true,
                hasBalloon: true,
              }}
              geometry={placemark.coordinates}
            />
          ))}
        </Map>
      </YMaps>
    </Container>
  );
};

export default Home;
