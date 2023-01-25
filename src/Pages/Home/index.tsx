import { useState } from "react";
import { MapEvent } from "yandex-maps";
import { Container, Sidebar, InteractiveMap } from "../../Components";

const Home = () => {
  const defaultCenter = [59.93431286622302, 30.31946594757369];
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const handleMapMove = (e: MapEvent) => {
    const newCenter = e.get("newCenter");
    setMapCenter(newCenter);
  };

  return (
    <Container display="flex" variant="m">
      <Sidebar mapCenter={mapCenter} />
      <InteractiveMap handleMapMove={handleMapMove} defaultCenter={mapCenter} />
    </Container>
  );
};

export default Home;
